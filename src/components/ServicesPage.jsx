import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const services = [
  {
    id: 'edu-short-video-script',
    no: '01',
    title: '教育类短视频脚本',
    type: '短视频脚本',
    desc: '围绕儿童教育、家庭教育、学前教育、亲子沟通等主题，设计短视频标题、口播稿、分镜结构、封面文案和平台正文。',
    fit: '教育账号 / 课程团队 / 视频号栏目',
  },
  {
    id: 'xiaohongshu-education-content',
    no: '02',
    title: '小红书教育图文策划',
    type: '小红书图文',
    desc: '把教育知识点拆成适合小红书传播的系列图文，包括选题、标题、正文、封面文字、卡片结构和标签。',
    fit: '小红书教育账号 / 家庭教育博主 / 教育机构',
  },
  {
    id: 'picturebook-course-activity',
    no: '03',
    title: '绘本课程活动设计',
    type: '绘本课程',
    desc: '围绕绘本设计亲子共读提问、儿童观察任务、表达活动、学习单和批判性思维问题。',
    fit: '绘本馆 / 亲子阅读账号 / 课程团队',
  },
  {
    id: 'family-education-content',
    no: '04',
    title: '家庭教育内容共创',
    type: '家庭教育内容',
    desc: '围绕家长真实困惑，设计可理解、可使用、不过度说教的家庭教育内容，包括案例分析、行动建议和沟通话术。',
    fit: '家庭教育账号 / 家长课堂 / 课程团队',
  },
  {
    id: 'child-observation-worksheet',
    no: '05',
    title: '儿童观察表 / 学习单设计',
    type: '学习工具',
    desc: '根据儿童发展目标，设计儿童观察记录表、学习任务单、亲子互动卡、课程反馈表和成长记录工具。',
    fit: '幼教机构 / 家庭教育项目 / 课程产品',
  },
  {
    id: 'ai-education-tool-prototype',
    no: '06',
    title: 'AI教育工具原型设计',
    type: 'AI 工具原型',
    desc: '将教育内容与 AI 工具结合，设计绘本提问器、学习活动生成器、家长沟通辅助工具、儿童观察辅助工具等网页原型。',
    fit: 'AI 教育项目 / 教育产品团队 / 内容创业者',
  },
  {
    id: 'course-material-visualization',
    no: '07',
    title: '课程资料整理与可视化',
    type: '课程资料',
    desc: '把零散的教育资料整理成课程结构、知识框架、图文卡片、讲解稿和可视化学习材料。',
    fit: '课程团队 / 教育创作者 / 知识付费项目',
  },
]

const fitTags = [
  ['edu-account', '教育账号'],
  ['course-team', '课程团队'],
  ['family-edu-account', '家庭教育账号'],
  ['picturebook-house', '绘本馆'],
  ['kindergarten-org', '幼教机构'],
  ['ai-edu-team', 'AI 教育团队'],
  ['edu-product', '教育产品团队'],
  ['knowledge-payment', '知识付费项目'],
  ['parent-class', '家长课堂'],
  ['content-creator', '内容创业者'],
]

const principles = ['可执行', '可复用', '尊重儿童', '尊重家长', '内容先行']

export default function ServicesPage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="services-page space-y-2.5"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
    >
      <section className="works-title-card">
        <img alt="" className="works-deco works-deco-star" src="/assets/star.png" />
        <img alt="" className="works-deco works-deco-tape" src="/assets/tape.png" />
        <img alt="" className="works-deco works-deco-heart" src="/assets/heart.png" />
        <h2>可以合作的项目</h2>
        <p>我可以参与儿童教育、家庭教育、绘本课程、亲子阅读、教育短视频和 AI 教育工具相关的线上合作。</p>
      </section>

      <section className="works-card">
        <div className="works-heading">
          <span>★</span>
          <h3>合作项目方向</h3>
        </div>
        <div className="work-gallery">
          {services.map((item, index) => (
            <Link
              className={`portfolio-card portfolio-card-${(index % 6) + 1}`}
              key={item.id}
              to={`/detail/service/${item.id}`}
            >
              <span className="portfolio-no">{item.no}</span>
              <div className="portfolio-thumb">
                <span className={`portfolio-art portfolio-art-${index + 1}`} />
              </div>
              <b>{item.title}</b>
              <em>{item.type}</em>
              <p>{item.desc}</p>
              <p style={{ marginTop: 6, fontWeight: 800 }}>适合：{item.fit}</p>
              <p style={{ marginTop: 6, fontWeight: 900, color: '#1671df' }}>查看详情 &gt;</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="works-card">
        <div className="works-heading">
          <span>词</span>
          <h3>谁可能在找我合作</h3>
        </div>
        <div className="works-tag-wall">
          {fitTags.map(([id, label], index) => (
            <span
              className={`works-tag works-tag-${(index % 6) + 1} rotate-${(index % 5) + 1}`}
              key={id}
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="works-summary-card">
        <img alt="" className="works-deco works-summary-tape" src="/assets/tape.png" />
        <img alt="" className="works-deco works-summary-heart" src="/assets/heart.png" />
        <h3>我做合作时在乎什么</h3>
        <p>我更愿意参与重视教育内容质量的项目，把每一次合作做成能落地、能给到孩子和家长真实价值的内容，而不是流量噱头。</p>
        <div>
          {principles.map((tag, index) => (
            <span className={`works-summary-tag works-summary-tag-${(index % 5) + 1}`} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>
    </motion.section>
  )
}
