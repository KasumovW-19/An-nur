import { getImageProps } from "next/image";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";

import styles from "./Hero.module.scss";

const whatsappUrl =
  "https://wa.me/79639888885?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%B4%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D1%8C%20%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D1%83%20%D0%B2%20%D0%9C%D0%A4%D0%9A%20%D0%90%D0%9D-%D0%9D%D0%A3%D0%A0";

export function Hero() {
  const commonImageProps = {
    alt: "МФК АН-НУР в Грозном",
    sizes: "100vw",
    loading: "eager" as const,
    fetchPriority: "high" as const,
  };

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...commonImageProps,
    src: "/images/hero/annur-hero-desktop.jpeg",
    width: 1920,
    height: 1080,
    quality: 85,
  });

  const {
    props: { srcSet: mobileSrcSet, ...mobileImageProps },
  } = getImageProps({
    ...commonImageProps,
    src: "/images/hero/annur-hero-mobile.jpg",
    width: 900,
    height: 1600,
    quality: 82,
  });

  return (
    <section id="hero" className={styles.hero}>
      <picture className={styles.background}>
        <source
          media="(min-width: 769px)"
          srcSet={desktopSrcSet}
        />

        <source
          media="(max-width: 768px)"
          srcSet={mobileSrcSet}
        />

        <img
          {...mobileImageProps}
          className={styles.backgroundImage}
        />
      </picture>

      <div className={styles.overlay} />

      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.company}>
            ISMA — лучшие эксклюзивы рынка недвижимости
          </p>

          <h1 className={styles.title}>
            МФК
            <span>«АН-НУР»</span>
          </h1>

          <p className={styles.subtitle}>
            Восточная легенда нового Грозного
          </p>

          <p className={styles.description}>
            Современный многофункциональный комплекс в самом сердце нового
            пешеходного бульвара.
          </p>

          <div className={styles.actions}>
            <Button href="#apartments">
              Выбрать квартиру
            </Button>

            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              Написать в WhatsApp
            </Button>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <strong>72 месяца</strong>
            <span>Рассрочка</span>
          </div>

          <div className={styles.feature}>
            <strong>−10%</strong>
            <span>Скидка до 1 августа</span>
          </div>

          <div className={styles.feature}>
            <strong>05.10.2026</strong>
            <span>Сдача комплекса</span>
          </div>
        </div>
      </Container>
    </section>
  );
}