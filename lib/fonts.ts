import { Roboto_Mono as FontMono, Noto_Sans as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const fontMono = FontMono({
  subsets: ["cyrillic"],
});
