'use client'

import { useState } from 'react'
import IntakeTab from './IntakeTab'
import ProfileTab from './ProfileTab'
import VisibilityTab from './VisibilityTab'
import MatchesTab from './MatchesTab'

type Tab = 'intake' | 'profile' | 'visibility' | 'matches'

export default function MemberPage() {
  const [activeTab, setActiveTab] = useState<Tab>('intake')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'intake', label: 'Intake' },
    { id: 'profile', label: 'Profile' },
    { id: 'visibility', label: 'Visibility' },
    { id: 'matches', label: 'Matches' },
  ]

  return (
    <>
      <div className="w-sub-nav">
        <div className="w-sub-nav-inner">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`w-sub-link${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-container w-section">
        {activeTab === 'intake'     && <IntakeTab     onComplete={() => setActiveTab('profile')} />}
        {activeTab === 'profile'    && <ProfileTab    onGoVisibility={() => setActiveTab('visibility')} onGoMatches={() => setActiveTab('matches')} />}
        {activeTab === 'visibility' && <VisibilityTab />}
        {activeTab === 'matches'    && <MatchesTab />}
      </div>
    </>
  )
}
