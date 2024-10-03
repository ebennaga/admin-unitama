module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_DUPsclxMaEsQFjPF0Cb3XzH9nm5z/z5ocpy69GG",
      apiToken: "ScJsHm3bSUhcwhwOxYxBhuyA",
      appFilter: "admin-unitama",
      teamFilter: "no1",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
