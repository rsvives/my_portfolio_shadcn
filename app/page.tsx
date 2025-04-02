import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {

  const links = [
    {
      icon: "/github-logo.svg",
      text: "Github",
      link: 'https://github.com/rsvives'
    },
    {
      icon: "/linkedin-logo.svg",
      text: "LinkedIn",
      link: 'https://www.linkedin.com/in/rserran/'
    },
    {
      icon: "/envelope.svg",
      text: "Email",
      link: 'mailto:r.serranvives@gmail.com?Subject=Just%20saw%20your%20portfolio%20and'
    },
  ]

  const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero, accusantium quos laboriosam aperiam sit esse? Error voluptatibus esse asperiores."


  return (
    <div className="grid grid-rows-[1fr_24px] items-center justify-items-center pb-16 gap-20 sm:gap-32">
      <div>
        <Avatar className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] rounded-full mb-6 scale-x-[-1]">
          <Image src="/profile.jpeg" className="aspect-square" alt="profile picture of Rodrigo Serrán with a lake and forest on the background" width={200} height={400} />
        </Avatar>
        <div className="flex gap-3 items-center">
          <span className="text-2xl md:text-3xl font-medium">Rodrigo Serrán</span>
          <Badge className="rounded-full py-1.5 px-2" variant={'outline'}>
            <span className="text-xs">Ready to work </span>
            <span className="rounded-full w-[8px] h-[8px] bg-green-500 overflow-hidden"></span>
          </Badge>
        </div>
        <h1 className="text-3xl md:text-6xl font-extrabold">FullStack Developer</h1>
        <section className="max-w-[600px] flex flex-col gap-2 my-4">
          <p className="text-md sm:text-lg">{description}</p>
        </section>
        <div className="flex gap-4 items-center flex-row">
          <Button variant={'outline'}>Download CV <DownloadIcon /></Button>
          <Button>Learn more </Button>
        </div>

      </div>
      <div className="row-start-2 flex gap-6 flex-wrap items-center ">
        {links.map(l => {

          return (
            <a key={l.text}
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href={l.link}
              target="_blank"
            // rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src={l.icon}
                alt={`${l.text} icon`}
                width={24}
                height={24}
              />
              {l.text}
            </a>
          )
        })}

      </div>
    </div>

  );
}
