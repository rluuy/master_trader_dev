import boto3

# Initialize the IAM client
iam = boto3.client('iam')

# List roles
response = iam.list_roles()
for role in response['Roles']:
    if 'StockTrader' in role['RoleName']:
        print(f"Role Name: {role['RoleName']}")
        print(f"Role ARN: {role['Arn']}")
        print("---")