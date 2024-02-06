import Image from "next/image";

export default function PhoneNavbar() {
  return (
    <>
      <div className=" my-3 mx-4 flex justify-between items-center mr-6">
        <div>
          <Image
            src="/mainlogo.png"
            width={220}
            height={220}
            className="flex object-cover"
            alt="mainlogo"
          />
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#E8FFC7"
            className="w-14 h-14 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
