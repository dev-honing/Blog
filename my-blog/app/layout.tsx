// app/layout.tsx

export const metadata = {
  // 제목과 설명 작성
  title: '재미 주도 개발',
  description: '초보 블로거',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}