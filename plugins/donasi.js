let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *Three:* [${global.ppulsa}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Ovo:* [${global.povo}]
│ • *Gopay:* [${global.pgopay}]
│ • *Dana:* [${global.pdana}]
❏────
`
const templateButtons = [   
    {index: 1, urlButton: {displayText: '🌎 Official Group', url: sgc}},
    {index: 2, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 3, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
