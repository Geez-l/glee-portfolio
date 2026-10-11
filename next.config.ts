import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Project/experience screenshots are our own trusted static assets, not
    // user-uploaded content, so it's safe to let next/image optimize SVGs.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
