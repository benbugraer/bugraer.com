import Section from "@/components/Section";

export const metadata = {
  title: "About | Buğra Er",
  description:
    "I am a Frontend developer who basically just enjoys creating somethings.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      <div>
        <h1
          className="animate-in text-3xl font-bold tracking-tight"
          style={{ "--index": 1 }}
        >
          About Me
        </h1>
        <p className="text-secondary animate-in" style={{ "--index": 2 }}>
          Just little about my life.
        </p>
      </div>
      <div className="flex flex-col gap-16 animate-in md:gap-24">
        <Section
          heading="About My Life"
          headingAlignment="right"
          style={{ "--index": 3 }}
        >
          <div
            className="flex flex-col gap-6 animate-in"
            style={{ "--index": 4 }}
          >
            <h1>Hello world, I&apos;m Buğra Er!</h1>
            <p>
              I am Buğra Er, a 22 years old young man trying to live in Turkey
              and i love lifting weights, watching basketball, coffee and
              reading book. My collage life is not good but i studied business
              administration.
            </p>
          </div>
        </Section>
        <Section
          heading="Software"
          headingAlignment="right"
          style={{ "--index": 5 }}
        >
          <div
            className="flex flex-col gap-6 animate-in"
            style={{ "--index": 6 }}
          >
            <p>
              In general, I work with React, Javascript, Tailwind, Next.JS and
              also love to design with Figma and Framer. Things and although i
              am not at the level i want yet, I think that one day will reach
              the level i want.
            </p>
            <p>
              I generally try to be at my desk, but if I&apos;m not there,
              I&apos;m probably working in a coffee shop.
            </p>
          </div>
        </Section>

        <Section
          heading="How I started software"
          headingAlignment="right"
          style={{ "--index": 7 }}
        >
          <div
            className="flex flex-col mb-4 lg:-mb-20 gap-6 animate-in"
            style={{ "--index": 8 }}
          >
            In the winter of 2023, i was desperate and didn&apos;t know what to
            do. Then i met software and i changed in an instant, finally had a
            goal and wanted to do it, I wanted to learn, develop and create
            something. I finally started and reached a level by following the
            steps and now i want to do more.
          </div>
        </Section>
      </div>
    </div>
  );
}
