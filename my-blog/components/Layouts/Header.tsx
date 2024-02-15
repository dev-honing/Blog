// components/Layouts/Header.tsx
import UpperHeader from "./Header/UpperHeader";
import LowerHeader from "./Header/LowerHeader";
interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div id="header" className={className}>
      {/* 상단 헤더 */}
      <UpperHeader />
      {/* 하단 헤더 */}
      <LowerHeader />
    </div>
  );
};

export default Header;
