export default function robots() {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/terms-of-service",
          "/privacy-policy",
          "/cookie-policy",
          "/refund-policy",
          "/enquiry",
          "/free-demo",
          "/forget-password",
          "/reset-password",
          "/account-security",
          "/account-settings",
        ],
      },
      sitemap: "https://blog.trafy.ai/sitemap.xml",
    };
  }
  