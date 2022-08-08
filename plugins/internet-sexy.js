import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/sexy")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*Cuci Mata*", author, url, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['sexy']
handler.tags = ['internet']
handler.command = /^(sexy)$/i
handler.limit = true
handler.private = true
export default handler
