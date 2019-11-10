import commentsDB from '../DB'
import makeAddComment from "./add-comment"

const addComment = makeAddComment({ commentsDB })
const commentService = Object.freeze({
    addComment
})

export default commentService
export { addComment } 
