// ? NEXT.js imports
import type { StaticImageData } from "next/image";
import Image from "next/image";
// ?Component imports

// ? other imports

// ? Investigate interfaces
interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0  ">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-600/60 to-transparent" />
      {/* <div className="absolute inset-1 bg-gradient-to-r from-slate-500/50 to-transparent" /> */}
      <div className="pt-48  pl-23rem  justify-center items-center  ">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
}
