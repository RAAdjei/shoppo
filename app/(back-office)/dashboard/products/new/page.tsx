import React from 'react'
import NewProductForm from '@/components/Backoffice/NewProductForm'
import { getData } from '@/lib/getData'

const NewProduct = async () => {
  const categoriesData = await getData("categories")
  const usersData = await getData("users")
  const vendorsData = Array.isArray(usersData) ? usersData.filter((user: any) => user.role === "VENDOR") : []
  const vendors = vendorsData.map((vendor:any) => {
    return {
      id: vendor.id,
      name: vendor.name,
    };
  })
  const categories = categoriesData.map((category:any) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  console.log(vendors)
  return (
    <NewProductForm categories={categories} vendors={vendors}/>
  )
}

export default NewProduct