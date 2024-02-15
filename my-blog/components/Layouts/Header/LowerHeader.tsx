import Image from "next/image";

export default function LowerHeader() {
  return (
    <div id="lowerHeader">
      {/* 하단 헤더 */}
      <div className="postSeries">
        {/* 포스팅 시리즈 */}
        <a href="/before">
          이전 글
          <Image
            src="https://my-icons-svg.s3.ap-northeast-2.amazonaws.com/before.svg"
            alt="Before"
            width={30}
            height={30}
          />
        </a>
        시리즈 III
        <a href="/next">
          다음 글
          <Image
            src="https://my-icons-svg.s3.ap-northeast-2.amazonaws.com/next.svg"
            alt="Next"
            width={30}
            height={30}
          />
        </a>
      </div>
      <div className="postTitle">
        <a href="title">
          {/* 포스팅 제목 */}
          <h2>AWS S3 업로드와 이미지 URL 적용</h2>
        </a>
      </div>
      <div className="additionalFunctions">
        {/* 부가 기능 */}
        <a href="/share">
          <Image
            src="https://my-icons-svg.s3.ap-northeast-2.amazonaws.com/share.svg"
            alt="Share"
            width={30}
            height={30}
          />
        </a>
        <a href="/search">
          <Image
            src="https://my-icons-svg.s3.ap-northeast-2.amazonaws.com/search.svg"
            alt="Search"
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  );
}
