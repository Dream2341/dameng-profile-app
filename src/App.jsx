import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import ExperiencePage from './components/ExperiencePage'
import DirectionPage from './components/DirectionPage'
import ContactPage from './components/ContactPage'
import DetailPage from './components/DetailPage'
import PhoneShell from './components/PhoneShell'
import ResumePage from './components/ResumePage'
import ServicesPage from './components/ServicesPage'
import SkillsPage from './components/SkillsPage'
import ToolsPage from './components/ToolsPage'
import WorksPage from './components/WorksPage'
import OpportunitiesPage from './components/OpportunitiesPage'
import LearningPage from './components/LearningPage'
import { pages } from './data/pages'

export default function App() {
  return (
    <PhoneShell>
      <Routes>
        {pages.map((page) => (
          <Route
            element={
              page.path === '/'
                ? <HomePage />
                : page.path === '/skills'
                  ? <SkillsPage />
                  : page.path === '/tools'
                    ? <ToolsPage />
                    : page.path === '/experience'
                      ? <ExperiencePage />
                      : page.path === '/works'
                        ? <WorksPage />
                        : page.path === '/learning'
                          ? <LearningPage />
                          : page.path === '/direction'
                            ? <DirectionPage />
                            : page.path === '/contact'
                              ? <ContactPage />
                              : page.path === '/services'
                                ? <ServicesPage />
                                : page.path === '/opportunities'
                                  ? <OpportunitiesPage />
                      : <ResumePage page={page} />
            }
            key={page.path}
            path={page.path}
          />
        ))}
        <Route element={<DetailPage />} path="/detail/:type/:id" />
      </Routes>
    </PhoneShell>
  )
}
