// components/Layouts/Container/Article/Contents.tsx
import { LongP, P } from "@/components/Contents/P";
import RenderTables from '@/components/Contents/RenderTables';

const Contents: React.FC = () => {
  return (
    <div className="article-contents">
      <P />
      {/* <LongP /> */}
      <RenderTables />
    </div>
  );
};

export default Contents;
