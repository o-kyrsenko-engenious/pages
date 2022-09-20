import { ReactComponent as Logo } from "../images/logo.svg";
import png from "../images/hero.png";

const year = new Date().getFullYear();

export const data = {
  title: "AnywayPay",
  text: "A social payment system that gives buyers, sellers, and businesses freedom to pay any way they want",
  copyright: `Anyway Pay ${year}`,
  images: {
    png,
    w: 1781,
    h: 2265,
  },
  logo: <Logo/>,
};
