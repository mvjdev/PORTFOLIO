import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faFacebookF, link: "https://www.facebook.com/hlakzjzu/" },
  {
    icon: faWhatsapp,
    link: "https://api.whatsapp.com/send/?phone=261386146492&text&type=phone_number&app_absent=0",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/toavina-maria-739455268/",
  },
  {
    icon: faContactBook,
    link: "https://teams.live.com/l/invite/FEApoLqxgrCHoKr1gM?v=g1",
  },
  {
    icon: faGithub,
    link: "https://github.com/mvjdev",
  },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
