const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_38_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNixcbiAgICAgICAgMTUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDQxLFxuICAgICAgICA5LFxuICAgICAgICAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0LFxuICAgICAgICA1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM4LFxuICAgICAgICA3NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU0LFxuICAgICAgICA5MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTU3LFxuICAgICAgICAzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE5LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNixcbiAgICAgICAgNzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwLFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUjFibkFXbDVwNlJsVmh1RmQ0TjZqdU85aVhUTnNoRGRXNVQ1aVVQMklOST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia3lLNHdyQmxRTGFYSEpIbDNRY2VvUVwiLFxuICBcInBob25lSWRcIjogXCI3ZmNlNzc5NS0xOTcwLTQwMzAtOTliZC00NjhmNjMyNTdhYmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAxLFxuICAgICAgNTksXG4gICAgICAxMCxcbiAgICAgIDE5MCxcbiAgICAgIDE2NixcbiAgICAgIDk1LFxuICAgICAgNTEsXG4gICAgICA3MixcbiAgICAgIDIzMyxcbiAgICAgIDIxMCxcbiAgICAgIDczLFxuICAgICAgMjMzLFxuICAgICAgNTUsXG4gICAgICAxOTksXG4gICAgICAxNTgsXG4gICAgICAxOTIsXG4gICAgICAyMTgsXG4gICAgICA1NCxcbiAgICAgIDE2MSxcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDE0NixcbiAgICAgIDE4MCxcbiAgICAgIDEyMixcbiAgICAgIDExOCxcbiAgICAgIDEwLFxuICAgICAgMTEsXG4gICAgICAxNTMsXG4gICAgICAyMDcsXG4gICAgICAxMzgsXG4gICAgICAxMTQsXG4gICAgICAyNixcbiAgICAgIDM4LFxuICAgICAgMjQ2LFxuICAgICAgNTksXG4gICAgICAyMjMsXG4gICAgICAxNzksXG4gICAgICAxNjEsXG4gICAgICA2MixcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLNVlMS0xLWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE1MjM4NzIwNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDM2NjgwNzg2MjA4NTg6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZWVvcjhGRU9iTG1iVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5HQ2R3YkJyQ3crV09Mc1RxWkppc003TWRGMTVEU0RtQWJ3aXYyUGdxR289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNXk1Qmg1eGhCL2NhQkZxaS84bG9SbE1kVHU2dnlEM1BQcHJRMitXa0ZoMFNBVXB1SVFJa2diZkM1MURhT1JmZmg1eVJoa04wM1QwRkFUa3dRTEJBQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWo4eGhGZktmVlBaT1ZlWTVYS1Jza21iYmc1QTdzNEdOSHdxV1JoUk5yMzd2c0lGVHhuTXJVNGhpcjRtcjZLYnVaMEpVWjQvalQ1ZDVTOFJLaUlXakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1MjM4NzIwNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxODEwOThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
