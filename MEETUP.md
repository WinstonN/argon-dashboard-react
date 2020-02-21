## react-mobx-amplify
### Steps to get this going

Fork theme to github  
Clone to laptop  
Setup remotes (origin, upstream)  

## Creative tim theme

nvm use 10  
npm install  
npm start

At this stage you can view your theme at http://localhost:3000/

## amplify
```
# Uncaught (in promise) Error: No credentials, applicationId or region
#    at AWSPinpointProvider.<anonymous> (AWSPinpointProvider.js:349)
#    at step (AWSPinpointProvider.js:137)
#    at Object.next (AWSPinpointProvider.js:67)
#    at fulfilled (AWSPinpointProvider.js:19)

npm install aws-amplify aws-amplify-react
```

Create IAM user with policy https://aws-amplify.github.io/docs/cli-toolchain/usage#iam-policy-for-the-cli  
amplify configure  
```
❯❯❯ amplify configure
Follow these steps to set up access to your AWS account:

Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue

Specify the AWS Region
? region:  ap-southeast-2
Specify the username of the new IAM user:
? user name:  chchjs-react-mobx-amplify
Complete the user creation using the AWS console
https://console.aws.amazon.com/iam/home?region=undefined#/users$new?step=final&accessKey&userNames=chchjs-react-mobx-amplify&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess
Press Enter to continue

Enter the access key of the newly created user:
? accessKeyId:  AKIA46AYJM**********
? secretAccessKey:  sb2nfUTfBlZWrMswLxf7********************
This would update/create the AWS Profile in your local machine
? Profile Name:  chchjs-react-mobx-amplify

Successfully set up the new user.
```

amplify init
```
❯❯❯ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project react-mobx-amplify
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use chchjs-react-mobx-amplify

Adding backend environment dev to AWS Amplify Console app: d2j73pw2o6owkr
⠋ Initializing project in the cloud...

CREATE_IN_PROGRESS amplify-react-mobx-amplify-dev-110027 AWS::CloudFormation::Stack Sat Feb 01 2020 11:00:45 GMT+1300 (New Zealand Daylight Time) User Initiated
CREATE_IN_PROGRESS AuthRole                              AWS::IAM::Role             Sat Feb 01 2020 11:00:48 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS UnauthRole                            AWS::IAM::Role             Sat Feb 01 2020 11:00:48 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS DeploymentBucket                      AWS::S3::Bucket            Sat Feb 01 2020 11:00:49 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS UnauthRole                            AWS::IAM::Role             Sat Feb 01 2020 11:00:49 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS AuthRole                              AWS::IAM::Role             Sat Feb 01 2020 11:00:50 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
⠙ Initializing project in the cloud...

CREATE_IN_PROGRESS DeploymentBucket AWS::S3::Bucket Sat Feb 01 2020 11:00:52 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
⠹ Initializing project in the cloud...

CREATE_COMPLETE UnauthRole AWS::IAM::Role Sat Feb 01 2020 11:01:08 GMT+1300 (New Zealand Daylight Time)
CREATE_COMPLETE AuthRole   AWS::IAM::Role Sat Feb 01 2020 11:01:08 GMT+1300 (New Zealand Daylight Time)
⠸ Initializing project in the cloud...

CREATE_COMPLETE DeploymentBucket AWS::S3::Bucket Sat Feb 01 2020 11:01:13 GMT+1300 (New Zealand Daylight Time)
✔ Successfully created initial AWS cloud resources for deployments.


CREATE_COMPLETE amplify-react-mobx-amplify-dev-110027 AWS::CloudFormation::Stack Sat Feb 01 2020 11:01:16 GMT+1300 (New Zealand Daylight Time)
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
“amplify console” to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```
## add auth
### amplify add auth
```
❯❯❯ amplify auth add
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configuration?
 Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Email
 Do you want to configure advanced settings? No, I am done.
Successfully added resource reactmobxamplify7e350b08 locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

### amplify push
```
❯❯❯ amplify push
✔ Successfully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name            | Operation | Provider plugin   |
| -------- | ------------------------ | --------- | ----------------- |
| Auth     | reactmobxamplify7e350b08 | Create    | awscloudformation |
? Are you sure you want to continue? Yes
⠏ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-react-mobx-amplify-dev-110027 AWS::CloudFormation::Stack Sat Feb 01 2020 11:33:47 GMT+1300 (New Zealand Daylight Time) User Initiated
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS authreactmobxamplify7e350b08 AWS::CloudFormation::Stack Sat Feb 01 2020 11:33:52 GMT+1300 (New Zealand Daylight Time)
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole AWS::IAM::Role             Sat Feb 01 2020 11:33:53 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS authreactmobxamplify7e350b08   AWS::CloudFormation::Stack Sat Feb 01 2020 11:33:54 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole AWS::IAM::Role             Sat Feb 01 2020 11:33:54 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole AWS::IAM::Role             Sat Feb 01 2020 11:33:56 GMT+1300 (New Zealand Daylight Time) Failed to check if policy already exists due to lack of getRolePolicy permission, you might be overriding or adopting an existing policy on this Role
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-react-mobx-amplify-dev-110027-authreactmobxamplify7e350b08-1F95SGSD0U058 AWS::CloudFormation::Stack Sat Feb 01 2020 11:33:54 GMT+1300 (New Zealand Daylight Time) User Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Sat Feb 01 2020 11:34:00 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Sat Feb 01 2020 11:34:01 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Sat Feb 01 2020 11:34:03 GMT+1300 (New Zealand Daylight Time) Failed to check if policy already exists due to lack of getRolePolicy permission, you might be overriding or adopting an existing policy on this Role
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UpdateRolesWithIDPFunctionRole AWS::IAM::Role Sat Feb 01 2020 11:34:14 GMT+1300 (New Zealand Daylight Time)
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE SNSRole AWS::IAM::Role Sat Feb 01 2020 11:34:21 GMT+1300 (New Zealand Daylight Time)
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Sat Feb 01 2020 11:34:24 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Sat Feb 01 2020 11:34:27 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_COMPLETE    UserPool AWS::Cognito::UserPool Sat Feb 01 2020 11:34:27 GMT+1300 (New Zealand Daylight Time)
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientWeb AWS::Cognito::UserPoolClient Sat Feb 01 2020 11:34:30 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS UserPoolClient    AWS::Cognito::UserPoolClient Sat Feb 01 2020 11:34:31 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS UserPoolClientWeb AWS::Cognito::UserPoolClient Sat Feb 01 2020 11:34:32 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_COMPLETE    UserPoolClientWeb AWS::Cognito::UserPoolClient Sat Feb 01 2020 11:34:32 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS UserPoolClient    AWS::Cognito::UserPoolClient Sat Feb 01 2020 11:34:32 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClient AWS::Cognito::UserPoolClient Sat Feb 01 2020 11:34:33 GMT+1300 (New Zealand Daylight Time)
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role Sat Feb 01 2020 11:34:36 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role Sat Feb 01 2020 11:34:37 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientRole AWS::IAM::Role Sat Feb 01 2020 11:34:54 GMT+1300 (New Zealand Daylight Time)
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLambda       AWS::Lambda::Function Sat Feb 01 2020 11:34:58 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS UserPoolClientLambda       AWS::Lambda::Function Sat Feb 01 2020 11:34:59 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_COMPLETE    UserPoolClientLambda       AWS::Lambda::Function Sat Feb 01 2020 11:34:59 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy      Sat Feb 01 2020 11:35:03 GMT+1300 (New Zealand Daylight Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy Sat Feb 01 2020 11:35:03 GMT+1300 (New Zealand Daylight Time) Failed to check if policy already exists due to lack of getRolePolicy permission, you might be overriding or adopting an existing policy on this Role
CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy Sat Feb 01 2020 11:35:04 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientLambdaPolicy AWS::IAM::Policy Sat Feb 01 2020 11:35:21 GMT+1300 (New Zealand Daylight Time)
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Sat Feb 01 2020 11:35:23 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Sat Feb 01 2020 11:35:24 GMT+1300 (New Zealand Daylight Time) Failed to check if policy already exists due to lack of getRolePolicy permission, you might be overriding or adopting an existing policy on this Role
CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Sat Feb 01 2020 11:35:25 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientLogPolicy AWS::IAM::Policy Sat Feb 01 2020 11:35:41 GMT+1300 (New Zealand Daylight Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientInputs Custom::LambdaCallout Sat Feb 01 2020 11:35:45 GMT+1300 (New Zealand Daylight Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientInputs Custom::LambdaCallout      Sat Feb 01 2020 11:35:48 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_COMPLETE    UserPoolClientInputs Custom::LambdaCallout      Sat Feb 01 2020 11:35:48 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS IdentityPool         AWS::Cognito::IdentityPool Sat Feb 01 2020 11:35:52 GMT+1300 (New Zealand Daylight Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPool        AWS::Cognito::IdentityPool               Sat Feb 01 2020 11:35:53 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_COMPLETE    IdentityPool        AWS::Cognito::IdentityPool               Sat Feb 01 2020 11:35:54 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Sat Feb 01 2020 11:35:57 GMT+1300 (New Zealand Daylight Time)
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPoolRoleMap                                                              AWS::Cognito::IdentityPoolRoleAttachment Sat Feb 01 2020 11:35:59 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_COMPLETE    IdentityPoolRoleMap                                                              AWS::Cognito::IdentityPoolRoleAttachment Sat Feb 01 2020 11:35:59 GMT+1300 (New Zealand Daylight Time)
CREATE_COMPLETE    amplify-react-mobx-amplify-dev-110027-authreactmobxamplify7e350b08-1F95SGSD0U058 AWS::CloudFormation::Stack               Sat Feb 01 2020 11:36:02 GMT+1300 (New Zealand Daylight Time)
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE authreactmobxamplify7e350b08 AWS::CloudFormation::Stack Sat Feb 01 2020 11:36:09 GMT+1300 (New Zealand Daylight Time)
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunction AWS::Lambda::Function Sat Feb 01 2020 11:36:12 GMT+1300 (New Zealand Daylight Time)
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunction        AWS::Lambda::Function Sat Feb 01 2020 11:36:13 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_COMPLETE    UpdateRolesWithIDPFunction        AWS::Lambda::Function Sat Feb 01 2020 11:36:14 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Sat Feb 01 2020 11:36:16 GMT+1300 (New Zealand Daylight Time)
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Sat Feb 01 2020 11:36:20 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_COMPLETE    UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Sat Feb 01 2020 11:36:21 GMT+1300 (New Zealand Daylight Time)
⠹ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-react-mobx-amplify-dev-110027 AWS::CloudFormation::Stack Sat Feb 01 2020 11:36:24 GMT+1300 (New Zealand Daylight Time)
UPDATE_COMPLETE                     amplify-react-mobx-amplify-dev-110027 AWS::CloudFormation::Stack Sat Feb 01 2020 11:36:25 GMT+1300 (New Zealand Daylight Time)
✔ All resources are updated in the cloud


11:36:51 in ../chchjs/react-mobx-amplify/amplify on  react-mobx-amplify [!?] took 3m 20s
```

### connect login and signup of app with cognito

create helper class
modify login & register (app redirect to dashboard)

## add mobx
TODO

## add storage
### amplify storage add
```
❯❯❯ amplify storage add
? Please select from one of the below mentioned services: Content (Images,
 audio, video, etc.)
? Please provide a friendly name for your resource that will be used to la
bel this category in the project: reactmobxamplifystorage
? Please provide bucket name: react-mobx-amplify
? Who should have access: Auth users only
? What kind of access do you want for Authenticated users? create/update
? Do you want to add a Lambda Trigger for your S3 Bucket? No
Successfully added resource reactmobxamplifystorage locally

Some next steps:
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
```

### amplify push
```
✔ Successfully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name            | Operation | Provider plugin   |
| -------- | ------------------------ | --------- | ----------------- |
| Storage  | reactmobxamplifystorage  | Create    | awscloudformation |
| Auth     | reactmobxamplify7e350b08 | No Change | awscloudformation |
? Are you sure you want to continue? Yes
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS storagereactmobxamplifystorage        AWS::CloudFormation::Stack Fri Feb 21 2020 20:12:21 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS storagereactmobxamplifystorage        AWS::CloudFormation::Stack Fri Feb 21 2020 20:12:21 GMT+1300 (New Zealand Daylight Time)
UPDATE_IN_PROGRESS amplify-react-mobx-amplify-dev-110027 AWS::CloudFormation::Stack Fri Feb 21 2020 20:12:16 GMT+1300 (New Zealand Daylight Time) User Initiated
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-react-mobx-amplify-dev-110027-storagereactmobxamplifystorage-TMTEW79FOMEJ AWS::CloudFormation::Stack Fri Feb 21 2020 20:12:21 GMT+1300 (New Zealand Daylight Time) User Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS authreactmobxamplify7e350b08 AWS::CloudFormation::Stack Fri Feb 21 2020 20:12:22 GMT+1300 (New Zealand Daylight Time)
⠼ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE authreactmobxamplify7e350b08 AWS::CloudFormation::Stack Fri Feb 21 2020 20:12:23 GMT+1300 (New Zealand Daylight Time)
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS S3Bucket AWS::S3::Bucket Fri Feb 21 2020 20:12:26 GMT+1300 (New Zealand Daylight Time)
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS S3Bucket AWS::S3::Bucket Fri Feb 21 2020 20:12:28 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE S3Bucket AWS::S3::Bucket Fri Feb 21 2020 20:12:50 GMT+1300 (New Zealand Daylight Time)
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS S3AuthProtectedPolicy AWS::IAM::Policy Fri Feb 21 2020 20:12:53 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS S3AuthPublicPolicy    AWS::IAM::Policy Fri Feb 21 2020 20:12:53 GMT+1300 (New Zealand Daylight Time)
CREATE_IN_PROGRESS S3AuthPrivatePolicy   AWS::IAM::Policy Fri Feb 21 2020 20:12:52 GMT+1300 (New Zealand Daylight Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS S3AuthUploadPolicy    AWS::IAM::Policy Fri Feb 21 2020 20:12:55 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthPrivatePolicy   AWS::IAM::Policy Fri Feb 21 2020 20:12:55 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthProtectedPolicy AWS::IAM::Policy Fri Feb 21 2020 20:12:54 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthPublicPolicy    AWS::IAM::Policy Fri Feb 21 2020 20:12:54 GMT+1300 (New Zealand Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthUploadPolicy    AWS::IAM::Policy Fri Feb 21 2020 20:12:54 GMT+1300 (New Zealand Daylight Time) Failed to check if policy already exists due to lack of getRolePolicy permission, you might be overriding or adopting an existing policy on this Role
CREATE_IN_PROGRESS S3AuthProtectedPolicy AWS::IAM::Policy Fri Feb 21 2020 20:12:53 GMT+1300 (New Zealand Daylight Time) Failed to check if policy already exists due to lack of getRolePolicy permission, you might be overriding or adopting an existing policy on this Role
CREATE_IN_PROGRESS S3AuthPublicPolicy    AWS::IAM::Policy Fri Feb 21 2020 20:12:53 GMT+1300 (New Zealand Daylight Time) Failed to check if policy already exists due to lack of getRolePolicy permission, you might be overriding or adopting an existing policy on this Role
CREATE_IN_PROGRESS S3AuthPrivatePolicy   AWS::IAM::Policy Fri Feb 21 2020 20:12:53 GMT+1300 (New Zealand Daylight Time) Failed to check if policy already exists due to lack of getRolePolicy permission, you might be overriding or adopting an existing policy on this Role
CREATE_IN_PROGRESS S3AuthUploadPolicy    AWS::IAM::Policy Fri Feb 21 2020 20:12:53 GMT+1300 (New Zealand Daylight Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE S3AuthUploadPolicy    AWS::IAM::Policy Fri Feb 21 2020 20:13:10 GMT+1300 (New Zealand Daylight Time)
CREATE_COMPLETE S3AuthPrivatePolicy   AWS::IAM::Policy Fri Feb 21 2020 20:13:10 GMT+1300 (New Zealand Daylight Time)
CREATE_COMPLETE S3AuthProtectedPolicy AWS::IAM::Policy Fri Feb 21 2020 20:13:10 GMT+1300 (New Zealand Daylight Time)
CREATE_COMPLETE S3AuthPublicPolicy    AWS::IAM::Policy Fri Feb 21 2020 20:13:09 GMT+1300 (New Zealand Daylight Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-react-mobx-amplify-dev-110027-storagereactmobxamplifystorage-TMTEW79FOMEJ AWS::CloudFormation::Stack Fri Feb 21 2020 20:13:12 GMT+1300 (New Zealand Daylight Time)
⠏ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE                     authreactmobxamplify7e350b08          AWS::CloudFormation::Stack Fri Feb 21 2020 20:13:26 GMT+1300 (New Zealand Daylight Time)
UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-react-mobx-amplify-dev-110027 AWS::CloudFormation::Stack Fri Feb 21 2020 20:13:25 GMT+1300 (New Zealand Daylight Time)
CREATE_COMPLETE                     storagereactmobxamplifystorage        AWS::CloudFormation::Stack Fri Feb 21 2020 20:13:23 GMT+1300 (New Zealand Daylight Time)
⠦ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE amplify-react-mobx-amplify-dev-110027 AWS::CloudFormation::Stack Fri Feb 21 2020 20:13:27 GMT+1300 (New Zealand Daylight Time)
✔ All resources are updated in the cloud
```

