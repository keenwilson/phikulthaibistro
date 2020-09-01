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
              '@pktb-gray': '#252227',
              '@pktb-dk-purple': '#452b5d',
              '@pktb-md-purple': '#5c1c96',
              '@pktb-lt-purple': '#a98ec1',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
