import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  let res = await fetch('https://raw.githubusercontent.com/MangDTech/project-resources/main/pentol.json')
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  let url = json[Math.floor(Math.random() * json.length)]
  await conn.sendFile(m.chat, await (await fetch(url)).buffer(), m)
}
handler.command = /^(pentol)$/i
handler.tags = ['anime']
handler.help = ['pentol']
handler.limit = true
handler.register = true
export default handler