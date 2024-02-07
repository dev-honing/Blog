// components/Layouts/Container.tsx
interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className }) => {
  return (
    <div id="container" className={className}>
      컨테이너 컴포넌트
    </div>
  );
}

export default Container;
