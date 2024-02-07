// components/Layouts/ETC.tsx
interface ETCProps {
  className?: string;
}

const ETC: React.FC<ETCProps> = ({ className }) => {
  return (
    <div id="etc" className={className}>
      <a href="/portfolio">
        포트폴리오 페이지
      </a>
    </div>
  );
}

export default ETC;
