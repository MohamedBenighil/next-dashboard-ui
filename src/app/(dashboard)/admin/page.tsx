import UserCart from "@/app/components/UserCart";
const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row m-2 mt-8">
      {/* Left  */}
      <div className="w-full lg:w-2/3">
        {/* User Cart  */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCart type="student" />
          <UserCart type="teacher" />
          <UserCart type="parent" />
          <UserCart type="Staff" />
        </div>
      </div>
      {/* Right  */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};
export default AdminPage;
