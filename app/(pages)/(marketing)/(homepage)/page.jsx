import Section from "@/app/(global_components)/Section";

export default function Home() {
  const intro = {
    heading: "Welcome!",
    body: [
      "Blockchain technology brought us Bitcoin, Ethereum, and memecoins! But it also brought a lot of noise and headaches.",
      "<strong>Crypto Data Viz</strong> is a free online resource where you can explore this space while being guided by human-friendly visuals. It's created to help you make sense of data across various aspects of crypto",
      "Whether you are a crypto investor or just a curious on-looker, this site offers plenty of charts and simulations to visually explain everything in this crazy world of blockchain and cryptocurrencies!",
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
