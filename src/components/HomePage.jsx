import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AvatarSticker from './stickers/AvatarSticker'

const skillTags = [
  '课程讲解',
  '课程设计',
  '内容策划',
  '短视频表达',
  '公众号运营',
  '直播运营',
  '电商起盘',
  '客户管理',
  'AI辅助教育工具',
]

const toolTags = [
  'ChatGPT',
  'Claude',
  'Grok',
  'DeepSeek',
  '剪映',
  'Canva',
  'Obsidian',
  'GitHub Pages',
  'HTML',
  'CSS',
  'JavaScript',
  'WPS/Office',
  '公众号后台',
  'GPT-Image',
]

const works = [
  '儿童情绪管理 知识海报',
  '亲子阅读的 5 个小方法',
  '绘本课程设计《好饿的毛毛虫》',
]

const solutions = [
  {
    id: 'education-theory-translation',
    label: '教育理论转化',
    title: '把复杂教育理论转成家长能理解的内容',
    desc: '把儿童心理学、学前教育、家庭教育、布鲁姆分类学、PBL项目式学习等知识，转化为家长能看懂、能使用、能传播的图文、短视频脚本和课程小节。',
    fit: '教育内容策划 / 家庭教育内容编辑 / 短视频脚本策划',
  },
  {
    id: 'picturebook-course-design',
    label: '绘本课程设计',
    title: '把绘本转化为儿童学习活动',
    desc: '围绕一本绘本设计亲子共读提问、观察任务、表达活动、批判性思维问题、学习单和课程流程。',
    fit: '绘本课程设计 / 亲子阅读内容策划 / 儿童学习活动设计',
  },
  {
    id: 'family-education-content',
    label: '家庭教育内容',
    title: '把家庭教育问题拆成可操作的方法',
    desc: '围绕陪作业冲突、亲子沟通、孩子说“我懂了”、孩子学习卡点、家长焦虑等真实家庭场景，设计图文内容、视频口播、家长引导语和行动建议。',
    fit: '家庭教育内容策划 / 家长课堂内容设计 / 教育账号内容运营',
  },
  {
    id: 'education-short-video',
    label: '教育短视频内容',
    title: '把知识点做成短视频脚本和系列内容',
    desc: '将一个教育知识点拆成标题、封面文案、口播稿、分镜、图文卡片、平台正文和标签，适配小红书、视频号、抖音等平台。',
    fit: '教育短视频脚本策划 / 小红书教育内容策划 / 视频号教育内容策划',
  },
  {
    id: 'ai-education-tool-practice',
    label: 'AI教育工具实践',
    title: '用 AI 辅助教育内容和学习工具设计',
    desc: '使用 AI 辅助完成绘本提问器、儿童观察表、学习单、课程脚本、知识卡片、视频脚本和网页原型设计。',
    fit: 'AI教育内容设计 / 教育产品内容策划 / 学习工具设计',
  },
]

export default function HomePage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="home-feed space-y-2.5"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
    >
      <PinnedIntroCard />
      <SolutionsSection />
      <TagFeedCard
        detailId="skills"
        meta="3天前"
        title="我目前重点在做这些方向"
        tags={skillTags}
      />
      <TagFeedCard
        detailId="tools"
        meta="3天前"
        title="这些是我常用的工具"
        tags={toolTags}
      />
      <WorksFeedCard />
    </motion.section>
  )
}

function FeedCard({ children, detailId, className = '' }) {
  return (
    <Link className={`feed-card block ${className}`} to={`/detail/home/${detailId}`}>
      {children}
      <div className="feed-detail">查看详情 &gt;</div>
    </Link>
  )
}

function FeedHeader({ meta = '5天前' }) {
  return (
    <div className="feed-header">
      <div className="mini-avatar">
        <AvatarSticker />
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <b className="text-[17px]">大梦</b>
          <span className="text-[13px] text-[#5c7a5e]">@damengedu</span>
          <span className="text-[13px] text-gray-500">· {meta}</span>
        </div>
      </div>
    </div>
  )
}

function PinnedIntroCard() {
  const timeline = [
    '2015-2019 互联网+电商',
    '2019-2023 直播运营操盘',
    '2023-2025 传统文化导师',
    '2025-至今 AI+儿童教育',
  ]

  return (
    <FeedCard className="pinned-card" detailId="intro">
      <span className="tape tape-purple absolute right-12 top-48" />
      <span className="tape tape-pink absolute left-3 top-2" />
      <span className="sticker sticker-heart absolute right-6 top-8" />
      <FeedHeader />
      <span className="pin-label">置顶</span>
      <p className="feed-copy mt-2">
        你好，我是大梦。
        <br />
        我做过互联网、电商、直播运营、传统文化课程与客户管理。
        <br />
        现在正在把过去十年的内容表达、商业运营和AI工具能力，
        <br />
        重新组合到儿童教育方向里。
        <br />
        比起只说给大人听，我更重视把知识做成内容、课程、图文、
        <br />
        视频和真正能落地的学习工具。
      </p>
      <div className="experience-note">
        <span className="experience-title">我的经历</span>
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {timeline.map((item, index) => (
            <span className="timeline-item" key={item}>
              <i className={`dot dot-${index + 1}`} />
              {item}
            </span>
          ))}
        </div>
      </div>
      <FeedStats comments="23" reposts="15" likes="198" views="4.2K" />
    </FeedCard>
  )
}

function SolutionsSection() {
  return (
    <section className="solution-section">
      <img alt="" className="solution-deco solution-deco-star" src="/assets/star.png" />
      <img alt="" className="solution-deco solution-deco-tape" src="/assets/tape.png" />
      <div className="solution-section-head">
        <h2>我能解决什么问题</h2>
        <p>我把儿童教育知识转化成家长能理解、孩子能参与、平台能传播的内容、课程和工具。</p>
      </div>
      <div className="solution-grid">
        {solutions.map((item, index) => (
          <Link className={`solution-card solution-card-${(index % 5) + 1}`} key={item.id} to={`/detail/solution/${item.id}`}>
            <span>{item.label}</span>
            <b>{item.title}</b>
            <p>{item.desc}</p>
            <em>适合：{item.fit}</em>
          </Link>
        ))}
      </div>
    </section>
  )
}

function TagFeedCard({ detailId, meta, title, tags }) {
  return (
    <FeedCard detailId={detailId}>
      <span className="sticker sticker-lightning absolute -left-1 bottom-8" />
      <span className="mini-sparkle absolute right-7 top-5" />
      <FeedHeader meta={meta} />
      <h2 className="feed-title">{title}</h2>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {tags.map((tag, index) => (
          <span className={`feed-tag feed-tag-${(index % 6) + 1}`} key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <FeedStats comments="12" reposts="11" likes={detailId === 'tools' ? '128' : '142'} views={detailId === 'tools' ? '2.4K' : '3.1K'} />
    </FeedCard>
  )
}

function WorksFeedCard() {
  return (
    <FeedCard detailId="works">
      <span className="sticker sticker-star absolute -left-1 top-3" />
      <span className="sticker sticker-heart absolute right-4 top-5" />
      <FeedHeader meta="2天前" />
      <h2 className="feed-title">这是我最近在持续做的内容方向</h2>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {works.map((work, index) => (
          <div className={`work-mini work-mini-${index + 1}`} key={work}>
            <span className="work-tape" />
            <div className="work-illustration">
              <span className={`work-art work-art-${index + 1}`} />
            </div>
            <p>{work}</p>
          </div>
        ))}
      </div>
      <FeedStats comments="14" reposts="9" likes="128" views="2.4K" />
    </FeedCard>
  )
}

function FeedStats({ comments, reposts, likes, views }) {
  return (
    <div className="feed-stats">
      <span>♡ {comments}</span>
      <span>↻ {reposts}</span>
      <span className="text-[#e85d8c]">♥ {likes}</span>
      <span>▥ {views}</span>
      <span>⌑</span>
      <span>↗</span>
    </div>
  )
}
