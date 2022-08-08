import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  let res = await fetch('https://raw.githubusercontent.com/MangDTech/project-resources/main/asupan-eunicetjoaa.json')
  if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  let url = json[Math.floor(Math.random() * json.length)]
  await conn.sendFile(m.chat, await (await fetch(url)).buffer(), m)
}
handler.command = /^(asupan2)$/i
handler.tags = ['video']
handler.help = ['asupan2']
handler.limit = 1
handler.register = true
export default handler
