/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // `struct` オプションは、middlewareを使用していてかつ、パスが同じ場合はSSGしかprefetchを行わないようにするものである
    // middleware上でpathnameを変えている場合は使えない。
    // middlewarePrefetch: "strict",
  },
};

module.exports = nextConfig;
