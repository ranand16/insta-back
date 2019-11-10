import makeComment from '../comment'
export default function makeAddComment({ commentDB }){
    return function addcomment(commentInfo){
        const comment = makeComment(commentInfo)
        commentDB.insert({
            author: comment.getAuthor().author,
            userId: comment.getAuthor().userId,
            id: comment.getId(),
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