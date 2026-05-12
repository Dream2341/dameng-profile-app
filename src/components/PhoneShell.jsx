import BottomNav from './layout/BottomNav'
import ProfileHeader from './layout/ProfileHeader'
import StatusBar from './layout/StatusBar'
import TabNav from './layout/TabNav'
import TopActions from './layout/TopActions'

export default function PhoneShell({ children }) {
  return (
    <div className="min-h-svh bg-[#f7f4ec] px-2 py-3 sm:px-4">
      <div className="phone-shell phone-frame mx-auto flex h-[calc(100svh-24px)] max-h-[932px] min-h-[760px] w-full max-w-[430px] flex-col overflow-hidden bg-[#fffdf5]">
        <StatusBar />
        <main className="scroll-area min-h-0 flex-1 overflow-y-auto overflow-x-hidden pb-[88px]">
          <TopActions />
          <ProfileHeader />
          <TabNav />
          <div className="px-3 pt-2">{children}</div>
        </main>
        <BottomNav />
      </div>
    </div>
  )
}
