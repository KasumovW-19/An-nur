import Head from "next/head";

import { Header } from "@/components/layout/Header/Header";
import { Hero } from "@/components/sections/Hero/Hero";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>МФК «АН-НУР» — квартиры в новом Грозном</title>

        <meta
          name="description"
          content="МФК «АН-НУР» в центре нового Грозного. Рассрочка до 72 месяцев, скидка 10% и сдача 5 октября 2026 года."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main>
        <Hero />
      </main>
    </>
  );
}