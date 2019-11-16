import { addComment } from "../use-cases";
import makePostComment from "./post-comment";

// console.log("-------------------------------------in index of controllers---------------------------------------------------");
// console.log(addComment)
// console.log("----------------------------------------------------------------------------------------");
// console.log("----------------------------------------------------------------------------------------");
// console.log(makePostComment);
// console.log("----------------------------------------------------------------------------------------");

const postComment = makePostComment(addComment)
export {
    postComment
}