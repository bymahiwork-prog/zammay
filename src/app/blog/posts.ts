export type PostSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  date: string; // ISO date
  readMinutes: number;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "best-lounge-bar-south-delhi",
    title: "How to Choose the Best Lounge Bar in South Delhi for a Memorable Night Out",
    description:
      "Ambience, cocktails, food, music and location — what actually makes a great lounge bar in South Delhi, and how to pick the right one for your night out.",
    excerpt:
      "Great lighting and a long cocktail list are only the start. Here is what separates a forgettable evening from a night you talk about for weeks.",
    category: "Nightlife",
    image: "/experience-interior.jpg",
    imageAlt: "Chandelier-lit lounge at Zammaya, Adchini, South Delhi",
    date: "2026-10-12",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "South Delhi has no shortage of places to go out. Hauz Khas, Green Park, Saket, Mehrauli and the stretch along Sri Aurobindo Marg are full of bars, cafés and lounges competing for your Friday night. With so many options, the hard part is not finding somewhere to go — it is finding somewhere that makes the evening feel worth it.",
          "A good lounge bar is more than a place to drink. It is where dinner turns into conversation, where a quick catch-up becomes a late night, and where you take the people you want to impress. Here is what to look for.",
        ],
      },
      {
        heading: "1. Ambience you can feel the moment you walk in",
        paragraphs: [
          "The best lounges set a mood before you have even sat down. Look for thoughtful lighting, interiors with a point of view, and a layout that gives you both energy and privacy — a buzzing bar area and quieter corners for conversation.",
          "Ask yourself: would you want to stay here for three hours? If the answer is yes, the space is doing its job.",
        ],
      },
      {
        heading: "2. A bar that takes cocktails seriously",
        paragraphs: [
          "A lounge lives or dies by its bar. A strong cocktail programme usually means signature creations you won't find elsewhere, classics made properly, and bartenders who can recommend something based on what you like rather than just pointing at the menu.",
          "Low- and no-alcohol options matter too. The best evenings work for everyone at the table.",
        ],
      },
      {
        heading: "3. Food that is more than an afterthought",
        paragraphs: [
          "Many people choose a lounge for drinks and end up staying for dinner. Plates designed for sharing make it easy to order for the table, try more things, and keep the conversation going. Globally inspired menus give groups with different tastes something to agree on.",
        ],
      },
      {
        heading: "4. Music that matches the hour",
        paragraphs: [
          "The right soundtrack changes through the night: relaxed enough to talk over at dinner, livelier as the evening goes on. A good lounge reads the room. If you can't hear the person across the table at 9 pm, it's probably not the place for a date.",
        ],
      },
      {
        heading: "5. Hospitality that makes you feel expected",
        paragraphs: [
          "Service is what people remember. A warm welcome, a team that remembers a birthday mentioned during booking, and staff who check in without hovering — these small things turn a one-time visit into a regular spot.",
        ],
      },
      {
        heading: "6. A location that is easy to reach",
        paragraphs: [
          "Convenience counts, especially for groups coming from different parts of the city. A central South Delhi address keeps the plan simple for everyone.",
        ],
      },
      {
        heading: "A quick checklist before you book",
        paragraphs: ["Before you reserve, run through these questions:"],
        list: [
          "Does the space suit the occasion — date, group dinner or celebration?",
          "Is there a mix of signature cocktails and well-made classics?",
          "Is the food menu built for sharing?",
          "Can they handle special requests like a cake or table decor?",
          "Is it easy for everyone to get to?",
        ],
      },
      {
        heading: "Where Zammaya fits in",
        paragraphs: [
          "Zammaya was created for exactly this kind of evening. Located at 81, Sri Aurobindo Marg in Adchini — minutes from Hauz Khas, Green Park, Malviya Nagar, Saket and Mehrauli — it brings together globally inspired food, signature cocktails, an immersive interior and a social atmosphere that shifts from dinner into nightlife.",
          "Whether it's a relaxed dinner after work, cocktails with friends or a milestone celebration, the aim is the same: a night that stays with you.",
        ],
      },
    ],
  },
  {
    slug: "cocktails-south-delhi-guide",
    title: "A Guide to Enjoying Cocktails in South Delhi",
    description:
      "How to order cocktails you'll love, match a drink to your mood and pair it with food — a simple guide for nights out in South Delhi.",
    excerpt:
      "Not sure what to order? A simple way to find a cocktail you'll love, match it to the moment, and pair it with what's on your plate.",
    category: "Cocktails",
    image: "/cocktails-signature.jpg",
    imageAlt: "Signature cocktail served at Zammaya",
    date: "2026-10-12",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "South Delhi's cocktail scene has grown up. Menus now go well beyond the usual suspects, with signature creations, house infusions and seasonal twists. That is exciting — and occasionally overwhelming. If you have ever stared at a cocktail list not knowing where to start, this guide is for you.",
        ],
      },
      {
        heading: "Start with flavour, not names",
        paragraphs: [
          "Cocktail names are often playful, so they don't tell you much. Instead, think about the flavour you're in the mood for and let that guide you:",
        ],
        list: [
          "Fresh and citrusy — bright, tangy drinks that are easy to start an evening with.",
          "Fruity and tropical — softer, rounder flavours that are crowd-pleasers.",
          "Herbal and botanical — drinks built around gin, fresh herbs or tea notes.",
          "Spirit-forward — stronger, slower sippers for later in the night.",
          "Creamy or dessert-style — a sweet finish to a long dinner.",
        ],
      },
      {
        heading: "Ask the bartender",
        paragraphs: [
          "The best bars want you to ask. Tell the bartender what you usually enjoy — a spirit, a flavour, even a drink you liked somewhere else — and let them suggest something. It's the fastest way to discover a new favourite.",
        ],
      },
      {
        heading: "Match the drink to the moment",
        paragraphs: [
          "A good evening has a rhythm. Light, refreshing drinks work well early on and alongside food. As the night moves from dinner to music, richer and stronger cocktails come into their own. If you're celebrating, a round of something shared for the table makes the moment feel special.",
        ],
      },
      {
        heading: "Pair cocktails with food",
        paragraphs: [
          "You don't need sommelier-level rules. A few simple ideas go a long way:",
        ],
        list: [
          "Citrusy drinks cut through fried and rich dishes.",
          "Herbal cocktails pair beautifully with fresh, lighter plates.",
          "Spirit-forward drinks stand up to bold, smoky flavours.",
          "Sweeter cocktails work best with — or as — dessert.",
        ],
      },
      {
        heading: "Pace yourself, and look after your group",
        paragraphs: [
          "Alternate cocktails with water, order food early, and plan your ride home before you head out. Good bars also offer non-alcoholic options, so everyone at the table can join the toast.",
        ],
      },
      {
        heading: "Cocktails at Zammaya",
        paragraphs: [
          "At Zammaya in Adchini, the bar is built around signature creations and premium pours designed to complement every mood — from an easy first drink after work to a celebratory round late into the night. Pull up a seat, tell the team what you like, and let the evening unfold.",
        ],
      },
    ],
  },
  {
    slug: "date-night-south-delhi",
    title: "How to Plan the Perfect Date Night in South Delhi",
    description:
      "From choosing the right setting to timing your evening, a simple plan for a date night in South Delhi that feels effortless and memorable.",
    excerpt:
      "The right setting, good timing and a few thoughtful touches — how to plan a date night that feels effortless.",
    category: "Date Night",
    image: "/lounge-interior.jpg",
    imageAlt: "Intimate lounge setting at Zammaya",
    date: "2026-10-12",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "A great date night isn't about spending the most money or finding the trendiest spot. It's about a setting that lets you relax, talk and enjoy each other's company. South Delhi gives you plenty of options; a little planning makes sure the evening feels effortless.",
        ],
      },
      {
        heading: "Choose a setting that suits the conversation",
        paragraphs: [
          "Look for a place with atmosphere but not chaos. Warm lighting, comfortable seating and music you can talk over are the essentials. A venue with distinct spaces — somewhere calmer for dinner and somewhere livelier for later — gives you options as the night goes on.",
        ],
      },
      {
        heading: "Book ahead and mention the occasion",
        paragraphs: [
          "Weekends fill up fast. Reserve a table in advance, and if it's a special occasion — a first date, an anniversary, a proposal — let the venue know. Many places are happy to arrange a quieter table, a small dessert surprise or a bit of decor.",
        ],
      },
      {
        heading: "Time it right",
        paragraphs: ["A simple flow that works for most evenings:"],
        list: [
          "Early evening: arrive, settle in and start with a light cocktail.",
          "Dinner: order a few dishes to share — it's more relaxed than individual plates.",
          "Later: stay for one more drink as the music picks up, or call it a night on a high.",
        ],
      },
      {
        heading: "Share your food",
        paragraphs: [
          "Sharing plates are underrated on a date. They take the pressure off ordering, give you something to talk about, and let you try more of the menu together.",
        ],
      },
      {
        heading: "Dress for the place",
        paragraphs: [
          "Premium lounges usually lean smart-casual. Dressing up a little is part of the fun, and it signals that the evening matters.",
        ],
      },
      {
        heading: "Keep the journey easy",
        paragraphs: [
          "Pick somewhere central so neither of you spends the evening in traffic. Areas around Hauz Khas, Green Park and Adchini are easy to reach from most of South Delhi.",
        ],
      },
      {
        heading: "Date night at Zammaya",
        paragraphs: [
          "Zammaya in Adchini is designed for evenings like this — warm and immersive, with crafted cocktails, globally inspired plates for sharing and an atmosphere that moves gently from dinner to nightlife. Tell the team it's a special night when you book, and they'll help make it one.",
        ],
      },
    ],
  },
  {
    slug: "birthday-celebration-restaurant-south-delhi",
    title: "How to Plan a Birthday Celebration at a Restaurant in South Delhi",
    description:
      "Guest list, booking, cake, decor and timing — a step-by-step plan for hosting a birthday dinner or party at a restaurant or lounge in South Delhi.",
    excerpt:
      "Guest list, booking, cake and timing — a simple plan for a birthday dinner that runs smoothly and feels special.",
    category: "Celebrations",
    image: "/private-events.jpg",
    imageAlt: "Friends raising a toast at Zammaya",
    date: "2026-10-12",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "Hosting a birthday at a restaurant or lounge takes the stress out of celebrating at home — no cooking, no cleaning, and a setting that already feels like an occasion. A little planning makes sure the night runs smoothly for you and your guests.",
        ],
      },
      {
        heading: "1. Decide the kind of celebration",
        paragraphs: [
          "Is it an intimate dinner for six or a lively evening for twenty? The size and mood decide everything else — the venue, the seating and how you structure the night. Smaller groups suit a long dinner table; larger groups often enjoy a mix of dining and lounge seating.",
        ],
      },
      {
        heading: "2. Fix your guest list early",
        paragraphs: [
          "Venues need a reasonably accurate headcount to hold the right space. Send invites early, ask for RSVPs and add a small buffer for last-minute additions.",
        ],
      },
      {
        heading: "3. Book in advance — especially for weekends",
        paragraphs: [
          "Friday and Saturday nights fill quickly in South Delhi. When you call, share the date, time, group size and the fact that it's a birthday. Ask about:",
        ],
        list: [
          "Seating options for your group size",
          "Whether you can bring a cake, or if they can arrange one",
          "Table decor or small personal touches",
          "Set menus or sharing platters for groups",
          "Any minimum spend for larger bookings",
        ],
      },
      {
        heading: "4. Plan the food and drinks",
        paragraphs: [
          "For groups, sharing platters and set menus keep things simple and make sure everyone eats at the same time. A round of signature cocktails — or mocktails — for the toast is an easy way to mark the moment.",
        ],
      },
      {
        heading: "5. Choreograph the cake moment",
        paragraphs: [
          "Agree with the team on when the cake comes out — usually after the main course. Let them know if you want candles, a song, or the lights dimmed. Have someone ready to take photos.",
        ],
      },
      {
        heading: "6. Think about the flow of the night",
        paragraphs: [
          "A relaxed dinner, the cake and toast, then more drinks as the music picks up is a format that works for most groups. Let people arrive in a window rather than at one exact time, so the evening starts naturally.",
        ],
      },
      {
        heading: "7. Sort the practical bits",
        paragraphs: [
          "Share the address and a map link with guests, suggest cabs if people are drinking, and decide upfront how the bill will be handled to avoid awkwardness at the end.",
        ],
      },
      {
        heading: "Celebrate at Zammaya",
        paragraphs: [
          "Zammaya in Adchini, South Delhi hosts birthdays, anniversaries and get-togethers of every size — from intimate dinners to lively celebrations. With globally inspired food, crafted cocktails and an immersive space near Hauz Khas and Green Park, it's built for nights worth remembering. Call or WhatsApp the team on +91 92898 95632 to plan yours.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
