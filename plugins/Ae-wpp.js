import fetch from 'node-fetch'
import wallpaper from 'nekos.life'
let neko = new wallpaper()
let handler = async (m, { conn, args }) => {
    let wallpaper = await neko.sfw.wallpaper()
          conn.sendFile(m.chat, wallpaper.url, 'wallpaper.jpg', 'Nih Kak', m, false)
}
handler.help = ['wpp']
handler.tags = ['anime']
handler.command = /^wpp$/i
handler.limit = true
handler.register = true
export default handler