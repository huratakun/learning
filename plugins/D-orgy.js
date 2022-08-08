import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.orgy()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['orgy']
handler.tags = ['nsfw']
handler.command = /^(orgy)$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
