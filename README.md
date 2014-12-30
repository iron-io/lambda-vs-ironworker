This is example code for blog post comparing AWS Lambda to IronWorker. 

TODO: LINK TO POST

The post has information on testing out the helloworld example. This README will show you how to run
the CreateThumbnail example which is part of the AWS Walkthrough #2: http://docs.aws.amazon.com/lambda/latest/dg/walkthrough-s3-events-adminuser.html

## CreateThumbnail Example

Follow the instructions here to try the Lambda version: 

To run the exact same thing on IronWorker, do the following:

1. Either clone this directory or copy `CreateThumbnailIron.js` and `thumbnail.worker`
1. Create a node_modules directory (if you don't already have it from the AWS walkthrough)
1. Run `npm install async gm aws-sdk`
1. `iron_worker upload thumbnail`
1. `iron_worker queue --payload-file thumbnail-input.txt thumbnail`
1. Check HUD to see that it worked. 
1. Setup S3 Notifications to hit the `thumbnail` worker webhook endpoint: http://dev.iron.io/worker/reference/api/#queue_a_task_from_a_webhook

TODO: put AWS credentials in config file and use it like so: http://docs.aws.amazon.com/AWSRubySDK/latest/AWS.html#config-class_method


