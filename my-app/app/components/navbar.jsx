import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" relative flex justify-center gap-24 mx-10 my-2">
      <div className="flex items-center ">
        <a href="/" className="text-2xl hover:underline">
          About
        </a>
      </div>
      <div className="flex items-center ">
        <Link href="../about">
          <p className="text-2xl hover:underline">Skills</p>
        </Link>
      </div>

      <div>
        <Image
          src="/mainlogo.png"
          width={300}
          height={300}
          className="mx-auto flex object-cover"
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
