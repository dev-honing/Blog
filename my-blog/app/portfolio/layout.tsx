// app/portfolio/layout.tsx

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>팀 프로젝트</h2>
      <h2>개인 프로젝트</h2>
    </>
  );
}
