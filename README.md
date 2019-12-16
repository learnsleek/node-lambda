# node-lamda
Deploy with SAM :-

aws s3 mb s3://spring-boot-amit1


aws cloudformation package --template-file template.yaml --output-template-file target/output-sam.yaml --s3-bucket spring-boot-amit1  --profile=mc


aws cloudformation deploy --template-file target/output-sam.yaml --stack-name spring-boot-amit1 --capabilities CAPABILITY_IAM --profile=mc
