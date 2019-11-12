import buildComment from './comment'
import Id from '../Id'
import buildMakeSource from './source'

const makeSource = buildMakeSource()
const makeComment = buildComment({ Id, makeSource })

export default makeComment