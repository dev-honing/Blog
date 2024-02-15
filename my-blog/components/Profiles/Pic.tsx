// components/Profiles/Pic.tsx
interface PicProps {
  src?: string;
  size: number;
}

const Pic: React.FC<PicProps> = ({ src, size }) => {
  return (
    <div style={{ width: size, height: size }}>
      <img
        src={
          (src =
            "https://my-icons-svg.s3.ap-northeast-2.amazonaws.com/profile.svg")
        }
        alt="profilePic"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Pic;
