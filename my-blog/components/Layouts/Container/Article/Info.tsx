// components/Layouts/Container/Article/Info.tsx
import Title from "@/components/Contents/Title";
import Details from "../Details";

const Info: React.FC = () => {
  return (
    <div className="article-info">
      <div className="category"></div>
      <Title />
      <Details />
    </div>
  );
};

export default Info;
