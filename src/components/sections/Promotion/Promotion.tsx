import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";

import styles from "./Promotion.module.scss";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

const promotionEndDate = new Date(
  "2026-08-01T23:59:59+03:00",
).getTime();

const initialTimeLeft: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  expired: false,
};

const whatsappUrl =
  "https://wa.me/79639888885?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D1%80%D0%B0%D1%81%D1%87%D1%91%D1%82%20%D0%BF%D0%BE%20%D0%B0%D0%BA%D1%86%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D1%83%20%D0%B2%20%D0%9C%D0%A4%D0%9A%20%D0%90%D0%9D-%D0%9D%D0%A3%D0%A0";

function calculateTimeLeft(): TimeLeft {
  const difference = promotionEndDate - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24,
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60,
    ),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false,
  };
}

function formatTime(value: number) {
  return value.toString().padStart(2, "0");
}

export function Promotion() {
  const [timeLeft, setTimeLeft] =
    useState<TimeLeft>(initialTimeLeft);

  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft());
    };

    updateTimer();

    const intervalId = window.setInterval(
      updateTimer,
      1000,
    );

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section id="promotion" className={styles.promotion}>
      <Container>
        <div className={styles.card}>
          <div className={styles.decorativeLine} />

          <div className={styles.content}>
            <p className={styles.eyebrow}>
              Специальное предложение
            </p>

            <h2 className={styles.title}>
              Ваша квартира в МФК «АН-НУР»
              <span>на особых условиях</span>
            </h2>

            <p className={styles.description}>
              Получите скидку 10% от общей стоимости и
              оформите рассрочку сроком до 72 месяцев.
            </p>

            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <strong>−10%</strong>
                <span>Скидка на квартиру</span>
              </div>

              <div className={styles.benefit}>
                <strong>72</strong>
                <span>Месяца рассрочки</span>
              </div>

              <div className={styles.benefit}>
                <strong>0 ₽</strong>
                <span>Скрытых переплат</span>
              </div>
            </div>

            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.button}
            >
              Получить индивидуальный расчёт
            </Button>
          </div>

          <div className={styles.offer}>
            <div className={styles.discount}>
              <span>Скидка</span>
              <strong>10%</strong>
            </div>

            <div className={styles.offerDivider} />

            {!timeLeft.expired ? (
              <div className={styles.timer}>
                <p className={styles.timerTitle}>
                  До завершения акции
                </p>

                <div
                  className={styles.timerGrid}
                  aria-live="polite"
                >
                  <div className={styles.timerItem}>
                    <strong>
                      {formatTime(timeLeft.days)}
                    </strong>
                    <span>дней</span>
                  </div>

                  <div className={styles.timerItem}>
                    <strong>
                      {formatTime(timeLeft.hours)}
                    </strong>
                    <span>часов</span>
                  </div>

                  <div className={styles.timerItem}>
                    <strong>
                      {formatTime(timeLeft.minutes)}
                    </strong>
                    <span>минут</span>
                  </div>

                  <div className={styles.timerItem}>
                    <strong>
                      {formatTime(timeLeft.seconds)}
                    </strong>
                    <span>секунд</span>
                  </div>
                </div>

                <p className={styles.deadline}>
                  Предложение действует до 1 августа
                  2026 года
                </p>
              </div>
            ) : (
              <div className={styles.expired}>
                <p>Акция завершена</p>
                <span>
                  Актуальные условия уточняйте у
                  менеджера
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}