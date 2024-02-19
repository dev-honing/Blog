// components/Contents/DynamoFetch.tsx
"use client";
import React, { useEffect, useState } from "react";
import fetchTableItems from "@/utils/DynamoDB";

const DynamoFetch: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    // DynamoDB에서 데이터를 가져와서 상태를 업데이트합니다.
    fetchTableItems("Posts", (err: Error | null, data: any[] | null) => {
      if (err) {
        console.error("테이블을 가져오는 중 오류가 발생했습니다:", err);
      } else {
        setItems(data || []);
      }
    });
  }, []);

  return (
    <div>
      <h2>DynamoDB에서 가져온 데이터</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamoFetch;
