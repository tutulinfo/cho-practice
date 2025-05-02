import Link from "next/link";

interface NavItems {
  name: string;
  href: string;
}

interface Props {
  navItems: NavItems;
  key: number;
}
const NavItem = ({ navItems, key }: Props) => {
  return (
    <Link
      href={navItems.href}
      key={key}
      className="pl-2 py-1 text-base lg:text-lg font-normal text-kobalt hover:text-oker active:text-koraal"
    >
      {navItems.name}
    </Link>
  );
};

export default NavItem;
