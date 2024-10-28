import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

import {Card, CardHeader, CardBody} from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="profile-and-projects flex flex-row items-start justify-center gap-2 py-8 mt-20 md:py-10">
        <section className="profile flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <Image
            // isBlurred
            height={240}
            width={240}
            src="https://avatars.githubusercontent.com/u/121206702?s=400&u=789ad4dfadfceda618d42359bc00968fcd7093ab&v=4"
            alt="me :D"
            className="m-0"
            shadow="lg"
          />

          <div className="inline-block max-w-lg text-center justify-center">
            <span className={title({size: "ssm"})}>Paulo Henrique Ribeiro Alves&nbsp;</span><br />
            <span className={title({ size: "sssm",color: "blue" })}>Computer Science Student&nbsp;</span><br/>
            <span className="font-medium text-large">I like linux and creating web games&nbsp;</span>
            {/* <span className={title({size: "ssm"})}> 👨🏻‍💻&nbsp;</span><br /> */}
            <br />
          </div>

          <div className="flex gap-3">
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.linkedin}
            >
              <LinkedinIcon size={20} />
              Linkedin
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>
        </section>

        <section className="projects flex flex-col items-center justify-center gap-4 py-8 md:py-10 ml-20 mt-0">
          <Card 
            isBlurred
            className="py-2 w-1/1 flex flex-row hover:outline hover:outline-1 hover:outline-black bg-background/5 bg-transparent" 
            isPressable
            href="http://paulodev.me/jogodavelha"
            as={Link}
            isHoverable
          >
            <CardBody className="card-body overflow-visible py-1 w-1/20 ml-2">
              <Image
                alt="Card background"
                className="game-image object-cover rounded-xl"
                src="https://raw.githubusercontent.com/paulohenrique64/jogo-da-velha-online/refs/heads/main/public/images/logo.png"
                width={85}
                height={85}
                radius={"full"}
              />
            </CardBody>
            <CardHeader className="card-header pb-2 pt-0 px-2 py-6 flex-col items-start w-1/8 mt-0 mr-2">
              <h4 className="font-bold text-xl">Jogo da Velha Online</h4>
              <p className="text-tiny uppercase font-bold"></p>
              <small className="font-normal text-xs text-opacity-0">Online multiplayer tic tac toe<br/>created by me</small>
            </CardHeader>
          </Card>

        </section>

        {/* <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
            Jogo da Velha <Code color="primary"> Online{" "} </Code>
              
                <Link href="https://paulodev.me/jogodavelha">
                  <Image
                    height={50}
                    width={50}
                    src="https://raw.githubusercontent.com/paulohenrique64/jogo-da-velha-online/refs/heads/main/public/images/logo.png"
                    alt="Logo do Jogo da Velha"
                    className="m-0" // Remove margens
                    style={{ border: "none" }} // Remove bordas
                  />
                </Link>     
              
            </span>
          </Snippet>
        </div> */}

      </section>
    </DefaultLayout>
  );
}
