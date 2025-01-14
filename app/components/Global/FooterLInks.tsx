import Image from "next/image";
import Link from "next/link";

interface Items {
  icon?: any;
  name: string;
  href: string;
}

interface FooterContent {
  title: string;
  items: Items[];
}

interface Props {
  footerContent: FooterContent;
  key: number;
}

const FooterLInks = ({ footerContent, key }: Props) => {
  return (
    <div key={key} className="w-full">
      <h3 className="text-oker font-normal text-xl mb-2">
        {footerContent.title}
      </h3>
      <ul className="font-normal text-base text-kobalt list-none w-full space-y-2">
        {/* if statment */}
        {footerContent.items.map((items, i) => (
          <li key={i} className="">
            <Link href={items.href} className="flex justify-start items-start">
              {items.icon ? (
                <Image
                  src={items.icon}
                  alt="icon"
                  width={20}
                  className="mr-2"
                />
              ) : null}
              {items.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* <ul>
        <li>
          <Link href="/" className="flex justify-start items-center space-x-2">
            <span>{footerContent.items.icon}</span>
            <span>{footerContent.items.itemName}</span>
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default FooterLInks;
