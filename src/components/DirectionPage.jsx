import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const coreDirections = [
  {
    id: 'ai-child-education',
    no: '01',
    title: 'AI + 儿童教育',
    text: '让 AI 不只是生成内容，而是辅助孩子观察、表达、提问和创造。',
    tag: 'AI实践',
  },
  {
    id: 'picturebook-course',
    no: '02',
    title: '绘本课程设计',
    text: '从一本绘本出发，设计观察、提问、讨论、表达和创作活动。',
    tag: '绘本课程',
  },
  {
    id: 'family-education',
    no: '03',
    title: '家庭教育指导',
    text: '帮助家长理解孩子行为背后的心理、发展阶段和沟通需求。',
    tag: '家庭支持',
  },
  {
    id: 'child-learning-tools',
    no: '04',
    title: '儿童学习工具',
    text: '把教育知识做成孩子、家长和老师能实际使用的小工具。',
    tag: '工具产品',
  },
]

const stageOneTags = ['感知觉发展', '语言发展', '情绪管理', '动作发展', '游戏学习', '亲子关系', '绘本共读', '早期表达']
const stageTwoTags = ['学习动机', '表达能力', '批判性思维', '自我意识', '家庭沟通', '项目式学习', '兴趣探索', '数字工具使用']

const productDirections = [
  ['picturebook-question-card-generator', '绘本提问卡生成器', '帮助家长围绕绘本提出更好的问题。'],
  ['child-observation-tool', '儿童观察记录工具', '帮助家长记录孩子的情绪、语言、动作和学习表现。'],
  ['parent-child-reading-course', '亲子共读课程', '把绘本变成亲子互动和表达训练。'],
  ['child-expression-cards', '儿童表达力训练卡', '帮助孩子说出观察、感受、理由和想法。'],
  ['family-communication-script-library', '家庭沟通话术库', '把家长的焦虑语言转化为更有效的沟通方式。'],
  ['ai-child-learning-miniapp', 'AI儿童学习小程序', '把教育理念变成孩子可以互动体验的工具。'],
]

const loopNodes = [
  ['learn-theory', '学习教育理论'],
  ['knowledge-structure', '拆成知识结构'],
  ['content-output', '做成内容输出'],
  ['child-activity', '设计儿童活动'],
  ['ai-tool', '制作 AI 工具'],
  ['collect-feedback', '收集反馈'],
  ['iterate', '复盘迭代'],
]

const summaryTags = ['观察', '表达', '提问', '创造', '思考', '成长']

export default function DirectionPage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="direction-page space-y-2.5"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
    >
      <section className="direction-title-card">
        <img alt="" className="direction-deco direction-deco-star" src="/assets/star.png" />
        <img alt="" className="direction-deco direction-deco-heart" src="/assets/heart.png" />
        <img alt="" className="direction-deco direction-deco-tape" src="/assets/tape.png" />
        <img alt="" className="direction-deco direction-deco-book" src="/assets/book.png" />
        <h2>我正在走向的长期方向</h2>
        <p>我想做的不是简单的教育账号，而是把 AI、儿童教育、绘本课程、家庭指导和学习工具整合成长期实践。</p>
      </section>

      <section className="direction-card">
        <div className="direction-heading">
          <span>路</span>
          <h3>我的核心方向</h3>
        </div>
        <div className="core-direction-grid">
          {coreDirections.map((item, index) => (
            <Link className={`core-direction core-direction-${index + 1}`} key={item.id} to={`/detail/direction/${item.id}`}>
              <span>{item.no}</span>
              <b>{item.title}</b>
              <p>{item.text}</p>
              <em>{item.tag}</em>
            </Link>
          ))}
        </div>
      </section>

      <StageSection
        desc="这是我当前最重要的研究和实践阶段。这个阶段不是提前小学化，而是帮助孩子建立安全感、观察力、表达力、秩序感和探索兴趣。"
        items={stageOneTags}
        prefix="stage-0-7"
        title="第一阶段：0-7岁儿童成长"
      />

      <StageSection
        desc="这个阶段我会更关注孩子如何形成独立思考、主动学习和自我表达能力。"
        items={stageTwoTags}
        prefix="stage-8-15"
        title="第二阶段：8-15岁儿童与青少年观察"
      />

      <section className="direction-card">
        <div className="direction-heading">
          <span>作</span>
          <h3>我想做出的东西</h3>
        </div>
        <div className="direction-product-grid">
          {productDirections.map(([id, title, text], index) => (
            <Link className={`direction-product direction-product-${(index % 6) + 1}`} key={id} to={`/detail/direction/${id}`}>
              <b>{title}</b>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="direction-card direction-loop-card">
        <img alt="" className="direction-deco direction-deco-pencil" src="/assets/pencil.png" />
        <img alt="" className="direction-deco direction-loop-tape" src="/assets/tape.png" />
        <div className="direction-heading">
          <span>→</span>
          <h3>我的长期实践闭环</h3>
        </div>
        <div className="direction-loop">
          {loopNodes.map(([id, label], index) => (
            <Link className={`direction-loop-note direction-loop-note-${(index % 6) + 1}`} key={id} to={`/detail/direction/${id}`}>
              {label}
              {index < loopNodes.length - 1 && <span>→</span>}
            </Link>
          ))}
        </div>
      </section>

      <section className="direction-summary-card">
        <img alt="" className="direction-deco direction-summary-tape" src="/assets/tape.png" />
        <img alt="" className="direction-deco direction-summary-heart" src="/assets/heart.png" />
        <h3>我不想只停留在“讲教育”</h3>
        <p>我更想把教育理念做成孩子真的能体验到的东西。一个问题、一张图、一节小课、一张提问卡、一个小游戏、一个网页工具，都可以成为孩子理解世界的入口。</p>
        <div>
          {summaryTags.map((tag, index) => (
            <span className={`direction-summary-tag direction-summary-tag-${(index % 6) + 1}`} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>
    </motion.section>
  )
}

function StageSection({ title, desc, items }) {
  return (
    <section className="direction-card stage-card">
      <div className="direction-heading">
        <span>阶</span>
        <h3>{title}</h3>
      </div>
      <div className="stage-tag-wall">
        {items.map((item, index) => (
          <span className={`stage-tag stage-tag-${(index % 6) + 1} rotate-${(index % 5) + 1}`} key={item}>
            {item}
          </span>
        ))}
      </div>
      <p className="stage-summary">{desc}</p>
    </section>
  )
}
