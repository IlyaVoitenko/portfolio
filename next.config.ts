import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
