// components/Layouts/Container/Details.tsx
import Pic from "@/components/Profiles/Pic"
import ID from "@/components/Profiles/ID"
import DateTime from "@/components/Contents/DateTime"

export default function Details() {
  return (
    <div className="details">
      <Pic size={60} />
      <ID />
      <DateTime date="24-02-16" time="12:16"/>
      <div className="views">조회: 10</div>
      <div className="comments">댓글: 1</div>
    </div>
  );
}
