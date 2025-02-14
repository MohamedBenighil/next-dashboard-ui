import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between m-2">
      {/* search bar */}
      <div className="hidden md:flex items-center text-xs rounded-full ring-[1.5px] ring-gray-500">
        <Image
          src="/search.png"
          alt=""
          width={15}
          height={15}
          className="ml-2"
        ></Image>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="w-[200px] bg-transparent p-2 outline-none"
        />
      </div>
      {/* icons & avatar */}
      <div className=" flex items-center gap-6 w-full justify-end">
        <div className="bg-white rounded-full items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" height={20} width={20} />
        </div>
        <div className=" relative bg-white rounded-full items-center justify-center cursor-pointer">
          <Image src="/announcement.png" alt="" height={20} width={20} />
          <div className=" absolute  flex items-center  justify-center w-5 h-5 bg-purple-500 text-white rounded-full text-xs -top-3 -right-3">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3">John Doe.</span>
          <span className="text-[10px] text-gray-500 text-right">Admin.</span>
        </div>

        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
export default Navbar;
