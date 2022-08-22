module.exports = {
  env: {
    MONGO_URI:
      "mongodb+srv://SibuleleMd:82548822@cluster0.0rt6ioo.mongodb.net/Clients?retryWrites=true&w=majority",
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  future:{
    webpack5:true
  }
};
