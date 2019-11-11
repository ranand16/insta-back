import { addComment } from "../use-cases";
import makePostComment from "./post-comment";

const postComment = makePostComment({ addComment })
export {
    postComment
}