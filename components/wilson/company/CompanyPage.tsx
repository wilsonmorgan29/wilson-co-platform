'use client'

import { useState } from 'react'
import AccessTab from './AccessTab'
import BrowseTab from './BrowseTab'
import PipelineTab from './PipelineTab'

type Tab = 'access' | 'browse' | 'pipeline'

export default function CompanyPage() {
  const [activeTab, setActiveTab] = useState<Tab>('access')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'access', label: 'Access' },
    { id: 'browse', label: 'Browse' },
    { id: 'pipeline', label: 'Pipeline' },
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
        {activeTab === 'access'   && <AccessTab   onApproved={() => setActiveTab('browse')} />}
        {activeTab === 'browse'   && <BrowseTab />}
        {activeTab === 'pipeline' && <PipelineTab />}
      </div>
    </>
  )
}
