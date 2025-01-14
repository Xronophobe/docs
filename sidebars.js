/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'index',

    {
      type: 'category',
      label: 'Accessing Data',
      link: {
        type: 'doc',
        id: 'accessing-data/index'
      },
      collapsed: true,
      items: [
        'accessing-data/cloud-services',
        'accessing-data/locally',
        'accessing-data/example-queries'
      ]
    },
    {
      type: 'category',
      label: 'Exploring Data',
      link: {
        type: 'doc',
        id: 'exploring-data/index'
      },
      collapsed: true,
      items: [
        'exploring-data/kepler-gl',
        // 'exploring-data/QGIS',
      ]
    },
    {
      type: 'category',
      label: 'Visualizing Data',
      link: {
        type: 'doc',
        id: 'visualizing-data/index'
      },
      collapsed: true,
      items: [
        'visualizing-data/visualizing-places',
        'visualizing-data/build-a-map'
      ]
    },
    {
      type: 'category',
      label: 'Global Entity Reference System',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'gers/index'
      },
      items: [
        'gers/scenarios',
        'gers/terminology'
      ]
    },
    'release-notes',
    'data-sources'
  ]
};

module.exports = sidebars;
