import { PowerStack } from "@/components/PowerStack";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons/GithubIcon";
import { LinkedinIcon } from "@/components/Icons/LinkedinIcon";
import { EnvelopeIcon } from "@/components/Icons/EnvelopeIcon";

export default function Home() {
  const iconProps = {
    width: 24,
    height: 24,
    fill: "var(--card-foreground)"
  }
  const links = [
    {
      icon: <GithubIcon {...iconProps} />,
      text: "Github",
      link: 'https://github.com/rsvives'
    },
    {
      icon: <LinkedinIcon {...iconProps} />,
      text: "LinkedIn",
      link: 'https://www.linkedin.com/in/rserran/'
    },
    {
      icon: <EnvelopeIcon {...iconProps} />,
      text: "Email",
      link: 'mailto:r.serranvives@gmail.com?Subject=Just%20saw%20your%20portfolio%20and'
    },
  ]

  // const description = "I am a product design engineer turned into web developer. I used to design physical products for additive manufacturing but my passion for human centered design made me pivot towards digital product design and development. This passion has motivated me not only to code, but also to teach others to code."
  // const description = "I'm a Design Engineer turned Full-Stack Developer. I started my career developing educational robotics projects and designing parts for additive manufacturing, but since 2019, my passion for creating has led me to "
  const CVLink = "https://drive.google.com/file/d/1sqXD06Y9FWIXYvQTtUyzDs_layfSxSu2/view?usp=sharing"

  return (
    <div className="grid grid-rows-[1fr_auto] sm:pb-16 gap-14 sm:gap-36">
      <section className="max-w-[700px] ">
        <Avatar className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] rounded-full mb-6 scale-x-[-1]">
          <Image src="/profile.jpeg" className="aspect-square scale-125" alt="profile picture of Rodrigo Serrán with a lake and forest on the background" width={200} height={400} />
        </Avatar>
        <div className="flex gap-3 items-center">
          <span className="text-2xl md:text-3xl font-medium">Rodrigo Serrán</span>
          <Badge className="rounded-full py-1.5 px-2" variant={'outline'}>
            <span className="text-xs">Ready to work </span>
            <span className="rounded-full w-[8px] h-[8px] bg-green-500 overflow-hidden"></span>
          </Badge>
        </div>
        <h1 className="text-3xl md:text-6xl font-extrabold">FullStack Developer</h1>
        <div className="flex flex-col gap-2">
          <p className="text-lg my-3 md:my-4 max-w-[290px] sm:max-w-none">I&apos;m a <b>Design Engineer</b> turned into a software developer. <br /> Creating  <b>user-centered digital products</b> since 2019</p>
        </div>
        <div className="flex gap-4 items-center flex-row">
          <Button variant={'outline'} asChild><a href={CVLink} target="_blank">Download CV <DownloadIcon /></a></Button>
          <Button variant={'default'} asChild><Link href='/about'>Learn more</Link></Button>
        </div>
      </section>
      <section className="row-start-2 flex flex-col items-center gap-4 md:gap-6">
        <div className="order-2 md:order-1">
          <PowerStack title={false} />
        </div>
        <div className="flex gap-6 flex-wrap justify-center order-1 md:order-2 ">
          {links.map(l => {

            return (
              <a key={l.text}
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href={l.link}
                target="_blank"
              // rel="noopener noreferrer"
              >

                {l.icon}
                {l.text}
              </a>
            )
          })}

        </div>
      </section>
    </div>

  );
}
