import fetch from 'node-fetch'
let handler  = async (m, { conn, args }) => {
heum = await require('node-fetch')('https://raw.githubusercontent.com/MangDTech/project-resources/main/nsfwloli.json').then(v => v.json())
conn.sendFile(m.chat, heum[Math.floor(Math.random() * heum.length)], 'Server Error!', 'Nih', m, false)
}
handler.help = ['nsfwloli']
handler.tags = ['nsfw']
handler.command = /^nsfwloli$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
