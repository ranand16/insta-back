import makeComment from '../comment'
export default function makeAddComment(commentDB){
    return async function addComment(commentInfo){
        const comment = makeComment(commentInfo)
        // console.log("------------------in add-comment----------------------------------------------------------------------");
        // console.log(comment)
        // console.log("----------------------------------------------------------------------------------------");
        // console.log("----------------------------------------------------------------------------------------");
        // console.log(commentDB)
        // console.log("----------------------------------------------------------------------------------------");
        return commentDB.insert({
            id: comment.getId(),
            author: comment.getAuthor(),
            userId: comment.getUserId(),
            createdOn: comment.getCreatedOn(),
            source: comment.getSource(),
            modifiedAt: comment.getModifiedAt(),
            postId: comment.getPostId(),
            published: comment.isPublished(),
            replyId: comment.getReplyId(),
            text: comment.getText()
        }) 
    }
}