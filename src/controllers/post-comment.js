export default function makePostComment({ addComment }){
    return async function postComment(req){
        try {
            const { source={}, ...commentInfo } = req.body
            source.ip = req.ip
            source.browser = req.headers["User-Agent"]
            source.referer = req.headers["Referer"]?req.headers["Referer"]:null
            const posted = await addComment({
                ...commentInfo,
                source
            })
            return {
                headers:{
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(posted.modified)
                },
                statusCode: 201,
                body: { posted }
            }
        } catch(e) {
            console.log(e);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                body: { error: e.message }
            }
        }
    }
}