import { Container } from "@/components/ui/Container/Container";

import styles from "./Header.module.scss";

const whatsappUrl =
  "https://wa.me/79639888885?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%9C%D0%A4%D0%9A%20%D0%90%D0%9D-%D0%9D%D0%A3%D0%A0";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <a href="#hero" className={styles.logo} aria-label="ISMA">
          ISMA
        </a>

        <nav className={styles.navigation}>
          <a href="#about">О проекте</a>
          <a href="#gallery">Галерея</a>
          <a href="#apartments">Квартиры</a>
          <a href="#location">Расположение</a>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.contact}
        >
          WhatsApp
        </a>
      </Container>
    </header>
  );
}