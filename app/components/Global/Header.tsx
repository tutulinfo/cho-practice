import ClockIcon from "../../../public/assets/icons/clock-outline.svg";
import CallIcon from "../../../public/assets/icons/call.svg";
import EmailIcon from "../../../public/assets/icons/email-outline.svg";
import MobileMenu from "../../../public/assets/icons/hamburger.svg";
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
      name: "Training Courses",
      href: "/training-courses",
    },
    {
      name: "In-company & Customized",
      href: "/in-company-customized",
    },
    {
      name: "Supervision",
      href: "/supervision",
    },
    {
      name: "Our Teachers",
      href: "/our-teachers",
    },
  ];
  return (
    <header className="shadow">
      {/* Header top/contact part */}
      <div className="relative bg-matGroen h-10 w-full">
        <div className="hidden md:block">
          <div className="max-w-screen-2xl mx-auto flex justify-end items-center px-4 lg:px-8 py-2 space-x-6">
            {contactInfo.map((item, i) => {
              return <HeaderContactInfo key={i} contactInfo={item} />;
            })}
          </div>
        </div>
      </div>

      {/* Header logo and nav part */}
      <div className="h-20 bg-white py-4">
        <div className=" max-w-screen-2xl mx-auto flex justify-between items-center px-4 lg:px-8 py-2 space-x-6">
          {/* Logo */}
          <Link href="/" className="absolute top-0 h-[120px]">
            <Image
              src={Logo}
              alt="Logo"
              className="h-full w-auto object-cover"
            />
          </Link>

          <div className="w-full flex justify-end items-center space-x-6 ml-auto">
            {/* Nav */}
            <button className="h-6 w-6 bg-white block md:hidden">
              <Image src={MobileMenu} alt="Mobile Menu" width={24} />
            </button>
            <nav className="hidden md:block">
              <ul className="flex justify-center items-center space-x-2">
                <li className="flex justify-center items-center space-x-2 divide-x-2 divide-koraal">
                  {navItems.map((item, index) => {
                    return <NavItem key={index} navItems={item} />;
                  })}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
