import boto3
import os

# Initialize S3 client
s3 = boto3.client('s3')

# List of CSV files to upload
csv_files = [
    'NancyPelosi.csv',
    'JohnFetterman.csv',
    'MarjorieTaylorGreene.csv',
    'chicken.csv',
    'marktosi.csv'
]

# Upload each file
for csv_file in csv_files:
    if os.path.exists(csv_file):
        try:
            s3.upload_file(
                Filename=csv_file,
                Bucket='stock-trader-data',
                Key=f'trader-data/{csv_file}'
            )
            print(f"Uploaded {csv_file} successfully")
        except Exception as e:
            print(f"Error uploading {csv_file}: {e}")
    else:
        print(f"File not found: {csv_file}")