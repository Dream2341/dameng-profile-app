import { motion } from 'framer-motion'

export default function ResumePage({ page }) {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3"
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
    >
      <div className="paper-card relative px-4 py-3">
        <span className="sticker sticker-star left-3 top-3" />
        <h2 className="pl-9 text-[22px] font-bold leading-tight">{page.title}</h2>
        <p className="mt-2 text-[15px] leading-7">{page.intro}</p>
        <span className="tape tape-pink absolute -right-1 -top-2" />
      </div>

      {page.sections.map((section, index) => (
        <section className="paper-card relative px-4 py-4" key={section.title}>
          <span className={`number-badge badge-${(index % 4) + 1}`}>{index + 1}</span>
          <h3 className="mb-3 pl-9 text-[20px] font-bold">{section.title}</h3>
          <div className="flex flex-wrap gap-2">
            {section.items.map((item, itemIndex) => (
              <span className={`note-pill note-${(itemIndex % 6) + 1}`} key={item}>
                {item}
              </span>
            ))}
          </div>
          <span className="sticker sticker-heart absolute right-5 top-4" />
          <span className="mini-sparkle absolute bottom-4 right-8" />
          {index % 2 === 0 && <span className="tape tape-blue absolute -left-1 -top-2" />}
        </section>
      ))}
    </motion.section>
  )
}
