import { Box, Typography } from '@mui/material'
import React from 'react'
import { DropdownText } from '../../components/Reusable'
import { Edit } from '../../assets'

const PayoutSettings = () => {
  return (
    <div className="ml-5 mt-2 mb-5 space-y-2">
      <div className='rounded-md border-2 border-gray-300 py-4 px-8'>
        <div className="text-2xl font-semibold">Payout Settings</div>
        <p className="text-sm ml-1 text-gray-600">Manage Payout Settings</p>
      </div>
      
      <div className='rounded-md border-2 border-gray-300 py-4 px-8'>
        <div className="text-xl font-semibold">Minimum Payment Amount - 5000</div>
      </div>
      
      <div className='rounded-md border-2 border-gray-300 py-4 px-8'>
        <div className="text-xl font-semibold">Commission percentage - 10%</div>
      </div>
    </div>
  )
}

export default PayoutSettings