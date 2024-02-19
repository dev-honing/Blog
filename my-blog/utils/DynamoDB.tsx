// utils/DynamoDB.tsx

import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config(); // .env.local 파일에서 환경 변수 로드

const ddb = new AWS.DynamoDB({
  // .env.local 파일에서 설정한 환경 변수 사용
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

/**
 * DynamoDB에 쿼리를 보내고 결과를 반환하는 함수
 * @param {AWS.DynamoDB.QueryInput} params DynamoDB 쿼리 실행을 위한 파라미터
 * @returns {Promise<AWS.DynamoDB.QueryOutput>} DynamoDB 쿼리의 결과를 나타내는 Promise
 */
export function query(params: AWS.DynamoDB.QueryInput): Promise<AWS.DynamoDB.QueryOutput> {
  return ddb.query(params).promise();
}

/**
 * DynamoDB에서 데이터를 가져오는 함수
 * @param {string} postId 가져올 데이터의 postId
 * @returns {Promise<any[]>} DynamoDB에서 가져온 데이터를 나타내는 Promise
 */
export async function fetchData(postId: string): Promise<any[]> {
  try {
    const params = {
      TableName: "Posts", // 테이블명
      KeyConditionExpression: "postId = :postId", // postId 속성이 특정 값과 일치하는지를 나타내는 조건
      ExpressionAttributeValues: { ":postId": { S: postId.toString() } }, // 쿼리에 사용할 값으로 postId를 문자열 형태로 변환하여 설정
    };
    const result = await query(params); // query 함수 호출
    return result.Items ?? [];
  } catch (error) {
    console.error("Error fetching data from DynamoDB:", error);
    throw error;
  }
}
