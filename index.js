import Heading from './src/heading'
import { colors } from './assets'

module.exports = {
  Heading: Heading,
  colors: colors,
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-native')
    }
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-native',
      commonjs2: 'react-native',
      amd: 'ReactNative',
      root: 'ReactNative'
    }
  }
}
