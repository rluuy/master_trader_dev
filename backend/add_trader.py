import boto3
from decimal import Decimal

# Initialize the DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('trader-profiles')

# Define the trader item with Decimal instead of float
pelosi = {
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
    "Description": "Wall Street's favorite grandmother with uncanny market timing",
    "QuipStyle": "subtle_timing_references"
}

# Add the item to the table
try:
    response = table.put_item(Item=pelosi)
    print("Item added successfully:", response)
except Exception as e:
    print("Error adding item:", e)
