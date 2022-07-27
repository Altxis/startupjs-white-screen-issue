import { BaseModel as StartupBaseModel } from 'startupjs/orm'

export default class BaseModel extends StartupBaseModel {
  static access = {
    create: async (model, collection, docId, doc, session) => {
      return true
    },
    read: async (model, collection, docId, doc, session) => {
      return true
    },
    update: async (model, collection, docId, oldDoc, session, ops, newDoc) => {
      return true
    },
    delete: async (model, collection, docId, doc, session) => {
      return true
    }
  }
}