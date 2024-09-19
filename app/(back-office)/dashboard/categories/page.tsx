import PageHeader from '@/components/Backoffice/PageHeader'
import TableActions from '@/components/Backoffice/TableActions'


import React from 'react'

const page = () => {
  return (
    <div>
      <PageHeader heading="Categories" href="/dashboard/categories/new" 
      linkTitle="Add Categories"/>

      <TableActions/>

    </div>
  )
}

export default page