// components/Contents/DynamoFetch.tsx
"use client" // 클라이언트 사이드에서 동작하는 컴포넌트임을 명시
import React, { useState, useEffect } from "react";
import { fetchData } from "../../utils/DynamoDB";

const DynamoFetch: React.FC = () => {
  // useState Hook으로 data 상태와 setData 함수를 생성
  // data는 가져온 데이터를 저장하는 배열
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // useEffect Hook을 사용해 컴포넌트가 마운트될 때, 실행되는 함수 정의
    const fetchDataFromDynamoDB = async () => {
      try {
        const fetchedData = await fetchData("1"); // postId가 "1"인 데이터 가져오기
        setData(fetchedData);
      } catch (error) {
        console.error("DynamoDB Fetch Error 발생:", error);
      }
    };
    fetchDataFromDynamoDB();
  }, []);

  return (
    <div>
      {/* 가져온 데이터를 표시 */}
      {data.map((item, index) => (
        <div key={index}>
          {/* 데이터를 표시하는 컴포넌트 내용 */}
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default DynamoFetch;
