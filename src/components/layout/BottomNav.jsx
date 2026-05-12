const items = [
  { label: '首页', icon: 'home', active: true },
  { label: '发现', icon: 'search' },
  { label: '发布', icon: 'plus' },
  { label: '收藏', icon: 'heart' },
  { label: '我', icon: 'user' },
]

export default function BottomNav() {
  return (
    <footer className="bottom-nav shrink-0 border-t-2 border-[#2c2c2c] bg-[#fffdf5] px-5 pb-5 pt-2">
      <div className="flex items-end justify-between">
        {items.map((item) => (
          <button className={`bottom-item ${item.active ? 'is-active' : ''}`} key={item.label} type="button">
            <span className={`bottom-icon bottom-icon-${item.icon}`} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <div className="mx-auto mt-2 h-1.5 w-32 rounded-full bg-black" />
    </footer>
  )
}
