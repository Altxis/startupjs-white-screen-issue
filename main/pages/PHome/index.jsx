import React from 'react'
import { ScrollView } from 'react-native'
import { pug, observer } from 'startupjs'
import { TestComponent } from 'components'
import './index.styl'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      TestComponent
  `
})
