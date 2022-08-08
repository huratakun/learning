import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.neko()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['neko2']
handler.tags = ['nsfw']
handler.command = /^(neko2)$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
