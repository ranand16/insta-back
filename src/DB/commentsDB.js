import Id from '../Id'
export default function makeCommentsDB ({ makeDb }){
    async function insert({ id: _id = Id.makeId(), ...commentInfo }){
        const db = await makeDb()
        // console.log("----------------------------------------------------------------------------------------");
        // console.log(db)
        // console.log("----------------------------------------------------------------------------------------");
        const result = await db.collection('comments').insertOne({
            _id, ...commentInfo
        })
        const { _id: id, ...insertedInfo } = result.ops[0]
        return { id, ...insertedInfo } 
    }
    return Object.freeze({
        insert
    })
}