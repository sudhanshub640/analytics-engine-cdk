import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import * as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks';
import {StepFunctionsProps} from '../conf/step-functions-props';

export class StepFunctionsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: StepFunctionsProps) {
    super(scope, id, props);

    const stateMachine = new sfn.StateMachine(
                    this,
                    'MyStateMachine',
                    {
                        definition: new tasks.LambdaInvoke(this, "MyLambdaTask",
                            {
                                lambdaFunction: props.lambda
                            }
                        ).next(new sfn.Succeed(this, "GreetedWorld"))
                    }
    );
  }
}