import Id from '../Id'
export default function makeCommentsDB ({ makeDB }){
    async function insert({ id: _id = Id.makeId(), ...commentInfo }){
        const db = await makeDB()
        const result = await db.collection.insertOne({
            _id, ...commentInfo
        })
        const { _id: id, ...commentInfo } = result.ops[0]
        return { id, ...commentInfo } 
    }
    return Object.freeze({
        insert
    })
}