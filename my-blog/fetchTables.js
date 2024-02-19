// fetchTables.js
const AWS = require("aws-sdk");
const dotenv = require("dotenv");

dotenv.config();

// AWS DynamoDB 인스턴스 생성
const ddb = new AWS.DynamoDB({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // 액세스 키
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // 비밀 액세스 키
  region: "ap-northeast-2", // DynamoDB 리전을 직접 명시(서울)
});

/**
 * 특정 테이블의 아이템들을 가져오는 함수
 * @param {string} tableName 가져올 테이블의 이름
 * @param {function} callback 콜백 함수
 */
function fetchTableItems(tableName, callback) {
  // DynamoDB의 스캔할 테이블에 대한 매개변수를 설정
  const params = {
    TableName: tableName, // 가져올 테이블명
  };
  
  // DynamoDB 스캔 작업 실행
  ddb.scan(params, (err, data) => {
    if (err) {
      // 에러 발생 시, 에러를 출력하고 콜백함수 호출
      console.error(err);
      callback(err, null);
    } else {
      // 에러가 없으면, 스캔된 아이템들을 콜백함수에 전달해서 처리
      callback(null, data.Items);
    }
  });
}

module.exports = fetchTableItems;
