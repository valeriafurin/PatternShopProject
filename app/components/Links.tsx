"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export type LinkProps = {
  path: string;
  label: string;
};

export default function Links({ path, label }: LinkProps) {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link
            className={`link ${pathname === `"/${path}"` ? "active" : ""}`}
            href={`/${path}`}
          >
            {label}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
