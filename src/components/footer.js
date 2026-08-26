import React, { useState } from 'react'

const textPreSiteName = `Welcome to my web site,`
const siteName = `🅑 🅔 🅝 🅦 🅘 🅛 🅔 🅨 . 🅞 🅡 🅖`
const textPostSiteName = `! Enjoy clicking the various ʜʏᴘᴇʀʟɪɴᴋs, learning about my different ᴘʀᴏᴊᴇᴄᴛs, and listening to the ᴍᴜsɪᴄ from the new game ꜰᴀsʜɪᴏɴ ꜰᴜᴘᴀ . If you have a qᴜᴇsᴛɪᴏɴ, don't hesitate to send an ᴇʟᴇᴄᴛʀᴏɴɪᴄ ᴍᴀɪʟ ! Happy web surfing.`

const Footer = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <marquee
      aria-label={`${textPreSiteName} ${siteName} ${textPostSiteName}`}
      style={{
        position: 'fixed',
        bottom: hidden ? -30 : 0,
        transition: 'bottom 1s',
        left: 0,
        right: 0,
        background: 'white',
        borderTop: '1px solid #ddd',
      }}
    >
      <span className="blink">
        <span>{textPreSiteName}</span>{' '}
        <span className="wavy-text">
          {[...siteName].map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </span>{' '}
        <span>{textPostSiteName}</span>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="clickable" onClick={() => setHidden(true)}>
        ɪ ᴅᴏɴ'ᴛ ᴡᴀɴᴛ ᴛᴏ sᴇᴇ ᴛʜɪs ᴀɴʏᴍᴏʀᴇ.
      </span>
    </marquee>
  )
}

export default Footer
