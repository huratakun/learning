let handler = async(m, { conn, text, usedPrefix, command }) => {
        let res = `https://api-xcoders.xyz/api/random/gore?apikey=xcoders`
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['🔄 Next 🔄', `/${command}`]], m)
}
handler.help = ['gore']
handler.tags = ['fun']
handler.command = /^(gore)$/i
handler.limit = true
handler.private = true
export default handler
