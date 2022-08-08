import fetch from 'node-fetch'
import foxGirl from 'nekos.life'
let neko = new foxGirl()
let handler = async (m, { conn, args }) => {
    let foxGirl = await neko.sfw.foxGirl()
          conn.sendFile(m.chat, foxGirl.url, 'foxGirl.jpg', 'Nih Kak', m, false)
}
handler.help = ['foxgirl']
handler.tags = ['anime']
handler.command = /^foxgirl$/i
handler.limit = true
handler.register = true
export default handler