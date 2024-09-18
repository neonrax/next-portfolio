"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={` rounded p-2 ${pathName === link.url && "bg-black text-white"} text-lg`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;