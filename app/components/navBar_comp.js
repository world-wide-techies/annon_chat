import Image from "next/image";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();
  return (
    <div>
      <div className="w-full h-[86px] px-[100px] py-4 bg-white bg-opacity-5 shadow justify-between items-center inline-flex">
        <div className="text-center text-[#5741C3] text-[40px] font-medium leading-[54px] font-lexend">
          AnonChat!
        </div>

        <div className="sm:flex hidden flex-row justify-center text-indigo-500 text-xl font-normal leading-7 px-8 py-3 bg-white rounded-[109px] shadow-inner">
          <Image
            src="/assets/images/chat_icon.png"
            width={24}
            height={24}
            alt="chat icon"
            className="pointer-events-none object-contain"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push("/lobby");
            }}
          >
            <p className="mx-2 text-[20px] font-lexend">Start a Chat</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
