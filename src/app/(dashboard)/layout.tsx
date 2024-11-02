import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-screen flex">
        {/* left */}
        <div className="w-[10%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
          {/* logo  */}
          <Link
            href="/"
            className="flex gap-2 items-center justify-center lg:justify-start p-4"
          >
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="hidden lg:block">ScooLama</span>
          </Link>
          <Menu />
        </div>
        {/* ------------------------------------------------------------------------------- */}
        {/* right */}
        <div className="w-[90%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-gray-50 overflow-scroll">
          <Navbar></Navbar>
          {children}
        </div>
      </div>
    </>
  );
}
