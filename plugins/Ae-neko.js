import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  await conn.sendFile(m.chat, await (await fetch(json.url)).buffer(), m)
}
handler.help = ['neko']
handler.tags = ['anime']
handler.limit = true
handler.register = true
handler.command = /^neko$/i
export default handler
