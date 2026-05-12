import { motion } from 'framer-motion'

const aiTools = [
  { id: 'chatgpt', name: 'ChatGPT', desc: '深度问答、课程设计、脚本创作、结构化表达' },
  { id: 'claude', name: 'Claude', desc: '长文分析、知识整理、项目文档、程序辅助' },
  { id: 'grok', name: 'Grok', desc: '快速创意、社交表达、内容发散' },
  { id: 'deepseek', name: 'DeepSeek', desc: '中文内容生成、批量文案、低成本辅助' },
  { id: 'gpt-image', name: 'GPT-Image', desc: '教育插画、封面、知识图、视觉包装' },
]

const visualTools = [
  { id: 'canva', name: 'Canva', desc: '封面、海报、课程图、视觉排版' },
  { id: 'jianying', name: '剪映', desc: '短视频剪辑、字幕、配音、封面' },
  { id: 'kling-jimeng', name: '可灵 / 即梦', desc: '图片动态化、短视频素材生成' },
  { id: 'gpt-sovits', name: 'GPT-SoVITS', desc: '声音训练、AI配音、口播分段生成' },
]

const writingTools = [
  { id: 'obsidian', name: 'Obsidian', desc: '个人知识库、学习笔记、课程框架' },
  { id: 'markdown', name: 'Markdown', desc: '结构化文档、课程稿、知识清单' },
  { id: 'wechat-public-backend', name: '公众号后台', desc: '长文发布、栏目沉淀、教育观察输出' },
  { id: 'wps-office', name: 'WPS / Office', desc: '文档、表格、课件、方案整理' },
]

const codeTools = [
  { id: 'html', name: 'HTML', desc: '网页结构' },
  { id: 'css', name: 'CSS', desc: '页面视觉和布局' },
  { id: 'javascript', name: 'JavaScript', desc: '基础交互' },
  { id: 'github-pages', name: 'GitHub Pages', desc: '发布在线网页和小工具' },
  { id: 'vscode', name: 'VS Code', desc: '编辑项目文件' },
  { id: 'nodejs', name: 'Node.js', desc: '运行基础项目' },
  { id: 'claude-code-codex', name: 'Claude Code / Codex', desc: 'AI辅助编程、网页、小工具开发' },
]

const workflow = [
  { id: 'learning-materials', name: '学习资料' },
  { id: 'structured-notes', name: '结构化笔记' },
  { id: 'course-script', name: '课程脚本' },
  { id: 'content-video', name: '图文 / 短视频' },
  { id: 'ai-visual-video', name: 'AI插画 / 视频' },
  { id: 'web-tools', name: '网页小工具' },
  { id: 'publish-review', name: '发布与复盘' },
]

export default function ToolsPage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="tools-page space-y-2.5"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
    >
      <section className="tools-title-card">
        <img alt="" className="tools-deco tools-deco-star" src="/assets/star.png" />
        <img alt="" className="tools-deco tools-deco-tape" src="/assets/tape.png" />
        <h2>这些是我常用的工具</h2>
        <p>我不是为了用工具而用工具，而是把工具组合成内容、课程、图文、视频和教育小程序的生产流程。</p>
      </section>

      <ToolSection badge="AI" title="AI 工具" className="ai-tool-section">
        <div className="ai-tool-grid">
          {aiTools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} tone={index} />
          ))}
        </div>
      </ToolSection>

      <ToolSection badge="✦" title="视觉与视频工具" className="visual-tool-section">
        <img alt="" className="tools-deco tools-deco-heart" src="/assets/heart.png" />
        <div className="visual-tool-grid">
          {visualTools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} tone={index + 1} variant="compact" />
          ))}
        </div>
      </ToolSection>

      <ToolSection badge="文" title="知识库与写作工具" className="writing-tool-section">
        <div className="writing-list">
          {writingTools.map((tool, index) => (
            <ToolNote key={tool.id} tool={tool} tone={index} />
          ))}
        </div>
      </ToolSection>

      <ToolSection badge="&lt;/&gt;" title="网页与程序工具" className="code-tool-section">
        <img alt="" className="tools-deco tools-deco-pencil" src="/assets/pencil.png" />
        <div className="code-workbench">
          {codeTools.map((tool, index) => (
            <span className={`code-chip code-chip-${(index % 6) + 1}`} key={tool.id}>
              <b>{tool.name}</b>
              <span>{tool.desc}</span>
            </span>
          ))}
        </div>
      </ToolSection>

      <ToolSection badge="→" title="我怎么组合这些工具" className="tool-flow-section">
        <div className="tool-workflow">
          {workflow.map((node, index) => (
            <span className={`workflow-note workflow-note-${(index % 6) + 1}`} key={node.id}>
              {node.name}
              {index < workflow.length - 1 && <span>→</span>}
            </span>
          ))}
        </div>
      </ToolSection>
    </motion.section>
  )
}

function ToolSection({ badge, title, className = '', children }) {
  return (
    <section className={`tools-card ${className}`}>
      <div className="tools-card-heading">
        <span>{badge}</span>
        <h3>{title}</h3>
      </div>
      {children}
    </section>
  )
}

function ToolCard({ tool, tone, variant = '' }) {
  return (
    <article className={`tool-card tool-card-${(tone % 6) + 1} ${variant}`}>
      <span className="tool-dot" />
      <b>{tool.name}</b>
      <p>{tool.desc}</p>
    </article>
  )
}

function ToolNote({ tool, tone }) {
  return (
    <article className={`tool-note tool-note-${(tone % 4) + 1}`}>
      <b>{tool.name}</b>
      <span>{tool.desc}</span>
    </article>
  )
}
