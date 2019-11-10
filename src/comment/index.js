import buildComment from './comment'
import Id from '../Id'

const makeSource = buildSource()
const makeComment = buildComment({ Id, makeSource })

export default makeComment