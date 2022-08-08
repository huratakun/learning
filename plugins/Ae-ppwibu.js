import fetch from 'node-fetch'
import avatar from 'nekos.life'
let neko = new avatar()
     let handler  = async (m, { conn, args }) => {
    let avatar = await neko.sfw.avatar()
   conn.sendFile(m.chat, avatar.url, 'avatar.jpg', 'ppnya kak', m, false)
}
handler.help = ['ppwibu']
handler.tags = ['anime']
handler.command = /^ppwibu$/i
handler.limit = 1
handler.register = true
export default handler