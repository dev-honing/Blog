// app/pages/api/RDS/rds.ts

import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

// 화살표 함수를 변수에 할당
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // 데이터베이스 연결 정보
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST, // RDS 엔드포인트
    user: process.env.DB_USER, // 데이터베이스 사용자 이름
    password: process.env.DB_PASSWORD, // 데이터베이스 암호
    database: process.env.DB_DATABASE // 데이터베이스 이름
  });

  // GET 요청인지 확인
  if (req.method === 'GET') {
    try {
      // Posts 테이블에서 데이터를 선택
      const [rows] = await connection.execute('SELECT * FROM Posts');

      // 결과를 JSON 형태로 반환
      res.status(200).json(rows);
    } catch (error) {
      // 에러 처리
      console.error('쿼리 실행 중 에러:', error);
      res.status(500).json({ message: '서버 오류가 발생했습니다.' });
    } finally {
      // 연결 해제
      if (connection) {
        await connection.end();
      }
    }
  } else {
    // 지원하지 않는 HTTP 메서드에 대한 오류 응답
    res.status(405).json({ message: '지원하지 않는 메서드입니다.' });
  }
};

// 화살표 함수를 모듈 기본 내보내기로 할당
export default handler;
