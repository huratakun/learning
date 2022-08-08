import fetch from 'akaneko'
let handler  = async (m, { conn, args }) => {
let url = await fetch.nsfw.maid()
     conn.sendFile(m.chat, url, 'maid.jpg', 'Nih Kak', m, false)
}
handler.help = ['maid']
handler.tags = ['nsfw']
handler.command = /^maid$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
