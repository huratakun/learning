import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'gqr') {
if (!text) throw `Contoh:\n${usedPrefix + command} Teks`
let res = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, res, [
                ['Get Picture', `${usedPrefix}get ${res}`]
            ], m, fdoc)
}

if (command == 'catboys') {
if (args[0] == 'img') {
let f = await fetch(`https://api.catboys.com/img`)
let x = await f.json()
await conn.sendFile(m.chat, x.url, 'image.png', wm, m)
}
if (args[0] == '8ball') {
let f = await fetch(`https://api.catboys.com/8ball`)
let x = await f.json()
await conn.sendFile(m.chat, x.url, 'image.png', wm, m)
}
if (args[0] == 'dice') {
let f = await fetch(`https://api.catboys.com/dice`)
let x = await f.json()
await conn.sendFile(m.chat, x.url, 'image.png', wm, m)
}
if (args[0] == 'catboy') {
let f = await fetch(`https://api.catboys.com/catboy`)
let x = await f.json()
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${x.catboy}`, wm, null, [
                ['Awkawk', `${usedPrefix}tts ${x.catboy}`]
            ], m, fdoc)
}
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
${usedPrefix + command} img
${usedPrefix + command} 8ball
${usedPrefix + command} catboy
`, wm, null, [
                ['IMG', `${usedPrefix + command} img`],
                ['8BALL', `${usedPrefix + command} 8ball`]
            ], m, fdoc)
}

if (command == 'animals') {
let f = await fetch(`https://zoo-animal-api.herokuapp.com/animals/rand`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Name:* ${x.name}
*Latin:* ${x.latin_name}
*Type:* ${x.animal_type}
*Active Time:* ${x.active_time}
*Length Min.:* ${x.length_min}
*Length Max.:* ${x.length_max}
*Weight Min.:* ${x.weight_min}
*Weight Max.:* ${x.weight_max}
*Lifespan:* ${x.lifespan}
*Habitat:* ${x.habitat}
*Diet:* ${x.diet}
*Geo:* ${x.geo_range}
*ID:* ${x.id}
`, wm, x.image_link, [
                ['Get Picture', `${usedPrefix}get ${x.image_link}`]
            ], m, fdoc)
}

if (command == 'nekos') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} baka

*List:*
• kitsune
• neko
• waifu
• baka
• bite
• blush
• bored
• cry
• cuddle
• dance
• facepalm
• feed
• handhold
• happy
• highfive
• hug
• kick,kiss
• laugh
• pat
• poke
• pout
• punch
• shoot
• shrug
• slap
• sleep
• smile
• smug
• stare
• think
• thumbsup
• tickle
• wave
• wink
`

let f = await fetch(`https://nekos.best/api/v2/${args[0]}`)
let x = await f.json()
if (args[0] == 'neko') {
await conn.sendFile(m.chat, x.url, 'image.png', wm, m)
}
if (args[0] == 'waifu') {
await conn.sendFile(m.chat, x.url, 'image.png', wm, m)
}
if (args[0] == 'kitsune') {
await conn.sendFile(m.chat, x.url, 'image.png', wm, m)
}
await conn.sendFile(m.chat, x.url, 'out.gif', m, false, { mimetype: 'image/gif', thumbnail: Buffer.alloc(0) })
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, null, [
                ['Next Picture', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}

if (command == 'crafatar') {
if (!text) throw `Contoh:\n${usedPrefix + command} uuid\n*Cth:* ${usedPrefix + command} 853c80ef3c3749fdaa49938b674adae6`
let res = `https://crafatar.com/avatars/${text}`
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, res, [
                ['Get Picture', `${usedPrefix}get ${res}`]
            ], m, fdoc)
}

if (command == 'crafatar2') {
if (!text) throw `Contoh:\n${usedPrefix + command} uuid\n*Cth:* ${usedPrefix + command} 853c80ef3c3749fdaa49938b674adae6`
let res = `https://crafatar.com/renders/head/${text}`
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, res, [
                ['Get Picture', `${usedPrefix}get ${res}`]
            ], m, fdoc)
}

if (command == 'crafatar3') {
if (!text) throw `Contoh:\n${usedPrefix + command} uuid\n*Cth:* ${usedPrefix + command} 853c80ef3c3749fdaa49938b674adae6`
let res = `https://crafatar.com/renders/body/${text}`
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, res, [
                ['Get Picture', `${usedPrefix}get ${res}`]
            ], m, fdoc)
}

if (command == 'crafatar4') {
if (!text) throw `Contoh:\n${usedPrefix + command} uuid\n*Cth:* ${usedPrefix + command} 853c80ef3c3749fdaa49938b674adae6`
let res = `https://crafatar.com/skins/${text}`
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, res, [
                ['Get Picture', `${usedPrefix}get ${res}`]
            ], m, fdoc)
}

if (command == 'crafatar5') {
if (!text) throw `Contoh:\n${usedPrefix + command} uuid\n*Cth:* ${usedPrefix + command} 853c80ef3c3749fdaa49938b674adae6`
let res = `https://crafatar.com/capes/${text}`
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, res, [
                ['Get Picture', `${usedPrefix}get ${res}`]
            ], m, fdoc)
}

if (command == 'lmsea') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://google.com`
let res = await fetch(`https://imsea.herokuapp.com/api/1?q=${text}`)
let ran = res.results
await conn.sendButton(m.chat, `*Result:*
  ${res.image_name}`, wm, ran.getRandom(), [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'iqrax') {
		oh = `*Example:* ${usedPrefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
		if (!text) return m.reply(oh)
		yy = `https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`
		conn.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		
if (command == 'juzammax') {
if (args[0] === 'pdf') {
		m.reply('Wait')
		conn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply('Wait')
		conn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply('Wait')
		conn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply('Wait')
		conn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`What Format Do You Want? ? *Example:* ${usedPrefix + command} pdf

Available Formats: pdf, docx, pptx, xlsx`)
		}
		}
		
if (command == 'hadistx') {
		if (!args[0]) return m.reply(`*Example:*
${usedPrefix + command} bukhari 1
${usedPrefix + command} abu-daud 1

Options Available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return m.reply(`Which Hadith??\n\n*Example:*\n${usedPrefix + command} muslim 1`)
		try {
		let ft = await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let res = await ft.json()
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadith Not Found !`)
		}
		}
		
if (command == 'alquranx') {
		if (!args[0]) return m.reply(`*Usage Examples:*\n${usedPrefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		if (!args[1]) return m.reply(`*Usage Examples:*\n${usedPrefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		let fet = await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let res = await fet.json()
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		conn.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		
if (command == 'tafsirsurahx') {
		if (!args[0]) return m.reply(`*Usage Examples:*\n${usedPrefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		if (!args[1]) return m.reply(`*Usage Examples:*\n${usedPrefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		let fetc = await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let res = await fetc.json()
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		
if (command == 'character') {
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, type } = json.results[0]
let charaingfo = `💬 *Name:* ${name}
💭 *Nickname:* ${alternative_names}
🔗 *Link*: ${url}
👤 *Character Type*: ${type}`
await conn.sendButton(m.chat, charaingfo, wm, image_url, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
  // conn.sendFile(m.chat, image_url, '', charaingfo, m)
}

if (command == 'getsider') {
  if (!m.quoted) throw 'Reply pesan!'
  if (!m.quoted.fromMe) throw false
  if (!m.quoted.id) throw false
  let members = m.quoted.chat.endsWith('g.us') ? (await conn.groupMetadata(m.quoted.chat)).participants.length - 1 : m.quoted.chat.endsWith('@broadcast') ? -1 : 1
  let { reads, deliveries } = await conn.messageInfo(m.quoted.chat, m.quoted.id)
  let txt = `
*Read by:*
${reads.sort((a, b) => b.t - a.t).map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`).join('\n')}
${members > 1 ? `${members - reads.length} remaining` : ''}

*Delivered to:*
${deliveries.sort((a, b) => b.t - a.t).map(({ jid, t }) => `wa.me/${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`).join('\n')}
${members > 1 ? `${members - reads.length - deliveries.length} remaining` : ''}
`.trim()
  m.reply(txt, null, {
    contextInfo: {
      mentionedJid: conn.parseMention(txt)
    }
  })
}

}
handler.command = handler.help = ['gqr', 'catboys', 'animals', 'nekos', 'crafatar', 'crafatar2', 'crafatar3', 'crafatar4', 'crafatar5', 'lmsea', 'iqrax', 'juzammax', 'hadistx', 'alquranx', 'tafsirsurahx', 'character', 'getsider']
handler.tags = ['random']

export default handler

function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}

