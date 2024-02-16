// components/Contents/DateTime.tsx
interface DateTimeProps {
  date: string;
  time: string;
}

const DateTime: React.FC<DateTimeProps> = ({ date, time }) => {
  return (
    <div className="dateTime">
      {/* 동적으로 받아오도록 변경! */}
      <span className="font-mono bg-blue-200 text-blue-800 px-2 py-1 rounded">
        작성일시: {date} {time}
      </span>
    </div>
  );
};

export default DateTime;
