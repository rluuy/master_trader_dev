import boto3
import json

# Initialize the Lambda client
lambda_client = boto3.client('lambda')

# Create the Lambda function
try:
    with open('get-recommendations.zip', 'rb') as f:
        zip_file = f.read()

    response = lambda_client.create_function(
        FunctionName='get-stock-recommendations',
        Runtime='python3.9',
        Role='arn:aws:iam::681964180868:role/StockTraderLambdaRole',  # Replace with the ARN of the StockTraderLambdaRole
        Handler='lambda_function.lambda_handler',
        Code={
            'ZipFile': zip_file
        },
        Description='Generates stock recommendations and quips for trader personas',
        Timeout=10,
        MemorySize=128,
        Publish=True
    )

    print("Lambda function created successfully:", response['FunctionArn'])
except Exception as e:
    print("Error creating Lambda function:", e)