let handler = async (m, { conn }) => {
conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', wm, m)
}
handler.help = ['bkp']
handler.tags = ['nsfw']
handler.command = /^(bkp)$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
