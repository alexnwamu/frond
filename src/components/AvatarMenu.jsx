import { AvatarImage, Avatar } from "./ui/avatar";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

const AvatarMenu = () => {
  const { data: session } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full outline-none">
        <div className="bg-[#EFFCEF]  mt-auto gap-[17px] px-[10px]  flex py-[15px]">
          <Avatar className="w-[30px] h-[30px] ">
            <AvatarImage
              src={
                session?.user?.image ||
                "https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg"
              }
            />
          </Avatar>

          <div>
            <h2 className="text-[14px]">{session?.user?.name}</h2>
            <p className="text-[#73B873]   text-[12px]">
              {session?.user.role === "USER" ? "Care giver" : "Admin"}
            </p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full bg-[#EFFCEF]">
        <div onClick={() => signOut({ callbackUrl: '/' })} className="bg-[#EFFCEF] cursor-pointer font-semibold text-[14px] mt-auto gap-[17px] px-[10px]  flex py-[15px]">
          Sign out
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMenu;
