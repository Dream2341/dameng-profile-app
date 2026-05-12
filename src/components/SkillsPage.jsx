import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const skillTags = [
  '课程讲解',
  '课程设计',
  '内容策划',
  '短视频表达',
  '公众号运营',
  '直播运营',
  '电商起盘',
  '客户管理',
  '儿童教育内容',
  'AI辅助教育工具',
]

const flowSteps = [
  {
    id: 'explain',
    no: '01',
    title: '把复杂知识讲清楚',
    text: '拆解难点，用孩子和家长能听懂的语言表达。',
  },
  {
    id: 'content',
    no: '02',
    title: '把内容做成图文 / 视频 / 课程',
    text: '从选题、结构到呈现，打造完整内容产品。',
  },
  {
    id: 'ai',
    no: '03',
    title: '把 AI 工具变成可落地的教育表达',
    text: '用 AI 提效内容生产，让教育表达更高效。',
  },
]

const strengths = [
  {
    id: 'zero-to-one',
    title: '0-1起盘',
    text: '从0到1搭建教育内容或项目。',
  },
  {
    id: 'transform',
    title: '内容转化',
    text: '把知识变成图文、视频、课程和工具。',
  },
  {
    id: 'understand',
    title: '用户理解',
    text: '懂家长、懂孩子，也懂真实需求。',
  },
  {
    id: 'system',
    title: '系统整合',
    text: '内容 × 运营 × 工具，全流程打通。',
  },
]

export default function SkillsPage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="skills-page space-y-2.5"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
    >
      <section className="skills-title-card">
        <img alt="" className="skills-deco skills-deco-star" src="/assets/star.png" />
        <img alt="" className="skills-deco skills-deco-tape" src="/assets/tape.png" />
        <h2>我目前最核心的能力</h2>
        <p>先把技能用便签形式铺出来，再逐步补充每个技能背后的案例和细节。</p>
      </section>

      <section className="skills-card skill-wall-card">
        <div className="skills-card-heading">
          <span>★</span>
          <h3>核心能力标签墙</h3>
        </div>
        <div className="skill-tag-wall">
          {skillTags.map((tag, index) => (
            <span
              className={`skill-sticker skill-sticker-${(index % 6) + 1} rotate-${(index % 5) + 1}`}
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="skills-card skills-flow-card">
        <img alt="" className="skills-deco skills-deco-heart" src="/assets/heart.png" />
        <div className="skills-card-heading">
          <span>⚡</span>
          <h3>我擅长把一件事做完整</h3>
        </div>
        <div className="skill-flow">
          {flowSteps.map((step, index) => (
            <Link className={`flow-step flow-step-${index + 1}`} key={step.id} to={`/detail/skills/${step.id}`}>
              <span className="flow-number">{step.no}</span>
              <b>{step.title}</b>
              <p>{step.text}</p>
              {index < flowSteps.length - 1 && <span className="flow-arrow">→</span>}
            </Link>
          ))}
        </div>
      </section>

      <section className="skills-card strength-card">
        <img alt="" className="skills-deco skills-deco-tape-left" src="/assets/tape.png" />
        <div className="skills-card-heading">
          <span>✿</span>
          <h3>我的底层优势</h3>
        </div>
        <div className="strength-grid">
          {strengths.map((item, index) => (
            <Link className={`strength-note strength-note-${index + 1}`} key={item.id} to={`/detail/skills/${item.id}`}>
              <b>{item.title}</b>
              <p>{item.text}</p>
              <img alt="" src={index % 2 === 0 ? '/assets/star.png' : '/assets/heart.png'} />
            </Link>
          ))}
        </div>
      </section>
    </motion.section>
  )
}
