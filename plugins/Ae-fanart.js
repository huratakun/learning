import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/art?apikey=SGWN'
	conn.sendButton(m.chat, 'Anime FanArt ', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(fanart)$/i
handler.tags = ['anime']
handler.help = ['fanart']
handler.register = true
handler.premium = true
export default handler
