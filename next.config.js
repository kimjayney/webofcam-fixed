const { createSecureHeaders } = require("next-secure-headers");

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: { 
              imgSrc: ["'self'", "http://192.168.0.12","http://192.168.0.12:8080", "data:"], // 필요한 경우에 따라 수정 
            },
          },
        }),
      },
    ];
  },
};
