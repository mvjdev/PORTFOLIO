import Marquee from "react-fast-marquee";
import {
  SiSymfony,
  SiSpringboot,
  SiNestjs,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiIntellijidea,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
// J’ai augmenté un cran la taille des icônes
const commonIconClass = "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20";

export default function TechStackMarquee() {
  return (
    <div className="w-full py-36">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-20 text-picto-primary">
        🚀 Tools and technologies
      </h2>
      <Marquee gradient={false} speed={50} pauseOnHover>
        <div className="flex items-center gap-12">
          <VscVscode className={`${commonIconClass} text-[#007ACC]`} />
          <SiIntellijidea className={`${commonIconClass} text-[#670b19]`} />
          <FaGithub className={`${commonIconClass} text-black`} />
          <SiSymfony className={`${commonIconClass} text-black`} />
          <SiSpringboot className={`${commonIconClass} text-[#6DB33F]`} />
          <SiNestjs className={`${commonIconClass} text-[#E0234E]`} />
          <SiPostgresql className={`${commonIconClass} text-[#336791]`} />
          <SiReact className={`${commonIconClass} text-[#61DAFB]`} />
          <SiNextdotjs className={`${commonIconClass} text-black`} />
          <SiHtml5 className={`${commonIconClass} text-[#E34F26]`} />
          <SiCss3 className={`${commonIconClass} text-[#1572B6]`} />
          <SiJavascript className={`${commonIconClass} text-[#F7DF1E]`} />
          <SiTypescript className={`${commonIconClass} text-[#3178C6] mr-10`} />
        </div>
      </Marquee>
    </div>
  );
}
