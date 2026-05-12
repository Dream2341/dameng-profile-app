import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const timeline = [
  {
    id: 'internet-ecommerce',
    no: '01',
    years: '2015-2019',
    city: '成都',
    title: '互联网 + 电商',
    desc: '电商公司0-1起盘 / 内容运营 / 用户转化',
    skills: '产品卖点提炼、内容策划、用户转化、项目执行',
  },
  {
    id: 'live-commerce',
    no: '02',
    years: '2019-2023',
    city: '杭州',
    title: '直播运营操盘',
    desc: '品牌直播 / 达人带货 / 百事可乐 / 希芸 / 食品旗舰店',
    skills: '直播脚本、货品表达、达人对接、数据复盘、转化设计',
  },
  {
    id: 'traditional-culture',
    no: '03',
    years: '2023-2025',
    city: '传统文化领域',
    title: '导师授课 / 课程讲解',
    desc: '导师授课 / 课程讲解 / 客户管理',
    skills: '知识表达、课程讲授、用户陪伴、长期关系维护',
  },
  {
    id: 'ai-education-learning',
    no: '04',
    years: '2025-至今',
    city: 'AI + 新教育学习',
    title: '儿童教育学习',
    desc: '儿童教育 / 儿童心理学 / 学前教育 / 0-7岁成长 / 8-15岁观察',
    skills: 'AI辅助学习、教育知识框架、儿童观察、课程产品化',
  },
]

const directionNodes = [
  { id: 'business-operations', title: '商业运营', text: '理解产品、用户和转化。' },
  { id: 'content-expression', title: '内容表达', text: '把复杂信息变成可传播内容。' },
  { id: 'course-ability', title: '课程能力', text: '把知识讲清楚，并能持续陪伴学习者。' },
  { id: 'ai-education-practice', title: 'AI教育实践', text: '把内容、课程和工具组合成儿童学习体验。' },
]

const migrations = [
  { id: 'ecommerce-to-education', title: '从电商到教育', text: '我更理解“用户为什么不行动”。' },
  { id: 'live-to-course', title: '从直播到课程', text: '我更理解“表达节奏如何影响理解”。' },
  { id: 'crm-to-family-education', title: '从客户管理到家庭教育', text: '我更理解“陪伴和信任的重要性”。' },
  { id: 'ai-to-child-learning', title: '从AI工具到儿童学习', text: '我更关注“工具如何帮助孩子表达和创造”。' },
]

const finalTags = ['0-7岁儿童成长', '家庭教育', '绘本课程', 'AI辅助教育工具', '儿童表达力', '批判性思维']

export default function ExperiencePage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="experience-page space-y-2.5"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
    >
      <section className="experience-title-card">
        <img alt="" className="experience-deco exp-deco-star" src="/assets/star.png" />
        <img alt="" className="experience-deco exp-deco-tape" src="/assets/tape.png" />
        <img alt="" className="experience-deco exp-deco-heart" src="/assets/heart.png" />
        <h2>我的经历时间线</h2>
        <p>这些经历表面上看跨度很大，但底层一直在训练同一种能力：理解人、组织内容、推动行动。</p>
      </section>

      <section className="experience-card timeline-card">
        <div className="experience-heading">
          <span>⌁</span>
          <h3>经历时间线</h3>
        </div>
        <div className="timeline-list">
          {timeline.map((item, index) => (
            <Link className={`timeline-entry timeline-entry-${index + 1}`} key={item.id} to={`/detail/experience/${item.id}`}>
              <span className="timeline-dot" />
              <span className="timeline-no">{item.no}</span>
              <div>
                <h4>
                  {item.years}｜{item.city}｜{item.title}
                </h4>
                <p>{item.desc}</p>
                <b>能力沉淀：{item.skills}</b>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="experience-card direction-card">
        <img alt="" className="experience-deco exp-deco-pencil" src="/assets/pencil.png" />
        <div className="experience-heading">
          <span>→</span>
          <h3>这些经历最后汇成一个方向</h3>
        </div>
        <div className="direction-flow">
          {directionNodes.map((node, index) => (
            <Link className={`direction-note direction-note-${index + 1}`} key={node.id} to={`/detail/direction/${node.id}`}>
              <b>{node.title}</b>
              <p>{node.text}</p>
              {index < directionNodes.length - 1 && <span>→</span>}
            </Link>
          ))}
        </div>
      </section>

      <section className="experience-card migration-card">
        <img alt="" className="experience-deco exp-deco-tape-left" src="/assets/tape.png" />
        <div className="experience-heading">
          <span>✦</span>
          <h3>我的能力迁移</h3>
        </div>
        <div className="migration-grid">
          {migrations.map((item, index) => (
            <Link className={`migration-note migration-note-${index + 1}`} key={item.id} to={`/detail/experience/${item.id}`}>
              <b>{item.title}</b>
              <p>{item.text}</p>
              <img alt="" src={index % 2 === 0 ? '/assets/star.png' : '/assets/heart.png'} />
            </Link>
          ))}
        </div>
      </section>

      <section className="experience-summary-card">
        <img alt="" className="experience-deco exp-deco-book" src="/assets/book.png" />
        <img alt="" className="experience-deco exp-deco-summary-tape" src="/assets/tape.png" />
        <h3>我现在不是简单转行教育</h3>
        <p>我是在把过去十年的商业运营、内容表达、课程讲授和用户理解能力，重新组合到儿童教育与 AI 教育实践里。</p>
        <div>
          {finalTags.map((tag, index) => (
            <span className={`summary-tag summary-tag-${(index % 6) + 1}`} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>
    </motion.section>
  )
}
