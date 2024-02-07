import Navbar from "./navbar";
import PhoneNavbar from "./phonenavbar";

export default function MainNavbar() {
  return (
    <>
      <div className="hidden lg:block">
        {/* Show Navbar component for large screens and above */}
        <Navbar />
      </div>
      <div className="lg:hidden">
        {/* Show PhoneNavbar component for screens smaller than large */}
        <PhoneNavbar />
      </div>
    </>
  );
}
