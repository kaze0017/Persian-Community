import withPWA from "@ducanh2912/next-pwa";
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true, // Enable React strict mode for improved error handling
//   swcMinify: true, // Enable SWC minification for improved performance
//   compiler: {
//     removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
//   },
// };

// // next.config.mjs
// export default withPWA({
//   dest: "public", // destination directory for the PWA files
//   // disable: process.env.NODE_ENV === "development",.
//   disable: false, // disable PWA
//   register: true, // register the PWA service worker
//   skipWaiting: true, // skip waiting for service worker activation
//   sw:"sw.js", // service worker file name
// })(nextConfig);

const cWithPWA = withPWA({
  dest: "public", // destination directory for the PWA files
 cacheOnFrontEndNav: true,
 aggressiveFrontEndNavCaching: true,
 reloadOnOnline: true,
})

const nextConfig = {};

export default cWithPWA(nextConfig);
