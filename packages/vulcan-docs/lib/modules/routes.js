import { addRoute, dynamicLoader } from 'meteor/vulcan:core';

addRoute({
  name: 'docs-accounts',
  path: '/docs/accounts',
  component: dynamicLoader(() => import('../src/accounts.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-admin',
  path: '/docs/admin',
  component: dynamicLoader(() => import('../src/admin.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-architecture',
  path: '/docs/architecture',
  component: dynamicLoader(() => import('../src/architecture.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-callbacks',
  path: '/docs/callbacks',
  component: dynamicLoader(() => import('../src/callbacks.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-cloudinary',
  path: '/docs/cloudinary',
  component: dynamicLoader(() => import('../src/cloudinary.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-common-problems',
  path: '/docs/common-problems',
  component: dynamicLoader(() => import('../src/common-problems.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-connecting-remotely',
  path: '/docs/connecting-remotely',
  component: dynamicLoader(() => import('../src/connecting-remotely.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-core-components',
  path: '/docs/core-components',
  component: dynamicLoader(() => import('../src/core-components.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-database',
  path: '/docs/database',
  component: dynamicLoader(() => import('../src/database.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-debug',
  path: '/docs/debug',
  component: dynamicLoader(() => import('../src/debug.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-deployment',
  path: '/docs/deployment',
  component: dynamicLoader(() => import('../src/deployment.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-email',
  path: '/docs/email',
  component: dynamicLoader(() => import('../src/email.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-embed',
  path: '/docs/embed',
  component: dynamicLoader(() => import('../src/embed.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-errors',
  path: '/docs/errors',
  component: dynamicLoader(() => import('../src/errors.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-events',
  path: '/docs/events',
  component: dynamicLoader(() => import('../src/events.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-example-customization',
  path: '/docs/example-customization',
  component: dynamicLoader(() => import('../src/example-customization.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-example-forum',
  path: '/docs/example-forum',
  component: dynamicLoader(() => import('../src/example-forum.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-example-instagram',
  path: '/docs/example-instagram',
  component: dynamicLoader(() => import('../src/example-instagram.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-example-movies',
  path: '/docs/example-movies',
  component: dynamicLoader(() => import('../src/example-movies.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-example-permissions',
  path: '/docs/example-permissions',
  component: dynamicLoader(() => import('../src/example-permissions.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-example-simple',
  path: '/docs/example-simple',
  component: dynamicLoader(() => import('../src/example-simple.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-examples',
  path: '/docs/examples',
  component: dynamicLoader(() => import('../src/examples.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-features-packages',
  path: '/docs/features-packages',
  component: dynamicLoader(() => import('../src/features-packages.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-features',
  path: '/docs/features',
  component: dynamicLoader(() => import('../src/features.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-field-resolvers',
  path: '/docs/field-resolvers',
  component: dynamicLoader(() => import('../src/field-resolvers.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-forms-components',
  path: '/docs/forms-components',
  component: dynamicLoader(() => import('../src/forms-components.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-forms-custom',
  path: '/docs/forms-custom',
  component: dynamicLoader(() => import('../src/forms-custom.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-forms-upload',
  path: '/docs/forms-upload',
  component: dynamicLoader(() => import('../src/forms-upload.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-forms',
  path: '/docs/forms',
  component: dynamicLoader(() => import('../src/forms.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-forum-packages',
  path: '/docs/forum-packages',
  component: dynamicLoader(() => import('../src/forum-packages.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-fragments',
  path: '/docs/fragments',
  component: dynamicLoader(() => import('../src/fragments.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-graphql-schema',
  path: '/docs/graphql-schema',
  component: dynamicLoader(() => import('../src/graphql-schema.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-groups-permissions',
  path: '/docs/groups-permissions',
  component: dynamicLoader(() => import('../src/groups-permissions.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-head-tags',
  path: '/docs/head-tags',
  component: dynamicLoader(() => import('../src/head-tags.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-index',
  path: '/docs',
  component: dynamicLoader(() => import('../src/index.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-internationalization',
  path: '/docs/internationalization',
  component: dynamicLoader(() => import('../src/internationalization.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-learn',
  path: '/docs/learn',
  component: dynamicLoader(() => import('../src/learn.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-migration',
  path: '/docs/migration',
  component: dynamicLoader(() => import('../src/migration.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-mutations',
  path: '/docs/mutations',
  component: dynamicLoader(() => import('../src/mutations.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-newsletter',
  path: '/docs/newsletter',
  component: dynamicLoader(() => import('../src/newsletter.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-notifications',
  path: '/docs/notifications',
  component: dynamicLoader(() => import('../src/notifications.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-nutshell',
  path: '/docs/nutshell',
  component: dynamicLoader(() => import('../src/nutshell.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-packages',
  path: '/docs/packages',
  component: dynamicLoader(() => import('../src/packages.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-payments',
  path: '/docs/payments',
  component: dynamicLoader(() => import('../src/payments.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-performance',
  path: '/docs/performance',
  component: dynamicLoader(() => import('../src/performance.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-plugins',
  path: '/docs/plugins',
  component: dynamicLoader(() => import('../src/plugins.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-recipes',
  path: '/docs/recipes',
  component: dynamicLoader(() => import('../src/recipes.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-redux',
  path: '/docs/redux',
  component: dynamicLoader(() => import('../src/redux.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-resolvers',
  path: '/docs/resolvers',
  component: dynamicLoader(() => import('../src/resolvers.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-routing',
  path: '/docs/routing',
  component: dynamicLoader(() => import('../src/routing.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-schema-properties',
  path: '/docs/schema-properties',
  component: dynamicLoader(() => import('../src/schema-properties.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-schemas',
  path: '/docs/schemas',
  component: dynamicLoader(() => import('../src/schemas.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-security',
  path: '/docs/security',
  component: dynamicLoader(() => import('../src/security.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-server-queries',
  path: '/docs/server-queries',
  component: dynamicLoader(() => import('../src/server-queries.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-settings',
  path: '/docs/settings',
  component: dynamicLoader(() => import('../src/settings.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-sponsorship-tutorial',
  path: '/docs/sponsorship-tutorial',
  component: dynamicLoader(() => import('../src/sponsorship-tutorial.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-terms-parameters',
  path: '/docs/terms-parameters',
  component: dynamicLoader(() => import('../src/terms-parameters.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-themes',
  path: '/docs/themes',
  component: dynamicLoader(() => import('../src/themes.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-theming',
  path: '/docs/theming',
  component: dynamicLoader(() => import('../src/theming.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-tutorials',
  path: '/docs/tutorials',
  component: dynamicLoader(() => import('../src/tutorials.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-ui-components',
  path: '/docs/ui-components',
  component: dynamicLoader(() => import('../src/ui-components.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-users',
  path: '/docs/users',
  component: dynamicLoader(() => import('../src/users.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-videos',
  path: '/docs/videos',
  component: dynamicLoader(() => import('../src/videos.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-voting',
  path: '/docs/voting',
  component: dynamicLoader(() => import('../src/voting.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-vulcan',
  path: '/docs/vulcan',
  component: dynamicLoader(() => import('../src/vulcan.mdx')),
  layoutName: 'DocsLayout',
});
addRoute({
  name: 'docs-why-vulcan',
  path: '/docs/why-vulcan',
  component: dynamicLoader(() => import('../src/why-vulcan.mdx')),
  layoutName: 'DocsLayout',
});
