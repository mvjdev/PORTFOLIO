import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Fullstack do with (React & Node*ts & PostgreSQL)",
    title: "Hotel room management application",
    description:
      "A hotel booking platform.It includes an Admin dashboard to manage rooms, users, and reservations, and a Client space for signup/login (Google or email), room search & booking, dark mode, and contact via MailTrap.Authentication is secured with JWT & cookies, and the UI is designed with React + Tailwind.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7305476761260064770/",
  },
  {
    id: 2,
    image: card2,
    category: "Fullstack do with (Nextjs & Symfony & PostgreSQL)",
    title:
      "Infrastructure digitale complète pour un site d’entreprise premium, combinant branding, avec portail client, packs automatisés et interface multilingue. Admin Dashboard",
    description:
      "The client area lets users create and manage their brand identity and handle account, documents, and pack payments. The admin area provides centralized control over services, packs, and users, ensuring automation and consistency.",
    link: "https://orbixup-preprod.onrender.com",
  },
  {
    id: 3,
    image: card3,
    category: "Fullstack do with (Nextjs & SpringBoot & PostgreSQL)",
    title:
      "Creation of a website for selling digital marketing courses, coaching, and mentoring in career and entrepreneurship development, with the implementation of an automated digital marketing system.",
    description:
      "A website for selling digital marketing courses, coaching, and career or entrepreneurship mentoring, with an automated digital marketing system.",
    link: "https://fairbrand-front.onrender.com",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/mvjdev"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
          target="_blank"
          rel="noreferrer"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
