import boto3
import json
import random
import datetime
import csv
import io


def lambda_handler(event, context):
    """
    Lambda function to generate stock recommendations and quips for a specified trader.
    """
    # Get trader ID from the event
    trader_id = None

    # Handle both API Gateway and direct invocation formats
    if event.get('pathParameters') and 'traderId' in event['pathParameters']:
        trader_id = event['pathParameters']['traderId']
    elif 'traderId' in event:
        trader_id = event['traderId']

    if not trader_id:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Missing traderId parameter'})
        }

    # Fetch trader profile from DynamoDB
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('trader-profiles')

    try:
        response = table.get_item(Key={'TraderId': trader_id})
        trader = response.get('Item')

        if not trader:
            return {
                'statusCode': 404,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': f'Trader profile not found for ID {trader_id}'})
            }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': f'Database error: {str(e)}'})
        }

    # Map trader ID to CSV filename
    csv_mapping = {
        'PELOSI': 'NancyPelosi.csv',
        'FETTERMAN': 'JohnFetterman.csv',
        'MTG': 'MarjorieTaylorGreene.csv',
        'CHICKEN': 'chicken.csv',
        'MARK_L_TOSI': 'marktosi.csv'
    }

    # Get CSV filename for this trader
    csv_filename = csv_mapping.get(trader_id)

    # If we have CSV data for this trader, use it for recommendations
    if csv_filename:
        try:
            recommendations = get_recommendations_from_csv(trader, csv_filename)
        except Exception as e:
            print(f"Error processing CSV: {str(e)}")
            # Fall back to static recommendations
            recommendations = get_static_recommendations_for_trader(trader)
    else:
        # Use static recommendations if no CSV data
        recommendations = get_static_recommendations_for_trader(trader)

    # Generate a personalized quip for the top recommendation
    top_recommendation = recommendations[0]
    quip = generate_quip(trader, top_recommendation['ticker'])

    # Prepare the response
    result = {
        'traderId': trader_id,
        'traderName': trader_id,
        'traderDescription': trader.get('Description', ''),
        'timestamp': datetime.datetime.now().isoformat(),
        'topRecommendation': {
            'ticker': top_recommendation['ticker'],
            'confidence': top_recommendation['score'],
            'quip': quip
        },
        'allRecommendations': recommendations,
        'traderPersona': {
            'type': trader.get('TraderType', 'unknown'),
            'strategy': trader.get('TradingStrategy', 'unknown'),
            'riskProfile': trader.get('RiskTolerance', 'unknown')
        }
    }

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'  # Enable CORS
        },
        'body': json.dumps(result)
    }


def get_recommendations_from_csv(trader, csv_filename):
    """Analyze CSV data to generate recommendations."""
    s3 = boto3.client('s3')

    try:
        # Get the CSV file from S3
        response = s3.get_object(
            Bucket='stock-trader-data',
            Key=f'trader-data/{csv_filename}'
        )

        # Read CSV content
        csv_content = response['Body'].read().decode('utf-8')
        csv_reader = csv.DictReader(io.StringIO(csv_content))

        # Convert to list for processing
        trades = list(csv_reader)

        # Analyze buying patterns
        buy_counts = {}
        for trade in trades:
            ticker = trade.get('Ticker', '')
            action = trade.get('Action', '').lower()

            if ticker and action == 'buy':
                if ticker in buy_counts:
                    buy_counts[ticker] += 1
                else:
                    buy_counts[ticker] = 1

        # Sort by buy frequency
        sorted_tickers = sorted(buy_counts.items(), key=lambda x: x[1], reverse=True)

        # Create recommendations based on most bought stocks
        recommendations = []
        for ticker, count in sorted_tickers[:5]:  # Top 5 most bought
            # Calculate a confidence score based on number of buys
            # Normalize to a 0-1 range, then scale to 0.8-0.99
            max_count = sorted_tickers[0][1] if sorted_tickers else 1
            normalized_score = (count / max_count) * 0.19 + 0.8

            recommendations.append({
                "ticker": ticker,
                "score": round(normalized_score, 2),
                "buyCount": count
            })

        # If we don't have enough recommendations, add some static ones
        if len(recommendations) < 3:
            static_recs = get_static_recommendations_for_trader(trader)
            for rec in static_recs:
                if len(recommendations) >= 3:
                    break
                if not any(r['ticker'] == rec['ticker'] for r in recommendations):
                    recommendations.append(rec)

        return recommendations

    except Exception as e:
        print(f"Error reading CSV from S3: {str(e)}")
        # Fall back to static recommendations
        return get_static_recommendations_for_trader(trader)


def get_static_recommendations_for_trader(trader):
    """Generate stock recommendations based on trader's strategy."""
    strategy = trader.get('TradingStrategy', 'passive_index')

    # Define recommendation sets for each trading strategy
    recommendations_by_strategy = {
        "political_insider": [
            {"ticker": "NVDA", "score": 0.94, "sector": "Technology"},
            {"ticker": "MSFT", "score": 0.91, "sector": "Technology"},
            {"ticker": "LMT", "score": 0.87, "sector": "Defense"}
        ],
        "chill_pragmatic": [
            {"ticker": "JNJ", "score": 0.89, "sector": "Healthcare"},
            {"ticker": "PG", "score": 0.87, "sector": "Consumer Staples"},
            {"ticker": "KO", "score": 0.86, "sector": "Consumer Staples"}
        ],
        "political_contrarian": [
            {"ticker": "XOM", "score": 0.88, "sector": "Energy"},
            {"ticker": "DWAC", "score": 0.85, "sector": "Technology"},
            {"ticker": "PLTR", "score": 0.82, "sector": "Technology"}
        ],
        "secretive": [
            {"ticker": "TSLA", "score": 0.95, "sector": "Automotive"},
            {"ticker": "AAPL", "score": 0.93, "sector": "Technology"},
            {"ticker": "AMD", "score": 0.91, "sector": "Technology"}
        ],
        "passive_index": [
            {"ticker": "VTI", "score": 0.99, "sector": "ETF"},
            {"ticker": "SPY", "score": 0.98, "sector": "ETF"},
            {"ticker": "QQQ", "score": 0.86, "sector": "ETF"}
        ]
    }

    # Return recommendations for the trader's strategy, or default to passive_index
    return recommendations_by_strategy.get(strategy, recommendations_by_strategy['passive_index'])


def generate_quip(trader, ticker):
    """Generate a personalized quip for the trader based on their style."""
    strategy = trader.get('TradingStrategy', 'passive_index')

    # Define templates for each trading strategy
    quip_templates = {
        "political_insider": [
            f"My portfolio is like my political career—built on *perfect timing*. I've been eyeing {ticker} for a while, and now might be the *perfect moment* to invest.",
            f"Let me share a little market wisdom: {ticker} is showing some very promising indicators. I just happened to notice them before the general public, as one does.",
            f"I've had my eye on {ticker} for some time now. It's amazing what you can learn when you're deeply involved in... legislative affairs."
        ],
        "chill_pragmatic": [
            f"Look, {ticker} isn't flashy, but it's solid... kinda like my hoodie collection. Steady wins the race, you know?",
            f"I might forget what I said five minutes ago, but I won't forget that {ticker} is a rock-solid pick for the long haul. Keep it chill.",
            f"When you're looking for steady growth without the drama, {ticker} is the way to go. Just set it and... wait, what were we talking about?"
        ],
        "political_contrarian": [
            f"While everyone else is looking left, I'm looking right at {ticker}! This overlooked gem is about to EXPLODE, and I'm not afraid to say it!",
            f"The mainstream analysts won't tell you this, but {ticker} is positioned for a MAJOR breakthrough. Do your own research, patriots!",
            f"{ticker} isn't getting the attention it deserves, and that's EXACTLY why we should be buying it right now! Bold moves win in this market!"
        ],
        "secretive": [
            f"*Soft clucking noises* {ticker} *more mysterious clucking*",
            f"BAWK! {ticker}! BAWK BAWK! *scratches ground mysteriously*",
            f"*Quiet chicken noises* I rarely share my picks, but {ticker} has caught my eye. Don't tell anyone I told you. *nervous wing flapping*"
        ],
        "passive_index": [
            f"Look, I'm not going to pretend {ticker} is exciting. It's an index fund. It's boring. But it works, and that's all that matters.",
            f"Here's my hot tip: {ticker}. It's an index fund. You'll make about 7% annually over 30 years. Not sexy, but it pays for retirement.",
            f"I could pretend I have some special insight, but really, just buy {ticker} and forget about it for a decade. Boring works."
        ]
    }

    # Get templates for this strategy or default to passive_index
    strategy_templates = quip_templates.get(strategy, quip_templates['passive_index'])

    # Select a random template
    return random.choice(strategy_templates)