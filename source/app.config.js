const setting = {
  dev: {
    db: {
      user: "root",
      password: "19971997",
      host: "localhost",
      database: "guialook"
    }
  },
  prod: {
    db: {
      user: "guialook",
      password: "guialookplugdo2019",
      host: "guialook.cpjwenmlj3sr.us-west-2.rds.amazonaws.com",
      database: "guialook"
    },
    security: {
      rateLimit: {
        active: true,
        period: 1,
        limit: 1500
      },
      header: {
        active: true
      },
      origin: {
        active: true,
        domains: ['http://www.guialook.com', 'http://guialook.com']
      }
    }
  }
}

exports.settings = function () {
  return setting;
};