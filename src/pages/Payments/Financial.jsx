import { Box, Typography } from '@mui/material'
import React from 'react'
import { SearchIcon } from '@heroicons/react/outline';
import SmallCard from '../../components/reuse/SmallCard'
import { Car, TripsOutline, WalletBlack, WalletYelow, WalletSelected, TripsBlack } from '../../assets'
import { Card } from '../../assets'

const Financial = () => {
  return (
    <div className="ml-5 mt-2 mb-5 space-y-2">
      <div className='rounded-md border-2 border-gray-300 py-4 px-8'>
        <div className="text-2xl font-semibold">Financial Report</div>
        <p className="text-sm ml-1 text-gray-600">Manage Finances</p>
      </div>
      
      <div className="flex space-x-8 overflow-x-auto border-2 rounded-md py-6 px-8 border-gray-300">
        <div className="flex-none w-64">
            <SmallCard
                icon={WalletBlack}
                number={20}  // Update with your actual data
                text={`Total Revenue`}  // Update with your actual data
                textSize={10.9}
                buttonUrl={"#"}
                withBorder={true}
            />
        </div>

        <div className="flex-none w-64">
            <SmallCard
                icon={WalletYelow}
                number={240000}  // Update with your actual data
                text={`Total Payouts`}  // Update with your actual data
                textSize={10.9}
                buttonUrl={"#"}
                withBorder={true}
            />
        </div>

        <div className="flex-none w-64">
            <SmallCard
                icon={WalletSelected}
                number={10}  // Update with your actual data
                text={`Net Profit`}  // Update with your actual data
                textSize={10.9}
                buttonUrl={"#"}
                withBorder={true}
            />
        </div>
      </div>
    </div>
  )
}

export default Financial