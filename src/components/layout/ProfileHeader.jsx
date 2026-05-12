import { Link } from 'react-router-dom'
import { profileStats } from '../../data/pages'
import AvatarSticker from '../stickers/AvatarSticker'
import DoodleHero from '../stickers/DoodleHero'

export default function ProfileHeader() {
  return (
    <header className="profile-header relative shrink-0 px-4 pt-1">
      <DoodleHero />

      <div className="profile-row relative -mt-10 grid grid-cols-[104px_1fr] gap-3">
        <AvatarSticker />
        <div className="pt-[58px]">
          <div className="flex items-center gap-2">
            <h1 className="profile-name text-[38px] font-bold leading-none">大梦</h1>
            <span className="verified-badge">✓</span>
          </div>
          <p className="mt-1 text-[17px] font-semibold text-[#477a52]">@damengedu</p>
        </div>
      </div>

      <Link className="follow-button absolute right-5 top-[146px]" to="/contact">
        关注联系我
      </Link>

      <p className="profile-bio mt-3 text-[16px] leading-7">
        AI儿童教育实践者 · 内容课程设计者 · 从商业运营转向教育实践
        <br />
        专注 0-7 岁儿童成长、家庭教育、绘本课程与儿童表达
      </p>

      <div className="profile-stats mt-2 flex items-center gap-3 text-[16px]">
        <span className="book-icon" />
        {profileStats.map((stat) => (
          <span className="whitespace-nowrap" key={stat.label}>
            {stat.label} <b className="text-[#2167d8] underline decoration-2 underline-offset-4">{stat.value}</b>
          </span>
        ))}
      </div>
    </header>
  )
}
