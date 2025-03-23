import boto3

# Initialize S3 client
s3 = boto3.client('s3')

# Create bucket
try:
    region = boto3.session.Session().region_name

    # For regions other than us-east-1
    if region != 'us-east-1':
        s3.create_bucket(
            Bucket='stock-trader-data',
            CreateBucketConfiguration={
                'LocationConstraint': region
            }
        )
    else:
        # For us-east-1, no LocationConstraint is needed
        s3.create_bucket(
            Bucket='stock-trader-data'
        )

    print("Bucket created successfully: stock-trader-data")
except Exception as e:
    print(f"Error creating bucket: {e}")