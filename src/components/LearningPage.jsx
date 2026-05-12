import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const learningLines = [
  {
    id: 'early-childhood-0-7',
    title: '主线一：0-7岁儿童早期发展',
    text: '重点关注感知觉、语言、情绪、动作、游戏、亲子关系和早期学习。',
  },
  {
    id: 'child-teen-observation-8-15',
    title: '主线二：8-15岁儿童与青少年观察',
    text: '重点关注学习动机、表达能力、认知发展、自我意识和家庭沟通。',
  },
  {
    id: 'family-education-guidance',
    title: '主线三：家庭教育指导',
    text: '从家长沟通、亲子关系、家庭学习环境和陪伴方式入手。',
  },
  {
    id: 'ai-assisted-education',
    title: '主线四：AI辅助教育实践',
    text: '把 AI 用在绘本课程、儿童表达、问题设计、知识图解和学习工具开发中。',
  },
]

const theories = [
  ['bloom-taxonomy', '布鲁姆教育目标分类学', '理解孩子“懂了”到底懂到哪一层。', '目标'],
  ['piaget-cognitive-development', '皮亚杰认知发展理论', '理解儿童认知结构如何随年龄发展。', '认知'],
  ['vygotsky-zpd', '维果茨基最近发展区', '理解孩子在成人支持下能做到什么。', '支持'],
  ['montessori', '蒙台梭利教育', '理解儿童自主、秩序、感官和环境的重要性。', '环境'],
  ['reggio-emilia', '瑞吉欧教育', '理解儿童表达、项目探索和环境作为第三位老师。', '表达'],
  ['pbl', 'PBL项目式学习', '理解孩子如何通过真实问题进行学习。', '项目'],
  ['picturebook-deep-reading', '绘本深度阅读', '把绘本从讲故事变成观察、提问、表达和讨论。', '绘本'],
  ['critical-thinking', '儿童批判性思维', '帮助孩子提出问题、比较观点、说明理由。', '思考'],
]

const outputs = [
  ['deep-notes', '深度笔记'],
  ['short-video-script', '短视频口播'],
  ['xiaohongshu-post', '小红书图文'],
  ['wechat-article', '公众号文章'],
  ['knowledge-checklist', '知识清单图'],
  ['course-section', '课程小节'],
  ['parent-communication-script', '家长沟通话术'],
  ['child-activity-design', '儿童活动设计'],
  ['picturebook-question-card', '绘本提问卡'],
  ['ai-web-tool', 'AI网页小工具'],
]

const workflow = [
  ['read-materials', '读资料'],
  ['break-concepts', '拆概念'],
  ['make-notes', '做笔记'],
  ['record-video', '录视频'],
  ['make-graphics', '做图文'],
  ['design-course', '设计课程'],
  ['build-tool', '做工具'],
  ['review-improve', '复盘优化'],
]

const summaryTags = ['学进去', '讲出来', '做成图', '录成课', '变成工具']

export default function LearningPage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="learning-page space-y-2.5"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
    >
      <section className="learning-title-card">
        <img alt="" className="learning-deco learning-deco-star" src="/assets/star.png" />
        <img alt="" className="learning-deco learning-deco-tape" src="/assets/tape.png" />
        <img alt="" className="learning-deco learning-deco-book" src="/assets/book.png" />
        <h2>我正在搭建的教育知识框架</h2>
        <p>我不只是为了拿证，而是在备考和实践过程中，把儿童教育、儿童心理学、家庭教育和 AI 教育方法整理成自己的长期系统。</p>
      </section>

      <section className="learning-card">
        <div className="learning-heading">
          <span>图</span>
          <h3>当前学习主线</h3>
        </div>
        <div className="learning-map">
          {learningLines.map((line, index) => (
            <Link className={`learning-line learning-line-${index + 1}`} key={line.id} to={`/detail/learning/${line.id}`}>
              <b>{line.title}</b>
              <p>{line.text}</p>
              <img alt="" src={index % 2 === 0 ? '/assets/star.png' : '/assets/heart.png'} />
            </Link>
          ))}
        </div>
      </section>

      <section className="learning-card">
        <div className="learning-heading">
          <span>理</span>
          <h3>我正在深挖的教育理论</h3>
        </div>
        <div className="theory-grid">
          {theories.map(([id, name, desc, tag], index) => (
            <Link className={`theory-card theory-card-${(index % 6) + 1}`} key={id} to={`/detail/learning-theory/${id}`}>
              <em>{tag}</em>
              <b>{name}</b>
              <p>{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="learning-card">
        <div className="learning-heading">
          <span>出</span>
          <h3>我的学习输出方式</h3>
        </div>
        <div className="learning-tag-wall">
          {outputs.map(([id, label], index) => (
            <span className={`learning-tag learning-tag-${(index % 6) + 1} rotate-${(index % 5) + 1}`} key={id}>
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="learning-card learning-flow-card">
        <img alt="" className="learning-deco learning-deco-pencil" src="/assets/pencil.png" />
        <img alt="" className="learning-deco learning-flow-tape" src="/assets/tape.png" />
        <div className="learning-heading">
          <span>→</span>
          <h3>从学习到作品的转化流程</h3>
        </div>
        <div className="learning-workflow">
          {workflow.map(([id, label], index) => (
            <Link className={`learning-flow-note learning-flow-note-${(index % 6) + 1}`} key={id} to={`/detail/learning/${id}`}>
              {label}
              {index < workflow.length - 1 && <span>→</span>}
            </Link>
          ))}
        </div>
      </section>

      <section className="learning-summary-card">
        <img alt="" className="learning-deco learning-summary-tape" src="/assets/tape.png" />
        <img alt="" className="learning-deco learning-summary-star" src="/assets/star.png" />
        <h3>证书不是终点</h3>
        <p>我更看重的是学习过程本身。每学完一个知识点，我都会尝试把它重新讲出来、画出来、做成视频、做成课程，最后变成一个可以被孩子、家长或老师使用的小作品。</p>
        <div>
          {summaryTags.map((tag, index) => (
            <span className={`learning-summary-tag learning-summary-tag-${index + 1}`} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>
    </motion.section>
  )
}
