// ?COMPONENT imports
import Link from "next/link";
import Hero from "@/components/hero";
// ? NEXT imports
import homeImg from "public/home.jpg";

// ?OTHER imports

// ?TODO:
// ? 1)Establish the routes and pages(DONE)
// ? 2)Link between the pages(DONE)
// ? 3)Establish the images for the pages(ONGOING)
// ? 4)Modify the images to fit the page
// ? 5)clean up the code to keep it DRY(Do NOT Repeat Yourself)

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
}
