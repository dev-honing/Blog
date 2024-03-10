// app/post/develop/nextjs/[nextjsId]/page.tsx

export default function NextDetails({
  params,
}: {
  params: { nextId: string };
}) {
  return (
    <div>
      <h1>현재 URL: /posts/develop/nextjs/{params.nextId}</h1>
    </div>
  );
}
