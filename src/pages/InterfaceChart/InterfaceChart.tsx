import PieChart from '@/components/Highcharts/pieChart'
import Navbar from "../../components/Navbar/navbar";
import React from 'react'

function InterfaceChart() {
  return (
     <div>
     <Navbar />
     <div className="p-5 w-full">
       <div className="flex gap-4 mb-4">
        <PieChart/>
       </div>
     </div>
   </div>
  )
}

export default InterfaceChart