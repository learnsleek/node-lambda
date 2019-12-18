# node-lamda
Deploy with SAM :-

aws s3 mb s3://spring-boot-amit1

aws cloudformation package --template-file template.yaml --output-template-file output-sam.yaml --s3-bucket spring-boot-amit1  --profile=mc

aws cloudformation deploy --template-file output-sam.yaml --stack-name node-lamda --capabilities CAPABILITY_IAM --profile=mc
