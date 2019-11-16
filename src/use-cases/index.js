import commentsDB from '../DB'
import makeAddComment from "./add-comment"

// console.log("----------------------------------------------------------------------------------------");
// console.log(commentsDB)
// console.log("----------------------------------------------------------------------------------------");

const addComment = makeAddComment(commentsDB)
const commentService = Object.freeze({
    addComment
})

export default commentService
export { addComment } 
