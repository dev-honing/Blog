// DynamoDB.tsx
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const ddb = new AWS.DynamoDB({
  region: "ap-northeast-2", // 리전을 직접 명시
});

/**
 * 특정 테이블의 아이템들을 가져오는 함수
 * @param {string} tableName 가져올 테이블의 이름
 * @param {function} callback 콜백 함수
 */
function fetchTableItems(tableName: string, callback: Function): void {
  const params = {
    TableName: tableName,
  };

  ddb.scan(params, (err, data) => {
    if (err) {
      console.error(err);
      callback(err, null);
    } else {
      callback(null, data.Items);
    }
  });
}

export default fetchTableItems;
