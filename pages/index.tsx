import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import About from "../components/About";
import SocialIcons from "components/SocialIcons";

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col md:pl-0">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 clip-title">
                Anik Das
              </h1>
              <h2 className="text-gray-300 mb-4">
                ??? at <span className="font-semibold">???</span>
              </h2>
              <h2 className="text-gray-500 text-sm mb-4 italic">
                (psst! im looking for internships! reach out to{" "}
                <a className="underline" href="mailto:anikdas0811@gmail.com">
                  anikdas0811@gmail.com
                </a>{" "}
                )
              </h2>
              <p className="text-gray-300 mb-8">
                Aspiring Software Developer, currently in my 3rd year of
                Undergraduate study at IIEST Shibpur.
              </p>
              <SocialIcons />
            </div>
            <div className="w-[100px] sm:w-[200px] relative md:m-4 sm:mb-0 mr-auto m-2">
              <div className="-inset-0.5 animate-pulse bg-gradient-to-r from-pink-600 to-purple-600 rounded-full absolute filter blur"></div>
              <Image
                alt="Anik Das"
                height={180}
                width={180}
                src="https://avatars.githubusercontent.com/u/16396161?v=4"
                className="rounded-full filter"
              />
            </div>
          </div>
          <About />
          <h1 className="text-2xl underline font-bold">
            <a
              href="https://drive.google.com/file/d/11RewrnkZ4WVkDOFusuqm-wCPPJjGt044/view"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-brand"
            >
              Resume Link
            </a>
          </h1>
        </Container>
      </main>

      <footer></footer>
    </div>
  );
}
