import Image from "next/image";

export default function PhoneNameBanner() {
  return (
    <>
      <div className="lg:block hidden ">
        <div className="   pt-20 relative  ">
          <h1 className="text-4xl tracking-[.2em] ">
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
        <Image
          src="/banner.png"
          width={800}
          height={800}
          alt="banner"
          className="mt-1 flex"
        />

        <h1 className="text-4xl tracking-[.2em]  pt-8 ">
          Im a <b className="text-[#E8FFC7]">Junior Fullstack Developer </b>
        </h1>
      </div>
    </>
  );
}
