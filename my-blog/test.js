const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const dynamoDb = new AWS.DynamoDB();

const params = {
  TableName: 'Posts',
};

dynamoDb.query(params, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data.Items); // 쿼리 결과를 콘솔에 출력
  }
});
