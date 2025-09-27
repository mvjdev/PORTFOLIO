import logo from "../../../assets/logo.svg";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "home" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Services", url: "services" },
  { id: 6, name: "Contact", url: "contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#" className="flex items-center border-0">
          <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Toavina
          </p>
        </a>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              href={`#${item.url.toLowerCase()}`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear} Maria.
        </p>
      </div>
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Developed with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/toavina-maria-739455268/"
          className="underline font-bold"
          target="_blank"
        >
          Toavina Maria
        </a>
      </p>
    </div>
  );
};

export default Footer;
