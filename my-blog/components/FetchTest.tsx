// components/FetchTest.tsx
import { useEffect, useState } from 'react';

type TestData = {
  id: number;
  Greet: string;
  method: string;
  path: string;
};

const FetchTest = () => {
  const [data, setData] = useState<TestData | null>(null);

  useEffect(() => {
    const getTest = async () => {
      const res = await fetch('http://localhost:3000/api/test');
      const json = await res.json();
      setData(json.Test);
    };

    getTest();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main style={{backgroundColor: "#000", color: "#fff"}}>
      <h2>Fetch 내용</h2>
      <span>
        <h3>고유번호: {data.id}</h3>
        <p>인사말: {data.Greet}</p>
        <p>HTTP 요청 메서드: {data.method}</p>
        <p>경로: {data.path}</p>
      </span>
    </main>
  );
};

export default FetchTest;