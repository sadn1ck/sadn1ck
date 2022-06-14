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
              <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-1">
                Anik Das
              </h1>
              <h2 className="text-gray-300 mb-4">
                GSoC 2022 at <span className="font-semibold">Sugar Labs</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Aspiring Software Developer, currently in my 3rd year of
                Undergraduate study at IIEST Shibpur.
              </p>
              <SocialIcons />
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
