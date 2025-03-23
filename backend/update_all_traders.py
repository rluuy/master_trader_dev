import boto3
from decimal import Decimal

# Initialize the DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('trader-profiles')

# Define all trader personas with updated information
traders = [
    {
        "TraderId": "PELOSI",
        "RiskTolerance": "balanced",
        "TradingStrategy": "political_insider",
        "TraderType": "opportunistic",
        "SectorPreferences": {
            "Technology": Decimal('0.4'),
            "Financial": Decimal('0.3'),
            "Energy": Decimal('0.2'),
            "Defense": Decimal('0.1')
        },
        "AvgTradeSize": Decimal('100000'),
        "Description": "Wall Street's favorite grandmother with uncanny ability to pick winning stocks. She's outperformed hedge fund managers, Reddit traders, and probably even Warren Buffett's intern.",
        "QuipStyle": "timing_references",
        "AlgorithmDescription": "Nancy's algorithm allegedly taps into her deep well of insider knowledge, using her uncanny ability to time the market like a seasoned pro."
    },
    {
        "TraderId": "FETTERMAN",
        "RiskTolerance": "moderate",
        "TradingStrategy": "chill_pragmatic",
        "TraderType": "long-term",
        "SectorPreferences": {
            "Established": Decimal('0.6'),
            "Stable": Decimal('0.3'),
            "Growth": Decimal('0.1')
        },
        "AvgTradeSize": Decimal('60000'),
        "Description": "The cool cucumber who is a down-to-earth pragmatist, making waves in Washington one cozy hoodie at a time. A chill business guy known for being forgetful.",
        "QuipStyle": "laid_back",
        "AlgorithmDescription": "Fetterman's algorithm is all about steady growth and keeping things cool. It focuses on long-term stability over quick wins."
    },
    {
        "TraderId": "MTG",
        "RiskTolerance": "aggressive",
        "TradingStrategy": "political_contrarian",
        "TraderType": "bold",
        "SectorPreferences": {
            "Energy": Decimal('0.4'),
            "Defense": Decimal('0.3'),
            "Consumer": Decimal('0.2'),
            "Financial": Decimal('0.1')
        },
        "AvgTradeSize": Decimal('75000'),
        "Description": "A rising star in the stock market with recommendations as bold and unconventional as her career. Known for her straight-shooting style.",
        "QuipStyle": "confrontational_uppercase",
        "AlgorithmDescription": "MTG's algorithm runs on pure conviction and boldness. It's all about finding those surprise opportunities in the market."
    },
    {
        "TraderId": "CHICKEN",
        "RiskTolerance": "extremely_aggressive",
        "TradingStrategy": "secretive",
        "TraderType": "mysterious",
        "SectorPreferences": {
            "Technology": Decimal('0.5'),
            "Healthcare": Decimal('0.3'),
            "Materials": Decimal('0.2')
        },
        "AvgTradeSize": Decimal('250000'),
        "Description": "No ordinary bird with over 2000% returns in the past 5 years. Extremely secretive about trades, offering only a few carefully chosen tips.",
        "QuipStyle": "cryptic_chicken_sounds",
        "AlgorithmDescription": "A closely guarded secret. Rumor has it, it's based on years of experience watching the world from a perch, seeing things others miss."
    },
    {
        "TraderId": "MARK_L_TOSI",
        "RiskTolerance": "conservative",
        "TradingStrategy": "passive_index",
        "TraderType": "long-term",
        "SectorPreferences": {
            "broad_market": Decimal('1.0')
        },
        "AvgTradeSize": Decimal('50000'),
        "Description": "The steady, passive investor who prefers to play it safe. Known for his unexciting and boring approach, focusing on simplicity.",
        "QuipStyle": "deliberately_boring",
        "AlgorithmDescription": "Follows the soundest investing advice: index funds. Nothing crazy, just spreading money around the market and letting you forget about it."
    }
]

# Add each trader to the table
for trader in traders:
    try:
        response = table.put_item(Item=trader)
        print(f"Added {trader['TraderId']} successfully.")
    except Exception as e:
        print(f"Error adding {trader['TraderId']}: {e}")
