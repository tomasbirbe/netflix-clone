import localFont from "next/font/local";

export const NetflixFont = localFont({
  src: [
    {
      path: "./NetflixSans_W_Bd.woff2",
      weight: "700",
    },
    {
      path: "./NetflixSans_W_Blk.woff2",
      weight: "900",
    },
    {
      path: "./NetflixSans_W_Md.woff2",
      weight: "500",
    },
    {
      path: "./NetflixSans_W_Rg.woff2",
      weight: "400",
    },
  ],
});
