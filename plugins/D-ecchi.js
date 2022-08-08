import axios from 'axios'
import fetch from 'node-fetch'
import neko from 'nekos.life' 
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
     json = (await axios.get('https://meme-api.herokuapp.com/gimme/ecchi')).data
   conn.sendFile(m.chat, json.url, 'ecchi.jpg', json.title, m, false)
}
handler.help = ['ecchi']
handler.tags = ['nsfw']
handler.command = /^ecchi$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
