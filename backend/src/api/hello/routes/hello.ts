export default {
  routes: [
    {
      method: "GET",
      path: "/hello",
      handler: "api::hello.hello.index",
      config: {
        auth: false,
      },
    },
  ],
};
