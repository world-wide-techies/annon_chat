import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JoinCTA() {
  const [inviteLink, setInviteLink] = useState("");
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(inviteLink);
      }}
      className="mt-[31px] lg:flex gap-[15px] grid items-center justify-center"
    >
      <input
        className="rounded-full text-base-white flex lg:py-2 lg:px-12 py-2 px-4  items-center justify-center gap-[10px] font-lexend text-sm leading-[28px] tracking-[-0.01em] bg-inherit border-2"
        type="text"
        placeholder="Enter Chat Link"
        id="chatLink"
        name="chatLink"
        onChange={(e) => setInviteLink(e.target.value)}
      />

      <span className="items-center justify-center flex">
        <button
          className="rounded-full flex lg:py-3 lg:px-8 py-2 px-4 items-center justify-center gap-[10px] border-[2px] border-base-white tracking-[-0.01em] font-lexend text-sm font-normal leading[28px] text-[#755BDF] bg-base-white bg-opacity-50 border-none  hover:bg-base-white"
          type="submit"
        >
          Join Chat
        </button>
      </span>
    </form>
  );
}
