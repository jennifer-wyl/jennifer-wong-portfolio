export type JourneyStory = {
  title: string;
  images: {
    left: { src: string; alt: string; caption: string };
    right: { src: string; alt: string; caption: string };
  };
  background: string;
  upgrade2022: string;
  current: {
    propertyName: string;
    entryPrice: string;
    currentValuation: string;
  };
  outcome: string;
  strategy: string;
};

export const jenniferJourney: JourneyStory = {
  title: "From First-Time Owner to Strategic Upgrade",
  images: {
    left: {
      src: "/images/punggol-hdb.jpeg",
      alt: "4-room HDB, Punggol",
      caption: "Punggol HDB · 2012–2022",
    },
    right: {
      src: "/images/normanton-park.jpeg",
      alt: "D05 Normanton Park, 4BR Premium",
      caption: "Normanton Park · 2022–Present",
    },
  },
  background:
    "2012: Bought a 4-room HDB in Punggol during a balance flat exercise, at the peak of the market. Held for 10 years, with the mortgage fully funded through CPF contributions.",
  upgrade2022:
    "2022: A growing family needed more space and a lifestyle change — time to upgrade.",
  current: {
    propertyName: "D05 Normanton Park, 4BR Premium",
    entryPrice: "$2.341M",
    currentValuation: "$2.75M",
  },
  outcome: "+$409K appreciation (~18% in 4 years)",
  strategy:
    "Patient 10-year accumulation → strategic life upgrade → captured market recovery",
};
