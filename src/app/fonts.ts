import { Bebas_Neue, Manrope, JetBrains_Mono } from "next/font/google";

export const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-display" });
export const manrope = Manrope({ subsets: ["latin"], weight: ["400","500","600","700","800"], variable: "--font-body" });
export const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400","500","700"], variable: "--font-mono" });
