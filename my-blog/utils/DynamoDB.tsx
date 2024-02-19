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
