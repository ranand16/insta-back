export default function buildComment(){
    return function makeSource ({
        ip, 
        browser,
        referer
    } = {}){
        if(!ip){
            throw new Error('Comment must have an ip.')
        }
        return Object.freeze({
            getIp: ()=> ip,
            getBrowser: ()=>browser,
            getReferer: ()=>referer
        })
    }
}