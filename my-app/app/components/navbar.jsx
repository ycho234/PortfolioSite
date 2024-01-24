import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" relative flex justify-center bg-red-600 gap-24">
      <div className="bg-green-700 flex items-center ">
        <a href="/" className="text-2xl">
          About
        </a>
      </div>
      <div className="bg-green-700 flex items-center ">
        <a href="/" className="text-2xl">
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
      <div className="bg-green-700 flex items-center">
        <a href="/" className="text-2xl">
          Projects
        </a>
      </div>
      <div className="bg-green-700 flex items-center">
        <a href="/" className="text-2xl">
          Contact
        </a>
      </div>
    </nav>
  );
}
