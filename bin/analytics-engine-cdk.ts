#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { S3CdkStack } from '../lib/s3/s3-cdk-stack';
import { LambdaCdkStack } from '../lib/lambda/lambda-cdk-stack';
import { StepFunctionsCdkStack } from '../lib/step_functions/step-functions-cdk-stack';

const app = new cdk.App();

const s3Stack = new S3CdkStack(app, 'S3CdkStack', {});
const lambdaStack = new LambdaCdkStack(app, 'LambdaCdkStack', {});
const stepFunctionsStack = new StepFunctionsCdkStack(app, 'StepFunctionsCdkStack', {lambda : lambdaStack.helloFunction});


