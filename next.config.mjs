/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  ...(process.env.NODE_ENV === "development" && {
    allowedDevOrigins: ["http://10.242.96.246:3000", "http://localhost:3000"],
  }),
};

export default nextConfig;
