// components/Layouts/Container.tsx
import Info from "./Container/Article/Info";
import Contents from "./Container/Article/Contents";
import Tags from "./Container/Article/Tags";
import Index from "./Container/Article/Index";
interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className }) => {
  return (
    <div id="container" className={className}>
      <Info />
      <Contents />
      <Tags />
      <Index />
    </div>
  );
};

export default Container;
