import Image from "next/image";
import Link from "next/link";

interface ContactInfo {
  href: string;
  src: any;
  alt: string;
  text: string;
}

interface Props {
  contactInfo: ContactInfo;
  key: number;
}
const HeaderContactInfo = ({ contactInfo, key }: Props) => {
  return (
    <Link
      key={key}
      href={contactInfo.href}
      className="flex justify-start items-center space-x-2 text-sm font-normal text-white"
    >
      <Image src={contactInfo.src} alt={contactInfo.alt} width={24} />
      <p>{contactInfo.text}</p>
    </Link>
  );
};

export default HeaderContactInfo;
