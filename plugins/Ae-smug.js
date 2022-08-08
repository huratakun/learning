import fetch from 'node-fetch'
import smug from 'nekos.life'
let neko = new smug()
let handler = async (m, { conn, args }) => {
    let smug = await neko.sfw.smug()
    await conn.sendFile(m.chat, smug.url, 'smug.jpg', 'Nih Kak', m, false)
}
handler.help = ['smug']
handler.tags = ['anime']
handler.command = /^smug$/i
handler.limit = true
handler.register = true
export default handler
