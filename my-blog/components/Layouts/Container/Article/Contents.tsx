// components/Layouts/Container/Article/Contents.tsx
import { LongP, P } from "@/components/Contents/P";
import DynamoFetch from "@/components/Contents/DynamoFetch";

const Contents: React.FC = () => {
  return (
    <div className="article-contents">
      <P />
      {/* <LongP /> */}
      <DynamoFetch />
    </div>
  );
};

export default Contents;
