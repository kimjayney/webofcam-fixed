const { createSecureHeaders } = require("next-secure-headers");

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: { 
                imgSrc: ["'self'", 'https:', 'http:', 'data:'],
            },
          },
        }),
      },
    ];
  },
};
