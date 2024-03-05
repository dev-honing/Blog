// app/post/develop/nextjs/[nextjsId]/page.tsx

export default function NextDetails(props: any) {
  console.log(props);
  return (
    <h1>
      Nextjs / {props.params.nextjsId}번째 글 / {props.searchParams.country} Details
    </h1>
  );
}
