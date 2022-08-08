let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 Manga • Manhwa 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ https://bacakomik.co
┃ ❖ https://boosei.com
┃ ❖ https://doujindesu.xxx
┃ ❖ https://kiryuu.co
┃ ❖ https://komikcast.com
┃ ❖ https://komiku.id
┃ ❖ https://komikid.com
┃ ❖ https://komikfox.web.id
┃ ❖ https://komikindo.co
┃ ❖ https://komikmama.net
┃ ❖ https://komikav.com
┃ ❖ https://klikmanga.com
┃ ❖ https://maid.my.id
┃ ❖ https://mangatx.com
┃ ❖ https://mangadex.org
┃ ❖ https://mangaku.pro
┃ ❖ https://mangakita.net
┃ ❖ https://mangaindo.web.id
┃ ❖ https://mangaid.click
┃ ❖ https://matakomik.com
┃ ❖ https://mgkomik.my.id
┃ ❖ https://ngomik.net
┃ ❖ https://pojokmanga.com
┃ ❖ https://westmanga.info
┃ ❖ https://194.233.87.209
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['mangalink','manhwalink']
handler.tags = ['anime']
handler.command = /^ma(nga|nhwa)link$/i
handler.limit = true
handler.register = true
export default handler