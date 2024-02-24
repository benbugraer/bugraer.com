import { LuLaptop2 } from "react-icons/lu";

import { BsFillMouseFill } from "react-icons/bs";
import { TbDeviceAirpods } from "react-icons/tb";
import { FaKeyboard } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { CgGoogleTasks } from "react-icons/cg";
import {
  SiWindows,
  SiVisualstudiocode,
  SiNotion,
  SiMiro,
  SiGooglecalendar,
  SiMicrosoftedge,
  SiFramer,
  SiArc,
  SiOpenai,
} from "react-icons/si";

const GearItem = ({ icon, title }) => (
  <li className="flex items-center gap-6">
    {icon}
    <h1>{title}</h1>
  </li>
);

const GearItemsSection = ({ title, items }) => (
  <section className="flex flex-col gap-8 animate-in" style={{ "--index": 3 }}>
    <h2 className="text-secondary">{title}</h2>
    <ul className="grid md:grid-cols-2 gap-x-4 gap-y-4 mb-4 lg:-mb-5   animated-list">
      {items.map((item, index) => (
        <GearItem key={index} {...item} />
      ))}
    </ul>
  </section>
);

const GearItems = () => {
  const techGear = [
    { icon: <LuLaptop2 className="w-7 h-7" />, title: "Huawei Matebook 16" },
    {
      icon: <BsFillMouseFill className="w-7 h-7" />,
      title: "Logitech M350 Bluetooth Mouse",
    },
    {
      icon: <FaKeyboard className="w-7 h-7" />,
      title: "Logitech M350 Bluetooth Keyboard",
    },
    {
      icon: <TbDeviceAirpods className="w-7 h-7" />,
      title: "Huawei Freebuds SE 2",
    },
  ];

  const codingDesignGear = [
    {
      icon: <SiWindows className="w-7 h-7" />,
      title: "Windows 11 Home Edition",
    },
    {
      icon: <SiVisualstudiocode className="w-7 h-7" />,
      title: "Visual Studio Code",
    },
    {
      icon: <SiArc className="w-7 h-7" />,
      title: "Arc Browser | Beta",
    },
    {
      icon: <SiMicrosoftedge className="w-7 h-7" />,
      title: "Microsoft Edge",
    },
    {
      icon: <SiOpenai className="w-7 h-7" />,
      title: "Chat GPT",
    },
    { icon: <FaFigma className="w-7 h-7" />, title: "Figma" },
    { icon: <SiFramer className="w-7 h-7" />, title: "Framer" },
  ];

  const productivityApps = [
    { icon: <SiNotion className="w-7 h-7" />, title: "Notion" },
    { icon: <SiMiro className="w-7 h-7" />, title: "Miro" },
    {
      icon: <SiGooglecalendar className="w-7 h-7" />,
      title: "Google Calendar",
    },
    {
      icon: <CgGoogleTasks className="w-7 h-7" />,
      title: "Google Tasks",
    },
  ];

  return (
    <>
      <GearItemsSection title="Tech Gear" items={techGear} />
      <GearItemsSection
        title="For Coding & Designing"
        items={codingDesignGear}
      />
      <GearItemsSection title="Productivity Apps" items={productivityApps} />
    </>
  );
};

export default GearItems;
