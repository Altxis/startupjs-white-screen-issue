import React, { useState } from 'react'
import { observer, model, useSession } from 'startupjs'
import UseQuery from './components/UseQuery'
import UseDoc from './components/UseDoc'
import './index.styl'

export default observer(function PAbout () {
  const [tab, setTab] = useState(1)
  const [session, $session] = useSession('value')

  return <div styleName='root'>
    <h1>Тест</h1>
    <button onClick={async () => {
      const $$groupCounts = model.query('mocks', { $count: 1 })
//      const $$groups = model.query('mocks', {})
//      await new Promise(r => setTimeout(r, 12000))
      await model.subscribe($$groupCounts)
      console.log('$$groupCounts.getExtra()', $$groupCounts.getExtra())
      model.unsubscribe($$groupCounts)
      setTab(1)
    }}>Ститичный контент</button>
    <button onClick={async () => {
      setTab(2)
    }}>Компонент с useQuery</button>
    <button onClick={async () => {
      setTab(3)
    }}>Компонент с useDoc</button>
    {tab === 1 && <div>Tab 1</div>}
    {tab === 2 && <div><UseQuery /></div>}
    {tab === 3 && <div><UseDoc /></div>}
    <button onClick={async () => {
      const s = model.scope('mocks.8c53dc5f-b444-4555-b6be-148d98458855')
      await s.fetch()
      await s.set('restricted', true)
    }}>Запретить доступ</button>
    <br />
  </div>
})
