// app/post/develop/reactjs/[reactId]/page.tsx

export default function ReactDetails({
  params,
}: {
  params: { reactId: string };
}) {
  return (
    <div>
      <h1>현재 URL: /posts/develop/reactjs/{params.reactId}</h1>
    </div>
  );
}
