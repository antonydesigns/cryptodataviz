import Section from "@/components/custom/Section";

export default function Home() {
  const intro = {
    heading: "Welcome!",
    body: [
      "Blockchain technology brought us Bitcoin, Ethereum, and memecoins! But it also brought a lot of noise, confusion, and misconceptions.",
      "<strong>Crypto Data Viz</strong> is a free online resource where you can explore this space while being guided by human-friendly visuals. It's created to help you make sense of the technology and all the data surrounding it.",
      "Are you are a crypto investor or just a curious on-looker? This site offers plenty of charts and simulations for everyone!",
    ],
  };

  const whatsAvailable = {
    heading: "What's new?",
    body: [
      "<strong>31 October 2023: Dollar Cost Averaging Simulator</strong>",
      "The Dollar Cost Averaging (DCA) Simulator shows what will happen if you consistently invest the same amount of money into various cryptocurrencies. ",
    ],
  };

  return (
    <>
      <Section content={intro} />
      <Section content={whatsAvailable} />
    </>
  );
}
