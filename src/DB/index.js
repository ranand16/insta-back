import mongodb from 'mongodb'
import makeCommentsDB from './commentsDB'

const MongoClient = mongodb.MongoClient
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'dm_comments_api'
const client = new MongoClient(url, { useNewUrlParser: true })

export async function makeDb () {
    if (!client.isConnected()) {
      await client.connect()
    }
    // console.log("----------------------------------------------------------------------------------------");
    // console.log(client.db(dbName));
    // console.log("----------------------------------------------------------------------------------------");
    return client.db(dbName)
}

const commentsDB = makeCommentsDB({ makeDb })
export default commentsDB