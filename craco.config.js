const CracoLessPlugin = require('craco-less')

// All Ant Design less variables could be found in
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // Brand
              '@optimally-gray': '#4A4F55',
              '@optimally-lt-blue': '#3AC1CD',
              '@optimally-md-blue': '#00788C',
              '@optimally-green': '#00BC70',
              '@optimally-lt-brown': '#F09F54',
              '@optimally-md-brown': '#B55434',
              '@optimally-yellow': '#FFC844',
              '@optimally-white': '#FFFFFF',
              '@primary-color': '@optimally-md-blue',
              '@link-color': '@optimally-md-blue',
              '@success-color': '@optimally-green',
              '@warning-color': '@optimally-yellow',
              '@error-color': '@optimally-md-brown',
              // Colors Grayto White
              '@optimally-gray-75': '#5e636a',
              '@optimally-gray-50': '#767c85',
              '@optimally-gray-25': '#979ca3',
              'optimally-gray-10': '#c1c4c8',
              // Colors Md-Blue to White
              '@optimally-md-blue-75': '#0096af',
              '@optimally-md-blue-50': '#9ccad6',
              '@optimally-md-blue-25': '#cee4ea',
              '@optimally-md-blue-alpha': '#b7cfd7',
              '@optimally-md-blue-layout-bg': '#b8dbe1',
              // Colors Lt-Blue to White
              '@optimally-lt-blue-75': '#69ccd5',
              '@optimally-lt-blue-50': '#8cd6dd',
              '@optimally-lt-blue-25': '#c8ebee',
              // Font
              '@font-size-base': '16px',
              '@font-family': 'acumin-pro, Helvetica, sans-serif',
              '@heading-color': '@optimally-gray',
              '@text-color': '@optimally-gray',
              '@text-color-secondary': '@optimally-gray',
              '@disabled-color': '@optimally-gray',
              // Background and Border Base
              '@background-color-base': '@optimally-white',
              '@border-color-base': '@optimally-md-blue-75',
              '@border-radius-base': '0px',
              '@component-background': '@background-color-base',
              '@item-active-bg': 'rgba(183, 208, 215, 0.9)',
              '@item-hover-bg': 'rgba(183, 208, 215, 0.75)',
              // Buttons
              '@btn-border-radius-base': '2px',
              '@btn-border-radius-sm': '2px',
              '@btn-primary-color': '@optimally-white',
              '@btn-primary-bg': '@primary-color',
              '@btn-primary-border': 'transparent',
              '@btn-primary-ghost-color': '@optimally-white',
              '@btn-primary-ghost-bg': 'transparent',
              '@btn-primary-ghost-border': '@optimally-white',
              '@btn-default-color': '@primary-color',
              '@btn-default-bg': '@optimally-lt-blue',
              '@btn-default-border': 'transparent',
              '@btn-default-ghost-color': '@optimally-lt-blue',
              '@btn-default-ghost-bg': 'transparent',
              '@btn-default-ghost-border': '@optimally-lt-blue',
              '@btn-disable-color': 'lighten(@primary-color, 75%)',
              '@btn-disable-bg': '@optimally-lt-blue',
              '@btn-disable-border': 'transparent',
              '@btn-disable-ghost-color': 'lighten(@primary-color, 75%)',
              '@btn-disable-ghost-bg': 'transparent',
              '@btn-disable-ghost-border': 'lighten(@primary-color, 75%)',
              '@btn-warning-color': '@optimally-md-blue',
              '@btn-warning-bg': '@optimally-yellow',
              '@btn-warning-border': 'transparent',
              '@btn-warning-ghost-color': '@optimally-yellow',
              '@btn-warning-ghost-bg': 'transparent',
              '@btn-warning-ghost-border': '@optimally-yellow',
              '@btn-error-color': '@optimally-md-brown',
              '@btn-error-bg': '@optimally-yellow',
              '@btn-error-border': 'transparent',
              '@btn-error-ghost-color': '@optimally-md-brown',
              '@btn-error-ghost-bg': 'transparent',
              '@btn-error-ghost-border': '@optimally-md-brown',
              // Input
              '@input-color': '@optimally-gray',
              '@input-placeholder-color': '@optimally-gray-50',
              '@input-border-color': '@optimally-md-blue-75',
              '@input-number-hover-border-color': '@optimally-md-blue-75',
              '@input-bg': '@optimally-md-blue-alpha',
              '@input-addon-bg': '@optimally-md-blue-alpha',
              // Layout
              '@layout-body-background': '@optimally-white',
              '@layout-header-background': '@optimally-gray-10',
              '@layout-sider-background': '@optimally-gray',
              // Menu Dark Theme for Dashboard Layout
              '@menu-dark-bg': '@optimally-gray',
              '@menu-dark-submenu-bg': '@optimally-gray-75',
              '@menu-dark-highlight-color': '@optimally-lt-blue-25',
              '@menu-dark-item-active-bg': '@optimally-lt-blue',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
