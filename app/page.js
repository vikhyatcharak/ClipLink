
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      
      <div className="main mx-auto w-[65vw] m-2 mt-12 p-3 py-8 flex flex-col gap-10 items-center  rounded-4xl  bg-amber-600">
        <h1 className="font-extrabold text-3xl">ClipLink</h1>
        <h2 className="font-bold text-xl">Shorten, Secure, and Simplify Your URLs with Ease!</h2>
        <div className="buttons flex gap-4">
          <Link href='/shorten'><button type="button" className="cursor-pointer text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full px-5 py-2.5 text-center mb-2 dark:focus:ring-yellow-900">Get Started</button></Link>
          <Link href='/AboutUs'><button type="button" className="cursor-pointer text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full px-5 py-2.5 text-center mb-2 dark:focus:ring-yellow-900">Read More</button></Link>
        </div>
      </div>
      <div className="images relative mx-auto w-[70vw] h-[30vh] mt-12 bg-amber-600 rounded-full">
        <Image alt="clip" src={'/clip.jpg'} fill={true} className="rounded-full mix-blend-darken object-fill"></Image>
      </div>
    </>
  );
}
