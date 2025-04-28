// next.config.js
/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig = {
  reactStrictMode: true,
  ...(isExport && {
    output: "export",
    trailingSlash: true,
  }),
};

export default nextConfig;
