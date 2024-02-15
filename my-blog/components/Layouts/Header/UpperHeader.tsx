// components/Layouts/Header/UpperHeader.tsx
import Image from "next/image";

export default function UpperHeader() {
  return (
    <div id="upperHeader">
      <div className="hostProfiles">
        {/* 작성자 정보 */}
        <div className="icon">
          <Image
            src="https://my-icons-svg.s3.ap-northeast-2.amazonaws.com/profile.svg"
            alt="Profile"
            width={30}
            height={30}
          />
        </div>
        <div className="ID">dev.honing</div>
      </div>
      <div className="blogName">
        {/* 블로그명 */}
        <a href="/">
          <h1>재미 주도 개발</h1>
        </a>
      </div>
      <div className="externalLinks">
        {/* 외부 링크들 */}
        <a href="https://github.com/dev-honing">
          <Image
            src="https://my-icons-svg.s3.ap-northeast-2.amazonaws.com/SVG/GitHub.svg"
            alt="GitHub"
            width={30}
            height={30}
          />
        </a>
        <a href="/portfolio">
          <Image
            src="https://my-icons-svg.s3.ap-northeast-2.amazonaws.com/portfolio.svg"
            alt="Portfolio"
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  );
}
