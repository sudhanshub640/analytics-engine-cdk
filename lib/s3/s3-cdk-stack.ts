import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_s3 as s3 } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export class S3CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

     const s3Bucket = new s3.Bucket(this, 'callRecordingsCollections', {
          bucketName: 'call-recordings-collections',
          objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
          blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
     });

     s3Bucket.grantRead(new iam.AccountRootPrincipal());
  }
}
