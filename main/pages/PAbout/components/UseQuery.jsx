import React from 'react'
import { observer, useQuery } from 'startupjs'

const UseQuery = observer(() => {
  const [items = [], $items] = useQuery('mocks', {})

  return <div>{
    items.map(({id, title}) => <div key={id}>{title}</div>)
  }</div>
})

export default UseQuery