import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { pug, observer, emit } from 'startupjs'
import './index.styl'

export default observer(function ({ children }) {
  return pug`
    View.body= children
  `
})
