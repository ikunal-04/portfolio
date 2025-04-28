import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://pbs.twimg.com/profile_images/1916464904330002432/hyjqcG8a_400x400.jpg'), new URL('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmtidm84NzByOWJzN2JpYTUyaTRybXpyNTZzYzA1Z2wwdTAxMHNzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S5ho4N2P4dznGlJHgC/giphy.gif')],
    
  },
};

export default nextConfig;
