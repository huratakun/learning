import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/neko')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'sange kok ama kucing', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['nekonsfw']
handler.tags = ['dewasa']
handler.command = /^(nekonsfw)$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
