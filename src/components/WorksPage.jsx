import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const works = [
  {
    id: 'emotion-poster',
    no: '01',
    title: '儿童情绪管理知识海报',
    type: '知识海报',
    desc: '把孩子情绪问题做成家长能看懂的图文表达。',
  },
  {
    id: 'parent-child-reading',
    no: '02',
    title: '亲子阅读的 5 个小方法',
    type: '短视频 / 图文',
    desc: '把亲子共读拆成可执行的小动作。',
  },
  {
    id: 'caterpillar-course',
    no: '03',
    title: '绘本课程设计《好饿的毛毛虫》',
    type: '绘本课程',
    desc: '从一本绘本出发，设计观察、提问、表达和创作活动。',
  },
  {
    id: 'bloom-taxonomy',
    no: '04',
    title: '布鲁姆学习层次图解',
    type: '知识清单图',
    desc: '把“懂了”拆成记忆、理解、应用、分析、评价、创造。',
  },
  {
    id: 'family-communication-card',
    no: '05',
    title: '家庭教育沟通卡片',
    type: '沟通工具',
    desc: '把家长的焦虑语言，转化成孩子更能接受的表达。',
  },
  {
    id: 'ai-learning-tool',
    no: '06',
    title: 'AI辅助儿童学习工具原型',
    type: '网页小工具',
    desc: '用 AI 和网页工具辅助孩子观察、表达和提问。',
  },
  {
    id: 'child-observation-form',
    no: '07',
    title: '0-7岁儿童观察记录表',
    type: '观察表',
    desc: '帮助家长记录孩子的情绪、语言、动作和学习表现。',
  },
  {
    id: 'picturebook-question-generator',
    no: '08',
    title: '绘本提问卡生成器',
    type: 'AI工具原型',
    desc: '根据绘本内容生成亲子共读提问卡。',
  },
]

const formats = [
  ['graphic-text', '图文'],
  ['short-video', '短视频'],
  ['course', '课程'],
  ['poster', '海报'],
  ['checklist', '清单图'],
  ['web-tool', '网页小工具'],
  ['talk-script', '口播稿'],
  ['wechat-article', '公众号文章'],
  ['parent-child-activity', '亲子活动'],
  ['observation-form', '观察记录表'],
]

const keywords = [
  ['child-education', '儿童教育'],
  ['picturebook-deep-reading', '绘本深读'],
  ['family-education', '家庭教育'],
  ['ai-education', 'AI教育'],
  ['content-expression', '内容表达'],
  ['child-psychology', '儿童心理学'],
  ['zero-seven-growth', '0-7岁成长'],
  ['critical-thinking', '批判性思维'],
  ['parent-child-reading', '亲子共读'],
  ['course-design', '课程设计'],
]

const workflow = [
  ['learn-topic', '学习一个知识点'],
  ['structured-notes', '拆成结构化笔记'],
  ['short-video-script', '写成短视频口播'],
  ['graphic-poster', '做成图文/海报'],
  ['course-section', '设计课程小节'],
  ['web-mini-tool', '做成网页小工具'],
  ['publish-review', '发布与复盘'],
]

const summaryTags = ['能看见', '能操作', '能表达', '能复盘', '能成长']

export default function WorksPage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="works-page space-y-2.5"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
    >
      <section className="works-title-card">
        <img alt="" className="works-deco works-deco-star" src="/assets/star.png" />
        <img alt="" className="works-deco works-deco-tape" src="/assets/tape.png" />
        <img alt="" className="works-deco works-deco-heart" src="/assets/heart.png" />
        <h2>这是我持续在做的作品方向</h2>
        <p>我会把一个教育知识点，拆成图文、短视频、课程、海报、清单图和网页小工具。</p>
      </section>

      <section className="works-card">
        <div className="works-heading">
          <span>★</span>
          <h3>作品预览墙</h3>
        </div>
        <div className="work-gallery">
          {works.map((item, index) => (
            <Link className={`portfolio-card portfolio-card-${(index % 6) + 1}`} key={item.id} to={`/detail/work/${item.id}`}>
              <span className="portfolio-no">{item.no}</span>
              <div className="portfolio-thumb">
                <span className={`portfolio-art portfolio-art-${index + 1}`} />
              </div>
              <b>{item.title}</b>
              <em>{item.type}</em>
              <p>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <TagSection
        badge="形"
        items={formats}
        title="我会把一个知识点做成这些形式"
        type="work-format"
      />

      <TagSection
        badge="词"
        items={keywords}
        title="我的作品关键词"
        type="work-keyword"
      />

      <section className="works-card works-flow-card">
        <img alt="" className="works-deco works-deco-pencil" src="/assets/pencil.png" />
        <img alt="" className="works-deco works-deco-book" src="/assets/book.png" />
        <div className="works-heading">
          <span>→</span>
          <h3>作品生产流程</h3>
        </div>
        <div className="works-workflow">
          {workflow.map(([id, label], index) => (
            <Link className={`works-flow-note works-flow-note-${(index % 6) + 1}`} key={id} to={`/detail/work/${id}`}>
              {label}
              {index < workflow.length - 1 && <span>→</span>}
            </Link>
          ))}
        </div>
      </section>

      <section className="works-summary-card">
        <img alt="" className="works-deco works-summary-tape" src="/assets/tape.png" />
        <img alt="" className="works-deco works-summary-heart" src="/assets/heart.png" />
        <h3>我不想只讲教育理念</h3>
        <p>我更想把教育理念做成孩子真的能体验到的东西：一张图、一节课、一个问题、一张提问卡、一个小游戏、一个可以打开使用的网页工具。</p>
        <div>
          {summaryTags.map((tag, index) => (
            <span className={`works-summary-tag works-summary-tag-${(index % 5) + 1}`} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>
    </motion.section>
  )
}

function TagSection({ badge, title, items }) {
  return (
    <section className="works-card">
      <div className="works-heading">
        <span>{badge}</span>
        <h3>{title}</h3>
      </div>
      <div className="works-tag-wall">
        {items.map(([id, label], index) => (
          <span className={`works-tag works-tag-${(index % 6) + 1} rotate-${(index % 5) + 1}`} key={id}>
            {label}
          </span>
        ))}
      </div>
    </section>
  )
}
