import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center w-screen h-max bg-blue-800 animate-changebackground">
      <div className="grid grid-cols-2 pt-[10rem] pb-[10rem] gap-[5rem] px-[5rem]">
        <div>
          <h1 className="text-9xl pt-[5rem] uppercase font-nunito text-white drop-shadow-[0_8px_3px_rgba(0,0,0,0.40)]">
            Raymond Brown
          </h1>
          <h1 className="text-[3.7rem] pt-[2rem] bg-gradient-to-r from-[#ff4e02] to-[#f1e600] text-transparent bg-clip-text font-opensans pb-2 drop-shadow-[0_6px_3px_rgba(0,0,0,0.60)] font-semibold">
            Front End Software Engineer
          </h1>
        </div>
        <div className="bg-gradient-to-r from-[#605d5c] to-[#1f1d01] rounded-full h-[600px] w-[600px]">
          <Image
            className="rounded-full w-[600px] h-[600px] object-cover bg-clip-transparent opacity-80 drop-shadow-[0_8px_7px_rgba(0,0,0,0.60)]"
            src={"/20221201_153151.jpg"}
            alt="Raymond Brown Photo"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
