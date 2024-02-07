// components/Layouts/Container.tsx
import { P, LongP } from '../Contents/P';

interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className }) => {
  return (
    <div id="container" className={className}>
      <P />
      {/* <LongP /> */}
    </div>
  );
}

export default Container;
