import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" relative flex justify-center gap-24">
      <div className="flex items-center ">
        <a href="/" className="text-2xl hover:underline">
          About
        </a>
      </div>
      <div className="flex items-center ">
        <a href="/" className="text-2xl hover:underline ">
          Skills
        </a>
      </div>

      <div>
        <Image
          src="/mainlogo.png"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>
      <div className="flex items-center">
        <a href="/" className="text-2xl hover:underline">
          Projects
        </a>
      </div>
      <div className="flex items-center">
        <a href="/" className="text-2xl hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
}
