import hmtai from 'hmtai'
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.uniform()
await conn.sendFile(m.chat, img, '', '', m)}
handler.help = ['uniform']
handler.tags = ['nsfw']
handler.command = /^(uniform)$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
