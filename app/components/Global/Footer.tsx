import Image from "next/image";
import Logo from "../../../public/assets/logo.png";
import Link from "next/link";
import CallIcon from "../../../public/assets/icons/material-symbols_call.svg";
import EmailIcon from "../../../public/assets/icons/mdi_email-outline.svg";
import LocationIcon from "../../../public/assets/icons/outline-location-on.svg";
import FooterLInks from "./FooterLInks";

const Footer = () => {
  const footerContents = [
    {
      title: "Sitemap",
      items: [
        { name: "Opleidingen", href: "/" },
        { name: "Over ons", href: "/" },
      ],
    },
    {
      title: "Contact",
      items: [
        { name: "Contact", href: "/" },
        { name: "Algemene voorwaarden", href: "/" },
      ],
    },
    {
      title: "Navigatie",
      items: [
        {
          icon: LocationIcon,
          name: "Centrum Hecht Opleidingen Kanaalpark 157, 2321 JW Leiden, Nederland",
          href: "/",
        },
        {
          icon: CallIcon,
          name: "071-207 0038",
          href: "/",
        },
        { icon: EmailIcon, name: "opleidingen@centrumhecht.nl", href: "/" },
      ],
    },
  ];

  return (
    <div className=" bg-[#f4f4f4]">
      {/* Footer top content */}
      <div className="max-w-6xl mx-auto flex justify-between items-start px-8 py-8 space-x-40">
        <Link href="/" className="">
          <Image src={Logo} alt="Logo" height={160} />
        </Link>
        <div className="flex justify-start items-start space-x-16">
          {footerContents.map((item, index) => {
            return <FooterLInks footerContent={item} key={index} />;
          })}
        </div>

        {/* <div>Site map</div>
        <div>Support</div>
        <div>Navigation</div> */}
      </div>
      <div className="bg-matGroen">
        <div className="text-white  max-w-6xl mx-auto px-8 py-2">
          <p className="text-center">
            &copy; 2025 Centrum Hecht Opleidingen, Netherlands. All right
            reserved.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
