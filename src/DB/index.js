import mongodb from 'mongodb'
import makeCommentsDB from './commentsDB'

const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'dm_comments_api'
const client = new MongoClient(url, { useNewUrlParser: true })

export async function makeDb () {
    if (!client.isConnected()) {
      await client.connect()
    }
    return client.db(dbName)
}

const commentsDB = makeCommentsDB({ makeDb })
export default commentsDB