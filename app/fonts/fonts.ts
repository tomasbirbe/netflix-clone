import localFont from "next/font/local";

export const NetflixFont = localFont({
  src: [
    {
      path: "./NetflixSans_W_Bd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./NetflixSans_W_Blk.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "./NetflixSans_W_Md.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./NetflixSans_W_Rg.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});
