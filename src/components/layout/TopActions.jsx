export default function TopActions() {
  return (
    <div className="relative z-20 -mb-3 flex shrink-0 items-center justify-between px-5 pt-2">
      <button aria-label="返回" className="circle-action arrow-left" type="button" />
      <div className="flex gap-2">
        <button aria-label="搜索" className="circle-action icon-search" type="button" />
        <button aria-label="分享" className="circle-action icon-share" type="button" />
        <button aria-label="更多" className="circle-action icon-more" type="button" />
      </div>
    </div>
  )
}
