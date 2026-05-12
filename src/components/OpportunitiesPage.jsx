import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const groups = [
  {
    id: 'content',
    badge: '内',
    title: 'A. 教育内容方向',
    items: [
      ['content-child-education-content-planning', '儿童教育内容策划'],
      ['content-family-education-editor', '家庭教育内容编辑'],
      ['content-short-video-script', '教育短视频脚本策划'],
      ['content-xiaohongshu-education', '小红书教育内容策划'],
      ['content-video-account-education', '视频号教育内容策划'],
    ],
  },
  {
    id: 'course',
    badge: '课',
    title: 'B. 课程设计方向',
    items: [
      ['course-picturebook-curriculum', '绘本课程设计'],
      ['course-parent-child-reading', '亲子阅读课程策划'],
      ['course-online-curriculum', '在线课程设计'],
      ['course-child-learning-activity', '儿童学习活动设计'],
      ['course-learning-experience', '学习体验设计'],
    ],
  },
  {
    id: 'ai',
    badge: 'AI',
    title: 'C. AI 教育方向',
    items: [
      ['ai-education-content', 'AI教育内容设计'],
      ['ai-learning-tool-content', 'AI学习工具内容设计'],
      ['ai-education-product-content', '教育产品内容策划'],
    ],
  },
  {
    id: 'remote',
    badge: 'EN',
    title: 'D. 国际远程方向',
    items: [
      ['remote-education-content-creator', 'Education Content Creator'],
      ['remote-curriculum-writer', 'Curriculum Writer'],
      ['remote-instructional-designer', 'Instructional Designer'],
      ['remote-learning-experience-designer', 'Learning Experience Designer'],
      ['remote-online-course-creator', 'Online Course Creator'],
    ],
  },
]

const matchTags = [
  ['remote', '线上协作'],
  ['async', '异步沟通'],
  ['content-first', '内容优先'],
  ['kids-friendly', '儿童友好'],
  ['parent-friendly', '家长友好'],
  ['ai-positive', 'AI 友好'],
  ['long-term', '长期合作'],
]

const boundaries = [
  '纯销售岗位',
  '纯客服岗位',
  '只追热点、不重视教育内容质量的账号运营',
  '完全没有教育判断、只做机械搬运的内容岗位',
]

export default function OpportunitiesPage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="opportunities-page space-y-2.5"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
    >
      <section className="contact-title-card">
        <img alt="" className="contact-deco contact-deco-star" src="/assets/star.png" />
        <img alt="" className="contact-deco contact-deco-tape" src="/assets/tape.png" />
        <img alt="" className="contact-deco contact-deco-heart" src="/assets/heart.png" />
        <h2>我正在寻找的线上工作方向</h2>
        <p>我希望匹配的是儿童教育内容、家庭教育内容、绘本课程、在线课程、AI 教育内容和学习体验设计相关的线上工作或项目合作。</p>
      </section>

      {groups.map((group) => (
        <section className="contact-card" key={group.id}>
          <div className="contact-heading">
            <span>{group.badge}</span>
            <h3>{group.title}</h3>
          </div>
          <div className="contact-tag-wall">
            {group.items.map(([id, label], index) => (
              <Link
                className={`contact-tag contact-tag-${(index % 6) + 1} rotate-${(index % 5) + 1}`}
                key={id}
                to={`/detail/opportunity/${id}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="contact-card">
        <img alt="" className="contact-deco contact-deco-flower" src="/assets/flower.png" />
        <div className="contact-heading">
          <span>★</span>
          <h3>我比较匹配的合作方式</h3>
        </div>
        <div className="contact-tag-wall">
          {matchTags.map(([id, label], index) => (
            <span
              className={`contact-tag contact-tag-${(index % 6) + 1} rotate-${(index % 5) + 1}`}
              key={id}
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="contact-summary-card">
        <img alt="" className="contact-deco contact-summary-tape" src="/assets/tape.png" />
        <img alt="" className="contact-deco contact-summary-heart" src="/assets/heart.png" />
        <h3>不优先考虑的方向</h3>
        <p>不是排斥，而是希望把精力放在我能真正为孩子和家长创造价值的内容上。下列方向我不会优先回复：</p>
        <div style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
          {boundaries.map((text, index) => (
            <span className={`contact-summary-tag contact-summary-tag-${(index % 5) + 1}`} key={text}>
              · {text}
            </span>
          ))}
        </div>
      </section>
    </motion.section>
  )
}
