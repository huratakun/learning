import fetch from 'akaneko'
let handler  = async (m, { conn, args }) => {
let url = await fetch.nsfw.hentai()
     conn.sendFile(m.chat, url, 'hentai.jpg', 'Nih Kak', m, false)
}
handler.help = ['hentai2']
handler.tags = ['nsfw']
handler.command = /^hentai2$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
