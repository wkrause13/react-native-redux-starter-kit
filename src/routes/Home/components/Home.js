import React from 'react'
import { Text, View } from 'react-native';
import styles from './HomeStyles.js'
import HelloWorld from 'components/HelloWorld'
import coreStyles from 'styles/Core'

export const Home = () => (
  <View style={[styles['Home'],coreStyles.box]}>
    <HelloWorld />
  </View>
)

export default Home
