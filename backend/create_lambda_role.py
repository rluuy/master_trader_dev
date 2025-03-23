import boto3
import json

# Initialize the IAM client
iam = boto3.client('iam')

# Define the trust policy (which allows Lambda to assume this role)
trust_policy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "lambda.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}

# Create the role
try:
    response = iam.create_role(
        RoleName='StockTraderLambdaRole',
        AssumeRolePolicyDocument=json.dumps(trust_policy),
        Description='Role for Stock Trader Lambda functions'
    )

    # Attach policies
    iam.attach_role_policy(
        RoleName='StockTraderLambdaRole',
        PolicyArn='arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess'
    )

    iam.attach_role_policy(
        RoleName='StockTraderLambdaRole',
        PolicyArn='arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole'
    )

    print("Role created successfully:", response['Role']['Arn'])
    print("Note this ARN for later use:", response['Role']['Arn'])
except Exception as e:
    print("Error creating role:", e)