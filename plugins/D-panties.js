import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.pantsu()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['panties']
handler.tags = ['nsfw']
handler.command = /^(panties)$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
