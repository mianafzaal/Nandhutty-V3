const fetch = require('node-fetch')
let handler = async(m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. where is the url?\n\nexample:\n${usedPrefix + command} https://www.facebook.com/alanwalkermusic/videos/277641643524720`
  if (/^https?:\/\/.*(fb.watch|facebook.com)/i.test(m.text)) throw `wrong url`

  let res = await fetch(API('neoxr', '/api/download/fb', { url: args[0] }, 'apikey'))
  if (!res.ok) throws error
  let json = await res.json()
  if (!json.status) throw json
  await m.reply(wait)
  await conn.sendFile(m.chat, json.data.sd.url, '', `HD: ${json.data.hd.url}\nSize: ${json.data.hd.size}\n\n © ɴᴀɴᴅʜᴜᴛᴛʏ ᴠ3`, m)
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i

handler.limit = true

module.exports = handler
