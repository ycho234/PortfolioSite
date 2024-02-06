import Image from "next/image";

export default function NameBanner() {
  return (
    <>
      <div className=" mr-52 ml-20 pl-4 pt-20 pb-6 relative">
        <h1 className="text-4xl tracking-[.2em]">
          <b className="text-[#CFACEA]">Hi</b>, my{" "}
          <b className="text-[#F4BFFF]">name</b> is
        </h1>
        <Image
          src="/star.png"
          width={65}
          height={65}
          alt="staricon"
          className=" mx-5 absolute top-[70px] left-[330px]"
        />
      </div>
      <div>
        <Image
          src="/namebanner.png"
          width={700}
          height={700}
          alt="namebanner"
          className="mt-6 ml-20"
        />
        <Image
          src="/cursor.png"
          width={120}
          height={120}
          alt="cursor"
          className="rotate-12 absolute top-[330px] right-[360px]"
        />
      </div>
    </>
  );
}
