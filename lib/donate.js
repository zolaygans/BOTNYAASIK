exports.donate = (id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *DONASI KE ${A187}*
╠════════════════════
║╭──❉ *DONASI BOS* ❉──
║│➸ *PULSA*: _0819-9997-1634_
║╰───────────
╠════════════════════
║  *${A187}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│➸ *Group WhatsApp*
║│ _${groupwhatsapp}_
║│➸ *YouTube <subscribe>*
║│ _${youtube}_
║│➸ *Instagram <Follow>*
║│ _${instagram}_
║│➸ *Creator ${A187}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*POWERED BY ZOLAYBOT*_
╚════════════════════`
}
