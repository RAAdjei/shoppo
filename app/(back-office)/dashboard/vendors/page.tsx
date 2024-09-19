import PageHeader from '@/components/Backoffice/PageHeader'
import TableActions from '@/components/Backoffice/TableActions'


import React from 'react'

const page = () => {
  return (
    <div>
      <PageHeader heading="Vendors" href="/dashboard/vendors/new"  
      linkTitle="Add Vendors"/>

      <TableActions/>

    </div>
  )
}

export default page