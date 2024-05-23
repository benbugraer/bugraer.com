import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import Buttons from "@/components/ui/Button";
import Link from "next/link";
import { templatesInfo } from "@/constants/templatesInfo";

function TabContent({ content }) {
  return (
    <div className="bg-secondary p-10 rounded-2xl">
      <div className="flex gap-2 items-center">
        <h1 className="font-bold">{content.heading}</h1>
        <p className="text-primary"> · </p>
        <p className="font-light">{content.author}</p>
        <Image
          src={content.authorImage}
          width={30}
          height={30}
          alt="avatar"
          className="rounded-full bg-secondary"
        />
      </div>
      <Image
        width={1000}
        height={1000}
        src={content.templateImage}
        alt={content.heading}
      />
      <Buttons className="font-light">
        <Link href={content.link} target="blank">
          Duplicate Now
        </Link>
      </Buttons>
    </div>
  );
}

export default function Notion() {
  const tabItems = templatesInfo.map((tab) => ({
    title: tab.title,
    value: tab.value,
    content: <TabContent content={tab.content} />,
  }));

  return (
    <div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col mx-auto w-full items-start justify-start animate-in"
      style={{ "--index": 0 }}
    >
      <Tabs tabs={tabItems} />
    </div>
  );
}
