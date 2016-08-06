import React from 'react'
import { AppRegistry } from 'react-native'
import Root from './src/main'
import createStore from './src/store/createStore'

const store = createStore()
class ReactNativeReduxStarterKit extends React.Component {
  render () {
    return <Root {...this.props} store={store} />
  }
}

AppRegistry.registerComponent('reactNativeReduxStarterKit', () => ReactNativeReduxStarterKit);
