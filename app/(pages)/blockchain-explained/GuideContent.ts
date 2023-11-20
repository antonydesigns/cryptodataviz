type SectionContentType = {
  name: string;
  heading?: string;
  body?: string[];
};

export default class GuideContent {
  content: SectionContentType[];

  constructor() {
    this.content = [
      {
        name: `intro`,
        heading: `Blockchains Explained`,
        body: [
          "How does Bitcoin and other cryptocurrencies work? If crypto is a type of digital asset, can they be duplicated or forged?",
          "On this visual guide, you'll learn how blockchains work, and how they can help create a robust peer-to-peer payments system.",
          "Follow along...",
        ],
      },
    ];
  }

  getContent() {
    return this.content;
  }
}
