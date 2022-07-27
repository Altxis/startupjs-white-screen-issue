import BaseModel from './BaseModel'

export default class MockModel extends BaseModel {
  static access = {
    create: async (model, collection, docId, doc, session) => {
      return true
    },
    read: async (model, collection, docId, doc, session) => {
      return !doc.restricted
    },
    update: async (model, collection, docId, oldDoc, session, ops, newDoc) => {
      return true
    },
    delete: async (model, collection, docId, doc, session) => {
      return true
    }
  }
}