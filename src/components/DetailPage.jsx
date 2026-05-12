import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { detailData } from '../data/detailData'

const fallbackDetail = {
  title: '内容整理中',
  typeLabel: '详情',
  summary: '这部分内容还在整理，后续会补充更完整的说明。',
  sections: [],
  tags: ['整理中', '后续补充'],
}

export default function DetailPage() {
  const { type, id } = useParams()
  const navigate = useNavigate()
  const detail = detailData[type]?.[id] ?? fallbackDetail
  const isFallback = detail === fallbackDetail

  function handleBack() {
    if (window.history.length > 1) {
      window.history.back()
      return
    }

    navigate('/')
  }

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="detail-page space-y-2.5"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
    >
      <button className="detail-back-button" onClick={handleBack} type="button">
        ← 返回
      </button>

      <section className="detail-title-card">
        <img alt="" className="detail-deco detail-deco-star" src="/assets/star.png" />
        <img alt="" className="detail-deco detail-deco-tape" src="/assets/tape.png" />
        <span>{detail.typeLabel}</span>
        <h2>{detail.title}</h2>
        <p>{detail.summary}</p>
      </section>

      {isFallback ? (
        <section className="detail-content-card">
          <h3>内容整理中</h3>
          <p>这部分内容还在整理，后续会补充更完整的说明。</p>
        </section>
      ) : (
        detail.sections.map((section, index) => (
          <section className={`detail-content-card detail-content-card-${(index % 4) + 1}`} key={section.heading}>
            <span className="detail-section-no">{String(index + 1).padStart(2, '0')}</span>
            <h3>{section.heading}</h3>
            <p>{section.content}</p>
          </section>
        ))
      )}

      <section className="detail-tags-card">
        <h3>相关标签</h3>
        <div>
          {detail.tags.map((tag, index) => (
            <span className={`detail-tag detail-tag-${(index % 6) + 1}`} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="detail-action-card">
        <img alt="" className="detail-deco detail-deco-heart" src="/assets/heart.png" />
        <p>如果这个方向与你的项目相关，可以到“联系”页进一步交流。</p>
        <Link to="/contact">去联系我</Link>
      </section>
    </motion.section>
  )
}
