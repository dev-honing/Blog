// components/Hello.tsx

import { useEffect, useState } from "react";

const Hello = () => {
  const [text, setText] = useState('');
  
  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setText(data.text));
  }, []);

  return (
    <div>
      {text}
    </div>
  );
}

export default Hello;