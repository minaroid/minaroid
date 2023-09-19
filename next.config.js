/** @type {import('next').NextConfig} */

const withImages = require("next-images");

const nextConfig = {
  "manifest-src": ["'self'"],
};

const buildCSP = () => {
  let CSP = "";
  let cspObject = nextConfig;

  const entries = Object.entries(cspObject);
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    CSP += `${key}${value.length ? " " : ""}${value.join(" ")};`;
    if (i !== entries.length - 1) {
      CSP += " ";
    }
  }
  return CSP;
};

const cspHeaderValue = buildCSP();

module.exports = withImages({
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },

          { key: "Content-Security-Policy", value: cspHeaderValue },
          { key: "X-Content-Security-Policy", value: cspHeaderValue },
          { key: "X-Webkit-CSP", value: cspHeaderValue },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "same-origin" },
          { key: "X-DNS-Prefetch-Control", value: "off" },
          { key: "X-Download-Options", value: "noopen" },
        ],
      },
      {
        source: "/",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          { key: "Content-Security-Policy", value: cspHeaderValue },
          { key: "X-Content-Security-Policy", value: cspHeaderValue },
          { key: "X-Webkit-CSP", value: cspHeaderValue },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "same-origin" },
          { key: "X-DNS-Prefetch-Control", value: "off" },
          { key: "X-Download-Options", value: "noopen" },
        ],
      },
    ];
  },
});
