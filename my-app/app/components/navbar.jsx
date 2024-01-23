import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <div className=" relative flex justify-center bg-red-600">
          <Image
            src="/mainlogo.png"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/about">Skills</a>
        </li>
        <li>
          <a href="/about">Project</a>
        </li>
        <li>
          <a href="/about">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
