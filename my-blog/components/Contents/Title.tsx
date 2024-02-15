// components/Contents/Title.tsx

interface TitleProps {
  title?: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  // 제목 수정
  const titleText = "S3를 이용한 이미지 URL 렌더링";

  return (
    <div>{title}
      <h2>{titleText}</h2>
    </div>
  );
};

export default Title;
