export default function StatusBar() {
  return (
    <div className="status-bar relative h-9 shrink-0 px-7 pt-3 text-[15px] font-semibold">
      <div className="notch absolute left-1/2 top-0 h-8 w-36 -translate-x-1/2" />
      <div className="flex items-center justify-between">
        <span>17:34</span>
        <div className="flex items-center gap-1.5">
          <span className="signal-bars" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>LTE</span>
          <span className="battery">97%</span>
        </div>
      </div>
    </div>
  )
}
