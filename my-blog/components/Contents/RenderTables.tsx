// components/Contents/RenderTables.tsx
import React, { useEffect, useState } from "react";
import fetchTableItems from "@/fetchTables";

const RenderTables: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    // fetchTables 모듈에서 fetchTableItems 함수를 호출하여 Posts 테이블의 데이터 가져오기
    fetchTableItems("Posts", (err: Error | null, data: any[] | null) => {
      if (err) {
        console.error("테이블을 가져오는 중 오류가 발생:", err);
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
