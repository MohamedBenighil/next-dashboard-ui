import UserCart from "@/app/components/UserCart";
import CountChart from "@/app/components/CountChart";
import AttendenceChart from "@/app/components/AttendenceChart";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row m-2 mt-6">
      {/* Left  */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6 ">
        {/* User Cart  */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCart type="student" />
          <UserCart type="teacher" />
          <UserCart type="parent" />
          <UserCart type="Staff" />
        </div>
        {/* Middle Chart  */}
        <div className="flex gap-4 ">
          {/* Count Chart  */}
          <div className=" w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attendence Chart  */}
          <div className=" w-full lg:w-2/3 h-[450px]">
            <AttendenceChart />
          </div>
        </div>
        {/* Bottom Chart  */}
        <div></div>
      </div>
      {/* Right  */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};
export default AdminPage;
