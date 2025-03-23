import boto3
import json

# Initialize the Lambda client
lambda_client = boto3.client('lambda')

# Define test event
test_event = {
    'pathParameters': {
        'traderId': 'MARK_L_TOSI'  # Test with Nancy Pelosi's trader profile
    }
}

# Invoke the Lambda function
try:
    response = lambda_client.invoke(
        FunctionName='get-stock-recommendations',
        InvocationType='RequestResponse',
        Payload=json.dumps(test_event)
    )

    # Read and parse the response
    payload = response['Payload'].read().decode('utf-8')
    result = json.loads(payload)

    # Pretty print the result
    print("Lambda function response:")
    print(json.dumps(result, indent=2))

    # If the response contains a 'body' field (API Gateway format)
    if 'body' in result:
        body = json.loads(result['body'])
        print("\nRecommendation details:")
        print(f"Trader: {body['traderName']}")
        print(f"Top Pick: {body['topRecommendation']['ticker']}")
        print(f"Confidence: {body['topRecommendation']['confidence']}")
        print(f"Quip: {body['topRecommendation']['quip']}")

except Exception as e:
    print("Error invoking Lambda function:", e)