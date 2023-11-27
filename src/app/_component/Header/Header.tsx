"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Burger, Drawer } from "@mantine/core";
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
const nav = (
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
        <Link href="/reserve/">Reserve</Link>
      </button>
    </div>
  </nav>
);

export default function Header() {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          <h1 className={styles.logo}>
            <Link href="/">
              <Image src="/img/logo.jpg" width={226} height={86} alt="OKD GYM" />
            </Link>
          </h1>

          {isMobile && <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />}
          {isMobile ? (
            <Drawer opened={opened} onClose={toggle} withCloseButton={true}>
              {nav}
            </Drawer>
          ) : (
            nav
          )}
        </div>
      </header>
    </>
  );
}
