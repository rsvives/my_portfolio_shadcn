import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ContactIcon, GithubIcon, InboxIcon, Link, LinkedinIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
      <main>
        <Skeleton className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full mb-6"></Skeleton>
        <div className="flex gap-3 items-center">
          <span className="text-2xl md:text-3xl font-medium">Rodrigo Serrán</span>
          {/* <a href="#"> */}
          <Badge className="rounded-full py-1.5 px-2" variant={'outline'}>
            <span className="text-xs">Ready to work </span>
            <span className="rounded-full w-[8px] h-[8px] bg-green-500 overflow-hidden"></span>
          </Badge>
          {/* </a> */}
        </div>
        <h1 className="text-3xl md:text-6xl font-extrabold">FullStack Developer</h1>
        <section className="max-w-[600px] flex flex-col gap-2 my-4">
          <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero, accusantium quos laboriosam aperiam sit esse? Error voluptatibus esse odit asperiores delectus eaque illo soluta.</p>
        </section>
        <div className="flex gap-4 items-center flex-row">

          <Button variant={'outline'} ><GithubIcon /></Button>
          <Button variant={'outline'} ><LinkedinIcon /></Button>
          <Button variant={'outline'} ><InboxIcon /></Button>



        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
