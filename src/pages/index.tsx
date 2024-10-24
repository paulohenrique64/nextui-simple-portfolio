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
      <section className="flex flex-row items-start justify-center gap-2 py-8 mt-20 md:py-10">
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
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
            <span className={title({ size: "sssm",color: "blue" })}>Estudante de Ciência da Computação&nbsp;</span><br/>
            <span className="text-default-2000 text-large">Gosto de aprender sobre linux e criar jogos web&nbsp;</span>
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

        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ml-20 mt-0">
          <Card 
            isBlurred
            className="py-2 w-1/1 flex flex-row hover:outline hover:outline-1 hover:outline-black bg-background/5 bg-transparent" 
            isPressable
            href="/jogodavelha"
            as={Link}
            isHoverable
          >
            <CardBody className="overflow-visible py-1 w-1/20 ml-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://raw.githubusercontent.com/paulohenrique64/jogo-da-velha-online/refs/heads/main/public/images/logo.png"
                width={85}
                height={85}
                radius={"full"}
              />
            </CardBody>
            <CardHeader className="pb-2 pt-0 px-6 py-4 flex-col items-start w-1/8 mt-0">
              <h4 className="font-bold text-large">Jogo da Velha Online</h4>
              <p className="text-tiny uppercase font-bold"></p>
              <small className="text-default-1000">Jogo online multiplayer criado<br/>por mim</small>
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
