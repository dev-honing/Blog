// components/Layouts/Header.tsx
interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div id="header" className={className}>
      헤더 컴포넌트
    </div>
  );
};

export default Header;
