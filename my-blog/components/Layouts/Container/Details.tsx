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
      <div className="date">24-02-16 12:16</div>
      <div className="views"></div>
      <div className="comments"></div>
    </div>
  );
}
