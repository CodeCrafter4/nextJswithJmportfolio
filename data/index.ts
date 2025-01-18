import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
    
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working with a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title:
      "E-commerce Website ",
    des: "E-commerce Website Using React JS | MERN Stack eCommerce Project with Stripe.",
    img: "/eco.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mogodcb.svg", "/nod.svg"],
    link: "https://ecommerce-frontend-gamma-coral.vercel.app/",
  },
  {
    id: 2,
    title: "Blog App ",
    des: "Full Stack Blog App Using Next JS & MongoDB | Backend, Frontend and Admin Project.",
    img: "/blog.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mogodcb.svg", "/nod.svg"],
    link: "https://blogger-eight-rosy.vercel.app/",
  },
  {
    id: 3,
    title: "AI BG Removal SaaS App ",
    des: " AI BG Removal SaaS App using React JS, Clerk | Full Stack AI React Project.",
    img: "/bgr.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/api.png", "/nod.svg"],
    link: "https://background-removal-tjpt.vercel.app/",
  },
  {
    id: 4,
    title: "Fitness Exercises App",
    des: "Modern React 18 Fitness Exercises App With APIs | RapidAPI.",
    img: "/gym.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/api.png"],
    link: "https://golds-gym-e.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Genuine feedback from those I’ve had the pleasure to work with Their kind words inspire my dedication to excellence.Each project is a journey, and their trust means everything. Here’s what makes it all worthwhile.",
    name: "muhammed",
    title: "muhammed",
  },
  {
    quote:
      "An exceptional professional who delivers top-notch work with precision and creativity.Consistently exceeds expectations with innovative solutions and excellent communication throughout the project.",
    name: "",
    title: "",
  },
  {
    quote:
      "Reliable, efficient, and detail-oriented.  A pleasure to work with—always responsive and goes the extra mile to ensure quality. Brilliant at turning ideas into reality! Clear timelines, outstanding delivery, and great collaboration. Great at problem-solving and finding efficient.",
    name: "",
    title: "",
  },
  {
    quote:
      "Brilliant at turning ideas into reality! Clear timelines, outstanding delivery, and great collaboration. Great at problem-solving and finding efficient. Reliable, efficient, and detail-oriented.  A pleasure to work with—always responsive and goes the extra mile to ensure quality.",
    name: "",
    title: "",
  },
  {
    quote:
      "Impressive creativity and adaptability. They understand client needs thoroughly and execute flawlessly. Reliable, efficient, and detail-oriented.  A pleasure to work with—always responsive and goes the extra mile to ensure quality.",
    name: "",
    title: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - MIT Tech",
    desc: "Designed and developed mobile app for Android platforms using Flutter.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/CodeCrafter4",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/muhammed-abdella/",
  },
];
