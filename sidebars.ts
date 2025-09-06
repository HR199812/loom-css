import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    'installation',
    {
      type: 'category',
      label: 'React',
      items: [
        'react/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Vue',
      items: [
        'vue/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Design System',
      items: [
        'design-system/overview',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/button',
        'components/input',
        'components/card',
        'components/modal',
        'components/navigation',
        'components/accordion',
        'components/alert',
        'components/avatar',
        'components/badge',
        'components/breadcrumb',
        'components/calendar',
        'components/carousel',
        'components/chat',
        'components/checkbox',
        'components/commandpalette',
        'components/dateinput',
        'components/dropdown',
        'components/grid',
        'components/lists',
        'components/otpinput',
        'components/pagination',
        'components/paymentplan',
        'components/progressbar',
        'components/radio',
        'components/range',
        'components/searchinput',
        'components/separator',
        'components/sidebar',
        'components/switch',
        'components/table',
        'components/tabs',
        'components/text',
        'components/textarea',
        'components/themeswitch',
        'components/title',
        'components/toast',
        'components/togglegroup',
        'components/tooltip',
        'components/barchart',
        'components/linechart',
      ],
    },
  ],
};

export default sidebars;
