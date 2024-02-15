// components/Layouts/Container/Details.tsx
import Pic from "@/components/Profiles/Pic"
import ID from "@/components/Profiles/ID"

export default function Details() {
  return (
    <div className="details">
      <Pic size={60} />
      <ID />
      <div className="date"></div>
      <div className="views"></div>
      <div className="comments"></div>
    </div>
  );
}
