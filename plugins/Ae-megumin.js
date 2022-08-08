import fetch from 'node-fetch'
let handler = async(m, {conn, text}) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  await conn.sendFile(m.chat, await (await fetch(json.url)).buffer(), m)
}
handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i
handler.limit = true
handler.register = true
export default handler
