export default function buildComment({ Id, makeSource }){
    return function makeComment({
        author,
        userId,
        id = Id.makeId(),
        createdOn = Date.now(),
        source,
        modifiedAt = Date.now(),
        postId,
        published = false,
        replyId,
        text
    }={}){
        if(!Id.isValidId(id)){
            throw new Error('Comment must have a valid Id.');
        }
        if(!author || author.length>1){
            throw new Error('Comment must have a author.');
        }
        if(!text || text.length<1){
            throw new Error('Comment cannot have a empty text.');
        }
        if(!userId || Id.isValidId(userId)){
            throw new Error('Comment must have a user id.');
        }
        if(!source){
            throw new Error('Comment must have a source.');
        }
        if(!postId && Id.isValidId(postId)){
            throw new Error('Comment must have a post id.');
        }
        const validSource = makeSource(source);
        const deletedComment = ".xX This comment is deleted Xx."
        return Object.freeze({
            getAuthor: ()=>{author, userId},
            getId: ()=>id,
            getCreatedOn: ()=>createdOn,
            getSource: ()=>validSource,
            getModifiedAt: ()=>modifiedAt,
            getPostId: ()=>postId,
            isPublished: ()=>published,
            getReplyId: ()=>replyId,
            getText: ()=>text,
            isDeleted: ()=>(text === deletedComment)?true:false,
            markDeleted: ()=>{
                author = 'deleted'
                userId = 'deleted'
                text = deletedComment
            },
            publish: ()=>{
                published = true
            },
            unPublish: ()=>{
                published = false
            }
        })
    }
} 