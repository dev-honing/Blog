// components/Profiles/ID.tsx
interface IDProps {
  id?: string;
}

const ID: React.FC<IDProps> = ({ id }) => {
  return (
    <div>
      <span className="bg-slate-800 text-white p-1">{(id = "dev.honing")}</span>
    </div>
  );
};

export default ID;
