import { useState } from 'react'

export default function AvatarSticker() {
  const [showFallback, setShowFallback] = useState(false)

  return (
    <div className="avatar-sticker" data-asset="avatar">
      {!showFallback && (
        <img
          alt="大梦头像"
          className="avatar-image"
          onError={() => setShowFallback(true)}
          src="/assets/avatar.png"
        />
      )}
      <div className={`avatar-face ${showFallback ? '' : 'is-hidden'}`}>
        <span className="hair" />
        <span className="face" />
        <span className="body" />
      </div>
    </div>
  )
}
