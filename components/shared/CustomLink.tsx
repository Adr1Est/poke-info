import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  styles?: string;
  children: ReactNode;
}

export default function CustomLink({href, styles, children}: Props){
  return (
    <Link
      href={href}
      className={`${styles} rounded-xl hover:bg-input p-2`}
    >
      {children}
    </Link>
  )
}