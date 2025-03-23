import boto3
from pprint import pprint

# Initialize the DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('trader-profiles')

# Scan the table to get all items
response = table.scan()

# Print each trader profile
print(f"Found {len(response['Items'])} traders:")
for i, item in enumerate(response['Items'], 1):
    print(f"\n--- Trader {i}: {item['TraderId']} ---")
    print(f"Description: {item['Description']}")
    print(f"Trading Strategy: {item['TradingStrategy']}")
    print(f"Risk Tolerance: {item['RiskTolerance']}")
    print(f"Algorithm: {item.get('AlgorithmDescription', 'No algorithm description')}")
