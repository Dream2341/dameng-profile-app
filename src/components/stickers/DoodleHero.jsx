import { useState } from 'react'

const doodleAssets = {
  rainbow: '/assets/rainbow.png',
  cloudLeft: '/assets/cloud-left.png',
  cloudRight: '/assets/cloud-right.png',
  pencil: '/assets/pencil.png',
  book: '/assets/book.png',
  flower: '/assets/flower.png',
  star: '/assets/star.png',
  heart: '/assets/heart.png',
  tape: '/assets/tape.png',
}

export default function DoodleHero() {
  return (
    <div className="doodle-hero">
      <DoodleAsset asset="rainbow" className="rainbow" src={doodleAssets.rainbow} />
      <DoodleAsset asset="cloud-left" className="cloud cloud-left" src={doodleAssets.cloudLeft} />
      <DoodleAsset asset="cloud-right" className="cloud cloud-right" src={doodleAssets.cloudRight} />
      <DoodleAsset asset="star" className="star star-left" src={doodleAssets.star} />
      <DoodleAsset asset="star" className="star star-right" src={doodleAssets.star} />
      <DoodleAsset asset="pencil" className="pencil" src={doodleAssets.pencil} />
      <DoodleAsset asset="book" className="book" src={doodleAssets.book} />
      <DoodleAsset asset="flower" className="flower" src={doodleAssets.flower} />
      <DoodleAsset asset="heart" className="heart-doodle" src={doodleAssets.heart} />
      <DoodleAsset asset="tape" className="hero-tape" src={doodleAssets.tape} />
      <div className="hero-title">
        <span>在学习中建立</span>
        <span>教育框架 ♡</span>
      </div>
    </div>
  )
}

function DoodleAsset({ asset, className, src }) {
  const [showImage, setShowImage] = useState(true)

  return (
    <span className={`${className} doodle-asset ${showImage ? 'has-image' : ''}`} data-asset={asset}>
      {showImage && (
        <img
          alt=""
          className="doodle-asset-image"
          onError={() => setShowImage(false)}
          src={src}
        />
      )}
    </span>
  )
}
