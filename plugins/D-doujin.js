import fetch from 'akaneko'
let handler  = async (m, { conn, args }) => {
let url = await fetch.nsfw.doujin()
     conn.sendFile(m.chat, url, 'doujin.jpg', 'Nih Kak', m, false)
}
handler.help = ['doujin']
handler.tags = ['nsfw']
handler.command = /^doujin$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
