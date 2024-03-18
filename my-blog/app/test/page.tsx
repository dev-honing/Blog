'use client'
// app/test/page.tsx
import { useEffect, useState } from 'react';

type TestData = {
  id: number;
  category: string;
  dateTime: string;
  title: string;
  tags: string[];
};

const TestPage = () => {
  const [data, setData] = useState<TestData | null>(null);

  useEffect(() => {
    const getTest = async () => {
      const res = await fetch('http://localhost:3000/api/test');
      const json = await res.json();
      setData(json.test);
    };

    getTest();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>Test Page</h1>
      <div>
        <h2>{data.title}</h2>
        <p>{data.category}</p>
        <p>{data.dateTime}</p>
        <p>{data.tags.join(', ')}</p>
      </div>
    </main>
  );
};

export default TestPage;