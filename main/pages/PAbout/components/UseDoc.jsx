import React from 'react'
import { observer, useDoc } from 'startupjs'

const UseDoc = observer(() => {
  const [item = {}, $item] = useDoc('mocks', '8c53dc5f-b444-4555-b6be-148d98458855')

  return <div>{
    item.title
  }</div>
})

export default UseDoc