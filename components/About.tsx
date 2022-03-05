import { allOtherPages } from ".contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export default function About() {
  const about = allOtherPages.find((page) => page.slug === "about")!;

  const Component = useMDXComponent(about.body.code);
  return (
    <div className="prose">
      <div className="prose">{<Component />}</div>
    </div>
  );
}

export async function getStaticProps() {
  const about = allOtherPages.find((page) => page.slug === "about")!;

  return { props: about };
}
