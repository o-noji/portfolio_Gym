import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/_component/Header/Header.module.scss";
const HeaderData = [
  {
    name: "Top",
    url: "/",
  },
  {
    name: "About",
    url: "/about/",
  },
  {
    name: "Plan",
    url: "/plan/",
  },
  {
    name: "FAQ",
    url: "/faq/",
  },
];

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          <h1 className={styles.logo}>
            <Link href="/">
              <Image src="/img/logo.jpg" width={226} height={86} alt="OKD GYM" />
            </Link>
          </h1>

          <nav className={styles.nav}>
            <div className={styles.nav__inner}>
              <ul>
                {HeaderData.map((items) => {
                  return (
                    <li key={items.name}>
                      <Link href={items.url}>{items.name}</Link>
                    </li>
                  );
                })}
              </ul>
              <button>
                <Link href="#">Reserve</Link>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
