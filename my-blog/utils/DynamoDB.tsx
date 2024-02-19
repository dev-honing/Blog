// utils/DynamoDB.tsx

import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config(); // .env.local 파일에서 환경 변수 로드

const ddb = new AWS.DynamoDB({
  // .env.local 파일에서 설정한 환경 변수 사용
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

/**
 * DynamoDB에 쿼리를 보내고 결과를 반환하는 함수
 * @param {AWS.DynamoDB.QueryInput} params DynamoDB 쿼리 실행을 위한 파라미터
 * @returns {Promise<AWS.DynamoDB.QueryOutput>} DynamoDB 쿼리의 결과를 나타내는 Promise
 */
export function query(params: AWS.DynamoDB.QueryInput): Promise<AWS.DynamoDB.QueryOutput> {
  return ddb.query(params).promise();
}
