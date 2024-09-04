import CustomDataTable from "@/components/Backoffice/CustomDataTable";
import Heading from "@/components/Backoffice/Heading";
import React from 'react'

const page = () => {
  return (
    <div>
      <Heading title={"Dashboard Overview"}/>
      <CustomDataTable/>
    </div>
  )
}

export default page