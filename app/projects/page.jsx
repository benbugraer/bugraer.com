import Section from "@/components/Section";

export const metadata = {
  title: "Bugra Er | Projects",
  description: "All projects i can create",
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="text-secondary animate-in" style={{ "--index": 1 }}>
          Here are some of the projects I have done and some are still in
          progress.
        </p>
      </div>
      <div
        className="flex flex-col gap-6 w-full animate-in"
        style={{ "--index": 3 }}
      >
        <Section heading="Projects" headingAlignment="right">
          <div className="flex w-full flex-col gap-6">
            <p>
              Even though I have 2-3 different projects I have done, I still
              don&apos;t have a perfect project the way I want it, but I am
              working on it. This will be updated very soon.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
