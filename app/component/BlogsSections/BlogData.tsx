// app/components/projects/projectsData.ts

export interface Blog {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const BlogData: Blog[] = [
      {
    title: "Variables & Data Types in JavaScript",
    description: "In this chapter, we begin our journey into JavaScript (JS) by exploring its fundamental concepts and core principles.",
    image: "/Blog-03.webp",
    link: "https://medium.com/@IqraRafiqKhan/variables-data-types-in-javascript-ed1b5c6c2d28",
  },
  {
    title: "Turning Doubt Into Fuel,",
    description: "My Journey as a Solo Entrepreneur: Failure is a word that carries weight the kind of weight that sits quietly on your shoulders when you’re working alone,",
    image: "/Blog-01.webp",
    link: "https://medium.com/@IqraRafiqKhan/turning-doubt-into-fuel-my-journey-as-a-solo-entrepreneur-8f3fa473ef89",
  },
  {
    title: "A Tiring Day, But a Meaningful One",
    description: "A tiring day isn’t just about physical exhaustion it’s a blend of emotions that rise and fall as the hours pass.",
    image: "/Blog-02.webp",
    link: "https://medium.com/@IqraRafiqKhan/a-tiring-day-but-a-meaningful-one-c5e666918c55",
  },

  {
    title: "Why Do People Stay Silent About the Innocent Lives Lost in Gaza?",
    description: "It’s heartbreaking and deeply confusing how the world remains silent while innocent lives are being lost in Gaza.",
    image: "/Blog-04.webp",
    link: "https://medium.com/@IqraRafiqKhan/why-do-people-stay-silent-about-the-innocent-lives-lost-in-gaza-5b65fd08a549",
  },
];
