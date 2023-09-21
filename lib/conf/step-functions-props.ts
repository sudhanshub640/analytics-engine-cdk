import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda'

export interface StepFunctionsProps extends cdk.StackProps {
  lambda: lambda.Function;
}