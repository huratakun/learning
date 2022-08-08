const isLinkTik = /tiktok.com/i // tambahin sendiri
const isLinkYt = /youtube.com|youtu.be/i // tambahin sendiri
const isLinkTel = /t.me/i // tambahin sendiri
const isLinkFb = /facebook.com|fb.me/i // tambahin sendiri
const isLinkIg = /instagram.com/i // tambahin sendiri
const isLinkHttp = /http|https/i // tambahin sendiri
const isLinkWa = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiLinkTik = isLinkTik.exec(m.text)
    const isAntiLinkYt = isLinkYt.exec(m.text)
    const isAntiLinkTel = isLinkTel.exec(m.text)
    const isAntiLinkFb = isLinkFb.exec(m.text)
    const isAntiLinkIg = isLinkIg.exec(m.text)
    const isAntiLinkHttp = isLinkHttp.exec(m.text)

    if (chat.antiLinkTik && isAntiLinkTik) {
        await conn.sendButton(m.chat, `*Link Tiktok Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinktik', '/disable antilinktik'], m)
        if (isBotAdmin && bot.restrict) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')    
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkYt && isAntiLinkYt) {
        await conn.sendButton(m.chat, `*Link Youtube Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkyt', '/disable antilinkyt'], m)
        if (isBotAdmin && bot.restrict) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')    
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkTel && isAntiLinkTel) {
        await conn.sendButton(m.chat, `*Link Telegram Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinktel', '/disable antilinktel'], m)
        if (isBotAdmin && bot.restrict) {
             await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')   
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkFb && isAntiLinkFb) {
        await conn.sendButton(m.chat, `*Link Facebook Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkfb', '/disable antilinkfb'], m)
        if (isBotAdmin && bot.restrict) {
             await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')    
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkIg && isAntiLinkIg) {
        await conn.sendButton(m.chat, `*Link Instagram Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkig', '/disable antilinkig'], m)
        if (isBotAdmin && bot.restrict) {
             await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')    
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkHttp && isAntiLinkHttp) {
        await conn.sendButton(m.chat, `*Link Http atau Https Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkhttp', '/disable antilinkhttp'], m)
        if (isBotAdmin && bot.restrict) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkWa && isAntiLinkWa) {
        await conn.sendButton(m.chat, `*Link Whatsapp Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkwa', '/disable antilinkwa'], m)
        if (isBotAdmin && bot.restrict) {
             await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')    
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    return !0
}