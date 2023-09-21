import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'

export class LambdaCdkStack extends cdk.Stack {

  helloFunction: lambda.Function;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.helloFunction = new lambda.Function(
                            this,
                            'MyLambdaFunction',
                            {
                                code: lambda.Code.fromInline(
                                    `
                                        exports.handler = (event, context, callback) => {
                                            callback(null, "Hello World!");
                                        };
                                    `
                                ),
                                runtime: lambda.Runtime.NODEJS_18_X,
                                handler: "index.handler",
                                timeout: cdk.Duration.seconds(3)
                            }
    );
  }
}