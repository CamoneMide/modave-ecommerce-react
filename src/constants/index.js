import heroImg1 from "../assets/images/slider-women1.jpg";
import heroImg2 from "../assets/images/slider-women2.jpg";

import clsCircle1 from "../assets/images/cls-circle1.jpg";
import clsCircle2 from "../assets/images/cls-circle2.jpg";
import clsCircle3 from "../assets/images/cls-circle3.jpg";
import clsCircle4 from "../assets/images/cls-circle4.jpg";
import clsCircle5 from "../assets/images/cls-circle5.jpg";

import clsTes1 from "../assets/images/tes-1.jpg";
import clsTes2 from "../assets/images/tes-2.jpg";

import clsUser4 from "../assets/images/user-4.jpg";
import clsUser5 from "../assets/images/user-5.jpg";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "", label: "Shop" },
  { href: "", label: "Products" },
  { href: "", label: "Blog" },
  { href: "", label: "About Us" },
  { href: "", label: "Contact Us" },
];

export const heroSects = [
  {
    id: 1,
    src: heroImg1,
    heroP: "BIKINIS & SWIMSUITS",
    heroText1: "Find Your",
    heroText2: "Signature Style",
    heroBHref: "/",
  },
  {
    id: 2,
    src: heroImg2,
    heroP: "BIKINIS & SWIMSUITS",
    heroText1: "Flash Sale Madness",
    heroText2: "",
    heroBHref: "/",
  },
];

export const categSects = [
  {
    id: 1,
    src: clsCircle1,
    textH6: "New in",
    count: 12,
  },
  {
    id: 2,
    src: clsCircle2,
    textH6: "Promotion",
    count: 27,
  },
  {
    id: 3,
    src: clsCircle3,
    textH6: "Clothing",
    count: 19,
  },
  {
    id: 4,
    src: clsCircle1,
    textH6: "New in",
    count: 21,
  },
  {
    id: 5,
    src: clsCircle4,
    textH6: "Shoes",
    count: 18,
  },
  {
    id: 6,
    src: clsCircle5,
    textH6: "Bags",
    count: 24,
  },
];

export const testySects = [
  {
    id: 1,
    src: clsTes1,
    text: '"Fantastic shop! Great selection, fair prices, and friendly staff. Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!"',
    name: "Sybil Sharp",
    srcUser: clsUser4,
    title: "Contrasting Jacket",
    price: 90.0,
  },
  {
    id: 2,
    src: clsTes2,
    text: '"I absolutely love this shop! The products are high-quality and the customer service is excellent. I always leave with exactly what i need and a smile on my face."',
    name: "Mark G",
    srcUser: clsUser5,
    title: "Sheepskin sweatshirt",
    price: 60.0,
  },
  {
    id: 3,
    src: clsTes1,
    text: '"Fantastic shop! Great selection, fair prices, and friendly staff. Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!"',
    name: "Sybil Sharp",
    srcUser: clsUser4,
    title: "Sheepskin Jacket",
    price: 120.0,
  },
  {
    id: 2,
    src: clsTes2,
    text: '"I absolutely love this shop! The products are high-quality and the customer service is excellent. I always leave with exactly what i need and a smile on my face."',
    name: "Mark G",
    srcUser: clsUser5,
    title: "Contrasting sweatshirt",
    price: 87.0,
  },
];
