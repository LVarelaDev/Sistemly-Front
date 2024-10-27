import ProfileLogo from "@/components/ui/Profile/ProfileLogo";
import { AssignedUsers as dataType} from "@/models/Requests/Requests";

interface Props {
  data: dataType[];
}
const AssignedUsers = ({ data }: Props) => {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <p className="text-lg">Usuarios asignados</p>
      <div className="flex flex-col gap-3 max-h-[200px] overflow-y-auto pr-3">
        {data.map((item) => (
          <div className="flex gap-3 rounded-lg border-2 p-2 px-4 items-center">
            <ProfileLogo lettersIcon={item.letterIcon} />
            <div className="flex flex-col justify-center">
              <p>{item.name}</p>
              <p className="text-xs">{item.companyName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedUsers;
