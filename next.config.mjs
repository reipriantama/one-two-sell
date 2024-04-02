/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'dummyimage.com',
      's3-alpha-sig.figma.com',
      'i0.wp.com',
      'res.cloudinary.com',
    ],
  },
};

export default nextConfig;
