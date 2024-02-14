import React from 'react'
import MainLayout from '../../components/reuse/MainLayout'
import TopBar from '../../components/TopBar'
import PaymentsTab from './PaymentsTab'

const Payments = () => {
  return (
    <div>
      <MainLayout>
      <div className="ml-250px flex-1 w-full max-w-screen-xl mx-auto mb-50 h-screen" style={{ paddingLeft: '5rem', paddingRight: '5rem', paddingTop: '1rem' }}>
        <TopBar />
        <div className="w-full" style={{ paddingTop: '1rem' }}>
          <div><PaymentsTab/></div>
        </div>
      </div>
      </MainLayout>
    </div>
  )
}

export default Payments