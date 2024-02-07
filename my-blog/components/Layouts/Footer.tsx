// components/Layouts/Footer.tsx
import ETC from "@/components/Contents/ETC"
interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div id="footer" className={className}>
      <p>&copy; 2024 bhn1997.com. All rights reserved.</p>
      <ETC className="bg-point hover:bg-blue-300"/>
    </div>
  );
}

export default Footer;
