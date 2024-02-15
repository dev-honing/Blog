export default function UpperHeader() {
  return (
    <div id="upperHeader">
      <div className="hostProfiles">
        {/* 작성자 정보 */}
        <div className="icon">
          <img
            src="https://ca.slack-edge.com/T02JAN3TFEU-U05QNF4S8E4-d68d71b13d89-512"
            alt="Slack"
            width={30}
            height={30}
          />
        </div>
        <div className="ID">dev.honing</div>
      </div>
      <div className="blogName">
        {/* 블로그명 */}
        <h1>재미 주도 개발</h1>
      </div>
      <div className="externalLinks">
        {/* 외부 링크들 */}
        <a href="https://github.com/dev-honing">
          <img
            src="https://my-icons-svg.s3.ap-northeast-2.amazonaws.com/SVG/GitHub.svg"
            alt="GitHub"
            width={30}
            height={30}
          />
        </a>
        <a href="/portfolio">
          <img
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
