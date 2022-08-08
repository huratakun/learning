import fetch from 'node-fetch'
import gecg from 'nekos.life'
let neko = new gecg()
let handler = async (m, { conn, args }) => {
    let gecg = await neko.sfw.gecg()
          conn.sendFile(m.chat, gecg.url, 'gecg.jpg', 'Nih Kak', m, false)
}
handler.help = ['gecg']
handler.tags = ['anime']
handler.command = /^(gecg)$/i
handler.limit = true
handler.register = true
export default handler
