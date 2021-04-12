// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '吴绍清',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Posts',
        path: './data/*.md',
        remark: {

        }
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL, // 连接地址
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['blog', 'tag'], // 查询的content类型
        singleTypes: ['general'],
        plural: true, // pluralizes names of Content Types in API
        // Possibility to login with a Strapi user, when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: '',
        // },
      }
    }
  ],
  templates: {
    StrapiBlog: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ]
  },
  transformers: {
    remark: {
      // global remark options
    }
  }
}
