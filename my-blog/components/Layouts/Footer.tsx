// components/Layouts/Footer.tsx
interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div id="footer" className={className}>
      <p>&copy; 2024 bhn1997.com. All rights reserved.</p>
    </div>
  );
}

export default Footer;
