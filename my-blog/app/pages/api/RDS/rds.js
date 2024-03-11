const mysql = require('mysql2');

// RDS 연결
const rds = mysql.createConnection({
  host: process.env.RDS_HOST,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
  port: process.env.RDS_PORT
});

// Next.js API Route 생성
export default async (req, res) => {
  // MariaDB 쿼리 실행
  rds.query('SELECT * FROM Posts', function (err, results, fields) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ results });
    }
  });
}