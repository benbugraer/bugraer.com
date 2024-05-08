import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Halo from "@/components/ui/Halo";
import templatesInfo from "@/constants/templatesInfo";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Bugra Er | Notion",
  description: "Templates this template for free.",
};

export default function NotionTemplates() {
  const templates = templatesInfo;

  return (
    <div className="mx-auto mb-24 md:mb-0">
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="animate-in text-3xl uppercase font-bold tracking-tight">
              Templates
            </h1>
            <p className="text-tertiary animate-in" style={{ "--index": 1 }}>
              Here are some notion templates that I use and that you can use
              easily. You can use one or more of them by copying and customizing
              them.
            </p>
          </div>
        </div>
        <ul
          className="animate-in flex flex-col animated-list"
          style={{ "--index": 2 }}
        >
          {templates.map((template) => (
            <li
              key={template.id}
              className={clsx(
                "py-6 flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity first:pt-0 last:pb-0"
              )}
            >
              <div
                className="w-full md:max-w-100 h-[16rem] bg-secondary aspect-video bg-tertiary rounded-xl border border-secondary overflow-clip select-none"
                passHref
              >
                <Halo strength={10}>
                  <Image
                    src={template.image}
                    alt={template.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </Halo>
              </div>
              <div className="max-w-5xl space-y-4">
                <div className="flex gap-3 items-center">
                  <h1
                    className="text-primary font-medium duration-500 ease-linear transition-all hover:duration-500 hover:ease-out hover:transition-all hover:text-tertiary"
                    passHref
                  >
                    {template.title}
                  </h1>
                  <p className="text-primary"> · </p>
                  <div
                    className="flex animate-in  gap-3 text-secondary md:flex-row md:items-center"
                    style={{ "--index": 1 }}
                  >
                    <Image
                      src={template.creator}
                      width={25}
                      height={25}
                      alt="avatar"
                      className="rounded-full bg-secondary"
                    />
                    {template.created}
                  </div>
                </div>
                <p className="line-clamp-3 text-tertiary">
                  {template.description}
                </p>
                <div className="mt-4">
                  <Button>
                    <Link
                      href={template.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Duplicate Now
                    </Link>
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
