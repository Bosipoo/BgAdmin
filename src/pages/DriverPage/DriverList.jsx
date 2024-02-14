import React from 'react'
import MainLayout from '../../components/reuse/MainLayout'
import BackTopBar from '../../components/reuse/BackTopBar'
import ListHeaderRow from '../../components/reuse/ListHeaderRow'
import DriverListTable from "../../components/DriverListTable"

const DriverList = () => {
  return (
    <div>
      <MainLayout>
      <div className="ml-250px flex-1 w-full max-w-screen-xl mx-auto mb-50 h-screen" style={{ paddingLeft: '5rem', paddingRight: '5rem', paddingTop: '1rem' }}>
        <BackTopBar url="/driverDetails" />
        <div className="mt-3 flex">
          <ListHeaderRow />
        </div>
        <div className="mt-0 flex items-center">
          <div className="flex-1">
            <div className="flex items-center">
              <DriverListTable />
            </div>
          </div>
        </div>
      </div>
      </MainLayout>
    </div>
  )
}

export default DriverList
