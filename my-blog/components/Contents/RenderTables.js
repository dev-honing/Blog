// RenderTables.js (React 컴포넌트)
import React, { useEffect, useState } from 'react';
import { scanTableItems } from '@/DynamoDB/scanTables';

const RenderTables = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // JavaScript 파일에서 가져온 함수를 호출하여 데이터를 가져오기
    scanTableItems('Posts', (err, data) => {
      if (err) {
        console.error('테이블을 가져오는 중 오류가 발생했습니다:', err);
      } else {
        // 데이터를 가져오면 상태를 업데이트
        setItems(data || []);
      }
    });
  }, []);

  return (
    <div>
      <h2>DynamoDB 테이블에서 가져온 데이터</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default RenderTables;
