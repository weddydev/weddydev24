/* ==========================================================================
   WEDDING CONFIG — the only file you need to edit to re-brand the site.
   --------------------------------------------------------------------------
   Text formatting inside titles:
     *word*  → italic (gold)        e.g. "The *Ceremony*"
     ~word~  → outlined letters     e.g. "~Forever~"
   Dates: ISO format WITH the venue's UTC offset, e.g. "2026-12-12T17:00:00+05:30".
   Times are always displayed in the venue's local time, wherever the guest is.
   ========================================================================== */

const WEDDING = {

  /* ---------------------------------------------------------------- Couple */
  couple: {
    partner1: "Aarav",
    partner2: "Meher",
    initials: ["A", "M"],                  // monogram crest letters
    signature: "Aarav & Meher",            // drawn in script in the finale
    families: "Together with the Malhotra & Kapoor families"
  },

  /* ------------------------------------------------- The main moment (countdown) */
  date: "2026-12-12T17:00:00+05:30",
  timezoneLabel: "IST",
  city: "Udaipur",
  region: "Rajasthan, India",
  hashtag: "#AaravWedsMeher",
  rsvpDeadline: "15 November 2026",

  /* --------------------------------------------------------- Brand colours */
  theme: {
    obsidian: "#0b0a09",
    ivory:    "#f4ede1",
    gold:     "#d4af6a",
    accent:   "#5a0f1f",                   // deep burgundy. Emerald alternative: "#0f3b2e"
    accentDeep: "#22050c"
  },

  /* ----------------------------------------------------------------- Sound
     src: an mp3 placed in /public/assets/audio, e.g. "assets/audio/theme.mp3".
     Leave empty to use the built-in generative ambient score.             */
  music: { src: "", volume: 0.55 },

  /* --------------------------------------------- Greeting (?guest=Name links) */
  greeting: {
    envelopeLabel: "A private invitation for",
    genericName: "Our dearest guest",
    prologueWithGuest: "Dear {guest},",
    prologueGeneric: "Dear friend,"
  },

  /* ------------------------------------------------------------------ Hero */
  hero: {
    eyebrow: "The wedding celebration of",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552"
  },

  /* -------------------------------------------------------------- Prologue */
  prologue: {
    text: "Some stories are written. Ours was *found* — in a borrowed umbrella, a missed train, a quiet morning on the water. This December, in the City of Lakes, we write the next chapter. It would mean the world to have you there.",
    signoff: "With love, the Malhotra & Kapoor families"
  },

  /* ----------------------------------------------- Story (pinned scroll film) */
  story: [
    {
      year: "2019", place: "London",
      title: "A borrowed *umbrella.*",
      text: "A November downpour on Marylebone High Street. One umbrella, two strangers, and a café neither meant to enter. They talked until the chairs were stacked.",
      imageBack:  "https://images.unsplash.com/photo-1494774157365-9e04c6720e47",
      imageFront: "https://images.unsplash.com/photo-1520854221256-17451cc331bf"
    },
    {
      year: "2023", place: "Lake Como",
      title: "The *question.*",
      text: "Four years, eleven cities, one still morning on the water. He forgot every word he had rehearsed. She said yes before he found them.",
      imageBack:  "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f",
      imageFront: "https://images.unsplash.com/photo-1606800052052-a08af7148866"
    },
    {
      year: "2026", place: "Udaipur",
      title: "And now, *forever.*",
      text: "In the City of Lakes, beneath a December sky, we begin the rest of our lives. It would not be complete without you.",
      imageBack:  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74",
      imageFront: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0"
    }
  ],

  /* ---------------------------------------------- Events (rendered as VIP passes)
     style: "black" | "accent"  — the accent pass is printed in burgundy.  */
  events: [
    {
      title: "A Night on *the Lake*",
      kind: "Welcome Dinner",
      start: "2026-12-10T19:30:00+05:30",
      end:   "2026-12-10T23:30:00+05:30",
      venue: "Jagmandir Island Palace",
      address: "Lake Pichola, Udaipur",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Jagmandir+Island+Palace+Udaipur",
      dress: "Black Tie",
      note: "Boats leave the palace jetty from 7 PM. Arrive by water, leave by starlight.",
      style: "black"
    },
    {
      title: "The Garden of *Song*",
      kind: "Mehendi & Sangeet",
      start: "2026-12-11T16:00:00+05:30",
      end:   "2026-12-11T23:00:00+05:30",
      venue: "Fateh Prakash Gardens",
      address: "City Palace Complex, Udaipur",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Fateh+Prakash+Palace+Udaipur",
      dress: "Jewel Tones",
      note: "Henna at golden hour, marigolds, and music until late. Wear something you can dance in.",
      style: "black"
    },
    {
      title: "The *Ceremony*",
      kind: "The Wedding",
      start: "2026-12-12T17:00:00+05:30",
      end:   "2026-12-12T19:30:00+05:30",
      venue: "Manak Chowk, The City Palace",
      address: "City Palace, Udaipur",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=City+Palace+Udaipur",
      dress: "Traditional Royal",
      note: "Seven vows as the sun sets over the Aravallis. Kindly be seated by 4:40 PM.",
      style: "accent"
    },
    {
      title: "The Grand *Reception*",
      kind: "Reception",
      start: "2026-12-12T20:30:00+05:30",
      end:   "2026-12-13T00:30:00+05:30",
      venue: "Durbar Hall",
      address: "Fateh Prakash Palace, Udaipur",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Durbar+Hall+Fateh+Prakash+Palace+Udaipur",
      dress: "Black Tie",
      note: "Chandeliers, a twelve-course dinner and the first dance as husband and wife.",
      style: "black"
    },
    {
      title: "After *Midnight*",
      kind: "After-Party",
      start: "2026-12-13T00:30:00+05:30",
      end:   "2026-12-13T04:00:00+05:30",
      venue: "The Moonlit Terrace",
      address: "City Palace, Udaipur",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=City+Palace+Udaipur",
      dress: "Dance-Ready Glamour",
      note: "For those who never want the night to end. Shoes optional after 2 AM.",
      style: "black"
    }
  ],

  /* ----------------------------------------------------------------- Venue */
  venue: {
    pre: "The",
    name: "City *Palace*",
    address: "City Palace Complex, Old City, Udaipur, Rajasthan 313001",
    description: "Four centuries of marble and mirror-work, rising out of Lake Pichola. For three days it is ours. And for three days it is yours.",
    image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10",
    mapQuery: "City Palace, Udaipur",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=City+Palace+Udaipur"
  },

  /* --------------------------------------------------------------- Gallery */
  gallery: [
    { src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954", caption: "Golden hour", place: "Cotswolds, 2020" },
    { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6", caption: "The promise",  place: "Lake Como, 2023" },
    { src: "https://images.unsplash.com/photo-1510076857177-7470076d4098", caption: "The ballroom", place: "Udaipur" },
    { src: "https://images.unsplash.com/photo-1496062031456-07b8f162a322", caption: "Her rose",     place: "Paris, 2021" },
    { src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac", caption: "Hand in hand", place: "Jaipur, 2024" },
    { src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2", caption: "The mandap",   place: "Udaipur" },
    { src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2", caption: "Every sunset", place: "Santorini, 2022" },
    { src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf", caption: "A toast",      place: "London, 2025" }
  ],
  marquee: ["Aarav & Meher", "Udaipur", "MMXXVI", "Forever begins here"],

  /* ------------------------------------------------------ Travel & concierge */
  travel: [
    {
      title: "Arrival",
      meta: "UDR · 35 minutes to the palace",
      text: "Fly into Maharana Pratap Airport, Udaipur. Our team will meet you as you land, from commercial gates to private aviation slots, which we are happy to coordinate."
    },
    {
      title: "Residence",
      meta: "Room blocks held until 1 November",
      text: "Suites are reserved for you at The Oberoi Udaivilas, Taj Lake Palace and The Leela Palace. Quote “AM1212” or simply message your concierge."
    },
    {
      title: "Chauffeur",
      meta: "Door to door, every evening",
      text: "Chauffeured cars and palace boats will carry you between every celebration. Your driver’s details arrive 48 hours before you do."
    },
    {
      title: "Attire & Rituals",
      meta: "On call throughout",
      text: "Saree draping, safa tying, last-minute tailoring and a quiet room for jet lag. Ask for anything, however small."
    }
  ],
  concierge: {
    name: "Ananya Rao",
    role: "Your personal concierge",
    hours: "Available 24 hours, 8–14 December",
    whatsapp: "919800012345",              // international format, digits only
    message: "Hello Ananya, this is {guest}. I have a question about Aarav & Meher's wedding."
  },

  /* ----------------------------------------------------------------- RSVP
     method:
       "whatsapp"  → opens WhatsApp with a beautifully formatted reply (works instantly)
       "formspree" → POST to endpoint, e.g. "https://formspree.io/f/xxxxxxx"
       "google"    → posts into a Google Form (fill googleForm below)
       "demo"      → no network, just the celebration animation               */
  rsvp: {
    method: "whatsapp",
    whatsapp: "919800012345",
    endpoint: "",
    googleForm: {
      action: "",                          // https://docs.google.com/forms/d/e/XXXX/formResponse
      fields: { name: "", attendance: "", guests: "", dietary: "", note: "" }  // "entry.123456"
    },
    maxGuests: 4,
    dietary: ["No restrictions", "Vegetarian", "Vegan", "Jain", "Gluten-free", "Nut allergy"]
  },

  /* ---------------------------------------------------------------- Finale */
  finale: {
    line: "Forever begins *here.*",
    footnote: "Udaipur · 12.12.2026"
  },

  /* ------------------------------------------------------------------ Meta
     The live URL of the site, used by generator.html to build guest links.
     Also update the <meta property="og:*"> tags at the top of index.html.
     (generator.html also lets you type the URL by hand.)  */
  siteUrl: ""
};

export default WEDDING;
