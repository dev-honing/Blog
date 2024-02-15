// components/Layouts/Container.tsx
import { P, LongP } from "../Contents/P";
import Title from "../Contents/Title";

interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className }) => {
  return (
    <div id="container" className={className}>
      <div className="articleInfo">
        <div className="category"></div>
        <Title />
        <div className="details"></div>
      </div>
      <div className="articleContents">
        <P />
        {/* <LongP /> */}
      </div>
      <div className="articleTags"></div>
      <div className="articleIndex"></div>
    </div>
  );
};

export default Container;
