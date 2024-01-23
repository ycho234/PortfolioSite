import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/about">Skills</a>
        </li>
        <Image src="/mainlogo.png" width={300} height={300} />
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
