import ClockIcon from "../../../public/assets/icons/clock-outline.svg";
import CallIcon from "../../../public/assets/icons/call.svg";
import EmailIcon from "../../../public/assets/icons/email-outline.svg";
import HeaderContactInfo from "./HeaderContactInfo";
import Image from "next/image";
import Logo from "../../../public/assets/logo.png";
import Link from "next/link";
import NavItem from "./NavItem";

const Header = () => {
  const contactInfo = [
    {
      href: "/",
      src: ClockIcon,
      alt: "Clock Icon",
      text: "Everyday, 9am - 10am",
    },
    {
      href: "/",
      src: CallIcon,
      alt: "Call Icon",
      text: "(071) 207 00 38",
    },
    {
      href: "/",
      src: EmailIcon,
      alt: "Email Icon",
      text: "contact@centrumhecht.nl",
    },
  ];

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Ons Aanbod",
      href: "/ons-aanbod",
    },
    {
      name: "Incompany en Maatwerk",
      href: "/incompany-en-maatwerk",
    },
    {
      name: "Supervisie",
      href: "/supervisie",
    },
    {
      name: "Onze Docenten",
      href: "/onze-docenten",
    },
  ];
  return (
    <header className="shadow relative hidden md:block">
      {/* Header top/contact part */}
      <div className=" bg-matGroen ">
        <div className="max-w-5xl mx-auto flex justify-end items-center px-8 py-2 space-x-6">
          {contactInfo.map((item, index) => {
            return <HeaderContactInfo key={index} contactInfo={item} />;
          })}
        </div>
      </div>

      {/* Header logo and nav part */}
      <div className="bg-white py-4">
        <div className="max-w-5xl mx-auto flex justify-end items-center px-8 py-2 space-x-6">
          <Link
            href="/"
            className="absolute top-0 bottom-0 left-4 sm:left-8 xl:left-1/2 transform xl:-translate-x-[620px] bg-white"
          >
            <Image src={Logo} alt="Logo" height={120} />
          </Link>
          <nav className="">
            <ul className="flex justify-center items-center space-x-2">
              <li className="flex justify-center items-center space-x-4 divide-x-2 divide-koraal">
                {navItems.map((item, index) => {
                  return <NavItem key={index} navItems={item} />;
                })}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
