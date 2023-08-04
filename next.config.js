const { createSecureHeaders } = require("next-secure-headers");

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: [
                "'self'",
                "http://192.168.0.12", // 이 부분은 필요에 따라 수정
              ],
              scriptSrc: [
                "'self'",
                "'unsafe-inline'", // 필요한 경우에만 사용
                "https://cdn.example.com", // 허용할 스크립트의 다른 출처
              ],
              styleSrc: ["'self'", "'unsafe-inline'"],
              imgSrc: ["'self'", "http://192.168.0.12", "data:"], // 필요한 경우에 따라 수정
              baseUri: "'self'",
              formAction: "'self'",
              frameAncestors: ["'self'", "https://example.com"], // 필요한 경우에 따라 수정
            },
          },
        }),
      },
    ];
  },
};
