import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const topics = [
  ['child-education', '儿童教育'],
  ['picturebook-course', '绘本课程'],
  ['family-education', '家庭教育'],
  ['ai-education-tools', 'AI辅助教育工具'],
  ['content-cooperation', '内容合作'],
  ['course-exchange', '课程交流'],
  ['child-psychology', '儿童心理学'],
  ['zero-seven-growth', '0-7岁成长'],
  ['parent-child-reading', '亲子共读'],
  ['child-expression', '儿童表达力'],
  ['critical-thinking', '批判性思维'],
  ['learning-tool-development', '学习工具开发'],
]

const contactWays = [
  ['follow-damengedu', '关注', '@damengedu'],
  ['official-account', '公众号', '大梦观察'],
  ['private-message', '私信', '欢迎私信交流'],
  ['cooperation-message', '合作', '可先留言或私信'],
]

const people = [
  ['parents', '家长', '关注孩子成长、亲子沟通和家庭学习环境的人。'],
  ['education-learners', '教育学习者', '正在学习儿童心理学、学前教育、家庭教育的人。'],
  ['child-education-practitioners', '儿童教育实践者', '正在做课程、绘本、活动或儿童成长项目的人。'],
  ['content-partners', '内容合作伙伴', '希望一起做教育内容、课程产品或 AI 工具的人。'],
]

const cooperation = [
  ['education-content-co-creation', '教育内容共创'],
  ['picturebook-course-co-creation', '绘本课程共创'],
  ['ai-education-tool-prototype', 'AI教育工具原型'],
  ['short-video-column', '短视频栏目合作'],
  ['wechat-content-cooperation', '公众号内容合作'],
  ['parent-communication-scripts', '家长沟通话术整理'],
  ['child-observation-form-design', '儿童观察表设计'],
  ['parent-child-activity-design', '亲子活动设计'],
]

const summaryTags = ['认真', '长期', '实践', '儿童教育', 'AI工具']

export default function ContactPage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="contact-page space-y-2.5"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
    >
      <section className="contact-title-card">
        <img alt="" className="contact-deco contact-deco-star" src="/assets/star.png" />
        <img alt="" className="contact-deco contact-deco-heart" src="/assets/heart.png" />
        <img alt="" className="contact-deco contact-deco-tape" src="/assets/tape.png" />
        <img alt="" className="contact-deco contact-deco-flower" src="/assets/flower.png" />
        <h2>欢迎和我交流这些方向</h2>
        <p>如果你也关注儿童教育、家庭教育、绘本课程、AI 辅助学习工具，欢迎和我交流。</p>
      </section>

      <section className="contact-card">
        <div className="contact-heading">
          <span>话</span>
          <h3>欢迎交流的方向</h3>
        </div>
        <div className="contact-tag-wall">
          {topics.map(([id, label], index) => (
            <span className={`contact-tag contact-tag-${(index % 6) + 1} rotate-${(index % 5) + 1}`} key={id}>
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="contact-card">
        <div className="contact-heading">
          <span>联</span>
          <h3>联系我的方式</h3>
        </div>
        <div className="contact-way-grid">
          {contactWays.map(([id, title, text], index) => (
            <Link className={`contact-way contact-way-${index + 1}`} key={id} to={`/detail/contact/${id}`}>
              <img alt="" src={index % 2 === 0 ? '/assets/star.png' : '/assets/heart.png'} />
              <b>{title}</b>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-card">
        <img alt="" className="contact-deco contact-deco-tape-left" src="/assets/tape.png" />
        <div className="contact-heading">
          <span>人</span>
          <h3>我希望连接的人</h3>
        </div>
        <div className="contact-people-grid">
          {people.map(([id, title, text], index) => (
            <Link className={`contact-person contact-person-${index + 1}`} key={id} to={`/detail/contact/${id}`}>
              <b>{title}</b>
              <p>{text}</p>
              <span />
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-card">
        <div className="contact-heading">
          <span>合</span>
          <h3>适合交流的合作形式</h3>
        </div>
        <div className="contact-coop-grid">
          {cooperation.map(([id, label], index) => (
            <Link className={`contact-coop contact-coop-${(index % 6) + 1}`} key={id} to={`/detail/contact-cooperation/${id}`}>
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-look-card">
        <img alt="" className="contact-deco contact-look-tape" src="/assets/tape.png" />
        <h3>联系前可以先看这些内容</h3>
        <p>如果你想了解我，可以先看我的“作品”“学习”“方向”三个页面。那里更能看出我现在真正关注的问题，以及我想长期做的事。</p>
        <div>
          <Link to="/works">去看作品</Link>
          <Link to="/learning">去看学习</Link>
          <Link to="/direction">去看方向</Link>
        </div>
      </section>

      <section className="contact-summary-card">
        <img alt="" className="contact-deco contact-summary-tape" src="/assets/tape.png" />
        <img alt="" className="contact-deco contact-summary-heart" src="/assets/heart.png" />
        <h3>我现在更想连接长期认真做事的人</h3>
        <p>不一定一开始就合作，也不一定马上有什么结果。只要方向相近，愿意认真讨论儿童教育、AI工具和真实学习问题，就值得慢慢连接。</p>
        <div>
          {summaryTags.map((tag, index) => (
            <span className={`contact-summary-tag contact-summary-tag-${index + 1}`} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>
    </motion.section>
  )
}
