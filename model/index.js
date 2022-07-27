import TestThing from './TestThingModel'
import ServiceModel from './ServiceModel'
import UserModel from './UserModel'
import MockModel from './MockModel'

export default function (racer) {
  racer.orm('testThings.*', TestThing)
  racer.orm('service.*', ServiceModel)
  racer.orm('users.*', UserModel)
  racer.orm('mocks.*', MockModel)
}
