function NavBar() {
  return (
    <div>
      <div className="w-full h-[86px] px-[100px] py-4 bg-white bg-opacity-5 shadow justify-between items-center inline-flex">
        <div className="text-center text-white text-[40px] font-medium leading-[54px]">
          AnonChat!
        </div>

        <div className="text-indigo-500 text-xl font-normal leading-7 px-8 py-3 bg-white rounded-[109px] shadow-inner">
          Start a Chat
        </div>
      </div>
    </div>
  );
}

export default NavBar;
