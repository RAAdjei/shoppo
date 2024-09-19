import PageHeader from '@/components/Backoffice/PageHeader'
import TableActions from '@/components/Backoffice/TableActions'


import React from 'react'

const page = () => {
  return (
    <div>
      <PageHeader heading="Products" href="/dashboard/products/new"  
      linkTitle="Add Products"/>

      <TableActions/>

    </div>
  )
}

export default page