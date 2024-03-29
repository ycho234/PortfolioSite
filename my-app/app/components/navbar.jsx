// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className=" relative flex justify-center gap-32 mx-10 mt-4 bg-slate-500">
//       <div className="flex items-center ">
//         <a href="/" className="text-2xl hover:underline">
//           About
//         </a>
//       </div>
//       <div className="flex items-center ">
//         <Link href="../about">
//           <p className="text-2xl hover:underline">Skills</p>
//         </Link>
//       </div>

//       <div>
//         <Image
//           src="/mainlogo.png"
//           width={300}
//           height={300}
//           className="mx-auto flex object-cover"
//           alt="mainlogo"
//         />
//       </div>
//       <div className="flex items-center">
//         <a href="/" className="text-2xl hover:underline">
//           Projects
//         </a>
//       </div>
//       <div className="flex items-center">
//         <a href="/" className="text-2xl hover:underline">
//           Contact
//         </a>
//       </div>
//     </nav>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative flex flex-col sm:flex-row justify-center mt-4 lg:mx-[6rem]">
      <div className="flex items-center gap-32">
        <a href="/" className="text-2xl hover:underline">
          About
        </a>
        <Link href="../about">
          <p className="text-2xl hover:underline">Skills</p>
        </Link>
      </div>
      <div className="flex items-center justify-center relative">
        <Image
          src="/mainlogo.png"
          width={300}
          height={300}
          className="object-cover mx-32 bg-slate-400"
          alt="mainlogo"
        />
      </div>
      <div className="flex items-center gap-32">
        <a href="/" className="text-2xl hover:underline">
          Projects
        </a>

        <a href="/" className="text-2xl hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
}
