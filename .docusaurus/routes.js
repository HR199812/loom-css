import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fc6'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'cfe'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7f1'),
            routes: [
              {
                path: '/docs/components/accordion',
                component: ComponentCreator('/docs/components/accordion', 'c20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/alert',
                component: ComponentCreator('/docs/components/alert', '84d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/avatar',
                component: ComponentCreator('/docs/components/avatar', '97a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/badge',
                component: ComponentCreator('/docs/components/badge', 'c5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/barchart',
                component: ComponentCreator('/docs/components/barchart', 'f5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/breadcrumb',
                component: ComponentCreator('/docs/components/breadcrumb', '651'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/button',
                component: ComponentCreator('/docs/components/button', 'e2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/calendar',
                component: ComponentCreator('/docs/components/calendar', '9f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/card',
                component: ComponentCreator('/docs/components/card', 'd9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/carousel',
                component: ComponentCreator('/docs/components/carousel', 'ba2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/chat',
                component: ComponentCreator('/docs/components/chat', 'b33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/checkbox',
                component: ComponentCreator('/docs/components/checkbox', 'cc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/commandpalette',
                component: ComponentCreator('/docs/components/commandpalette', '461'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/dateinput',
                component: ComponentCreator('/docs/components/dateinput', '89f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/dropdown',
                component: ComponentCreator('/docs/components/dropdown', 'c6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/grid',
                component: ComponentCreator('/docs/components/grid', '6c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/input',
                component: ComponentCreator('/docs/components/input', 'c58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/linechart',
                component: ComponentCreator('/docs/components/linechart', 'e40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/lists',
                component: ComponentCreator('/docs/components/lists', '2ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/modal',
                component: ComponentCreator('/docs/components/modal', '07b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/navigation',
                component: ComponentCreator('/docs/components/navigation', 'ec7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/otpinput',
                component: ComponentCreator('/docs/components/otpinput', '4b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/pagination',
                component: ComponentCreator('/docs/components/pagination', '406'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/paymentplan',
                component: ComponentCreator('/docs/components/paymentplan', '6c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/progressbar',
                component: ComponentCreator('/docs/components/progressbar', '74f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/radio',
                component: ComponentCreator('/docs/components/radio', 'ed5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/range',
                component: ComponentCreator('/docs/components/range', '4f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/searchinput',
                component: ComponentCreator('/docs/components/searchinput', 'dd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/separator',
                component: ComponentCreator('/docs/components/separator', 'c29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/sidebar',
                component: ComponentCreator('/docs/components/sidebar', '3b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/switch',
                component: ComponentCreator('/docs/components/switch', '072'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/table',
                component: ComponentCreator('/docs/components/table', 'adc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/tabs',
                component: ComponentCreator('/docs/components/tabs', '0b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/text',
                component: ComponentCreator('/docs/components/text', '9a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/textarea',
                component: ComponentCreator('/docs/components/textarea', 'f8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/themeswitch',
                component: ComponentCreator('/docs/components/themeswitch', 'e15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/title',
                component: ComponentCreator('/docs/components/title', '966'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/toast',
                component: ComponentCreator('/docs/components/toast', '6ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/togglegroup',
                component: ComponentCreator('/docs/components/togglegroup', 'a86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/tooltip',
                component: ComponentCreator('/docs/components/tooltip', 'ffa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/design-system/overview',
                component: ComponentCreator('/docs/design-system/overview', 'ba9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/installation',
                component: ComponentCreator('/docs/installation', '7cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'e59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/react/getting-started',
                component: ComponentCreator('/docs/react/getting-started', '8c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/vue/getting-started',
                component: ComponentCreator('/docs/vue/getting-started', '844'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
