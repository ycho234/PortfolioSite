import Navbar from "./navbar";
import PhoneNavbar from "./phonenavbar";

export default function MainNavbar() {
  return (
    <>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="lg:hidden">
        <PhoneNavbar />
      </div>
    </>
  );
}
