import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.zettaiRyouiki()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['zy']
handler.tags = ['nsfw']
handler.command = /^(zy)$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
