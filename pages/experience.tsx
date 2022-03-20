import Head from "next/head";
import Container from "../components/Container";
import { allOtherPages } from "../.contentlayer/generated";
import type { OtherPage } from "../.contentlayer/generated/types";
import { useMDXComponent } from "next-contentlayer/hooks";

export default function Experience(experience: OtherPage) {
  const Component = useMDXComponent(experience.body.code);
  return (
    <div>
      <Head>
        <title>Experience</title>
        <meta name="description" content={experience.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <h3 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl text-white clip-title">
            Experience
          </h3>
          <div className="prose">{<Component />}</div>
        </Container>
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  const exp = allOtherPages.find((page) => page.slug === "experience")!;

  return { props: exp };
}
