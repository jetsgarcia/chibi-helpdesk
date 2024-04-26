"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link
            className={`hover:text-primary ${
              pathName === "/" ? "text-primary font-semibold" : ""
            }`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`hover:text-primary ${
              pathName === "/settings" ? "text-primary font-semibold" : ""
            }`}
            href="/settings"
          >
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
