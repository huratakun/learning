import fetch from 'akaneko'
let handler  = async (m, { conn, args }) => {
let url = await fetch.nsfw.succubus()
     conn.sendFile(m.chat, url, 'succubus.jpg', 'Nih Kak', m, false)
}
handler.help = ['succubus']
handler.tags = ['nsfw']
handler.command = /^succubus$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
