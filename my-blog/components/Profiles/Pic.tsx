// components/Profiles/Icon.tsx
interface PicProps {
  src: string;
  size: number;
}

const Icon: React.FC<PicProps> = ({ src, size }) => {
  return (
    <div style={{ width: size, height: size }}>
      <img src={src} alt="profilePic" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Icon;
