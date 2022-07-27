export async function initMockData (backend) {
  const model = backend.createModel()

  const $mockCount = model.query('mocks', { $count: 1 })
  const $mocks = model.scope('mocks')
  await model.subscribe($mockCount)
  const mockCount = $mockCount.getExtra()
  model.unsubscribe($mockCount)
  const addPromises = []
  if (mockCount < 10) {
    for(let i = 0; i < 10; i++) {
      const newItem = {}
      if(i === 0) {
        newItem.id = '8c53dc5f-b444-4555-b6be-148d98458855'
      }
      newItem.title = `Item Title ${i + 1}`
      newItem.restricted = false
      addPromises.push($mocks.add(newItem))
    }
  } else {
    const $mocksQuery = model.query('mocks', {})
    await $mocksQuery.fetch()
    const mocks = $mocksQuery.get()
    for(let i = 0; i < mocks.length; i++) {
      $mocks.at(mocks[i].id).set('restricted', false)
    }
  }
  await Promise.all(addPromises)
  model.close()
}
