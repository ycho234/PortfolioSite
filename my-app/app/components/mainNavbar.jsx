import Navbar from "./navbar";
import PhoneNavbar from "./phonenavbar";
export default function MainNavbar() {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden">
        <PhoneNavbar />
      </div>
    </>
  );
}
