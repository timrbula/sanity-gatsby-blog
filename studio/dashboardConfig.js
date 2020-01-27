export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2e3923e3ba01af303b1ead',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5cuimewk',
                  apiId: 'f2d43649-d2ad-494e-9ea4-097769ccad7c'
                },
                {
                  buildHookId: '5e2e3924b1f2eab76caa4830',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ybxbh36i',
                  apiId: '6b146d4c-fb11-4c23-914e-03e67e5b4d9d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/timrbula/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ybxbh36i.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
