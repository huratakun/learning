import fetch from 'akaneko'
let handler  = async (m, { conn, args }) => {
let url = await fetch.nsfw.school()
     conn.sendFile(m.chat, url, 'school.jpg', 'Nih Kak', m, false)
}
handler.help = ['school']
handler.tags = ['nsfw']
handler.command = /^school$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
