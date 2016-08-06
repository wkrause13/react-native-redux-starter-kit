import React from 'react'
import { Text, View } from 'react-native';
import styles from './HelloWorldStyles.js'

export const HelloWorld = () => (
  <View style={styles['HelloWorld']}>
    <Text>HelloWorld</Text>
  </View>
)

export default HelloWorld
