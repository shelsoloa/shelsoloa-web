import Image from "next/image";
import shellbot_logo from "@/public/img_shelsoloa__logo--transparent.png"

export default function Home() {
  return (
    <div className="flex flex-col h-screen px-8">
      <div className="flex flex-col max-w-5xl w-full mx-auto border p-8 my-8 rounded-lg">
        
        <Image src={shellbot_logo} className="mx-auto mb-4" alt="shel soloa logo" width={100} height={100} />
        
        <h1 className="text-4xl font-bold">Sheldon Soloa</h1>
        <p>Software Engineer based in Toronto, Canada</p>

        <div className="border flex flex-col border-blue-500 rounded-lg p-4 mt-4">
          <p>Currently building digital marketing tech. If you&apos;re in the influencer marketing space, <a href="mailto:shel@shelsoloa.com" className="text-blue-500">drop me a line!</a></p>
        </div>

        <h2 className="text-lg font-bold mt-4">What I&apos;m working on currently:</h2>
        <ul className="list-disc list-inside">
          <li>Founder @ <a href="https://promoexchange.io" className="text-blue-500">Promoexchange.io</a></li>
          <li>Cloud Engineering Lead @ OtO Lawn</li>
          <li>Fractional CTO @ Gabzebo Interactive Media</li>
        </ul>

        <h2 className="text-lg font-bold mt-4">Where to find me:</h2>
        <ul className="list-disc list-inside">
          <li>Email: <a href="mailto:shel@shelsoloa.com" className="text-blue-500">shel@shelsoloa.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/shelsoloa/" className="text-blue-500">Sheldon Soloa</a></li>
          <li>Twitter: <a href="https://twitter.com/shelsoloa" className="text-blue-500">@shelsoloa</a></li>
          <li>GitHub: <a href="https://github.com/shelsoloa" className="text-blue-500">shelsoloa</a></li>
        </ul>
      </div>
    </div>
  );
}
