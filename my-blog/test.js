const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const ddb = new AWS.DynamoDB({
  region: "ap-northeast-2"
});

const params = {
  TableName: 'Posts',
};

ddb.scan(params, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data.Items); // 쿼리 결과를 콘솔에 출력
  }
});

/**
 * <출력 내용>
 * [
  {
    postId: { S: '2' },
    dateTime: { S: '2024-02-19 15:25' },
    tags: { S: 'React.js' }
  },
  {
    postId: { S: '1' },
    dateTime: { S: '2024-02-19 15:25' },
    tags: { S: 'Python' }
  }
]
 */