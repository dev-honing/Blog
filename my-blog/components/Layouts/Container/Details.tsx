// components/Layouts/Container/Details.tsx
import Pic from '../../Profiles/Pic';

export default function Details() {
  return <div className="details">
    <Pic src='https://my-icons-svg.s3.ap-northeast-2.amazonaws.com/profile.svg' size={60}/>
    <div className="ID"></div>
    <div className="date"></div>
    <div className="views"></div>
    <div className="comments"></div>
  </div>
}