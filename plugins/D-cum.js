import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.cum()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['cum']
handler.tags = ['nsfw']
handler.command = /^(cum)$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
