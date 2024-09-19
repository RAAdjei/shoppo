'use client'
import React, { useState } from 'react'  
import FormHeader from '@/components/Backoffice/FormHeader'
import FormTextInput from '@/components/Form Inputs/FormTextInput'
import TextAreaInput from '@/components/Form Inputs/FormTextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/Form Inputs/SubmitButton'
import { generateSlug } from '@/lib/generateSlug'
import ImageInput from '@/components/Form Inputs/ImageInputs'
import { makePostRequest } from '@/lib/apiRequest'
import SelectInput from '@/components/Form Inputs/SelectInput'
import ArrayItemsInput from '@/components/Form Inputs/ArrayItemsInput'
import ToggleInput from '@/components/Form Inputs/ToggleInput'
import { useRouter } from 'next/navigation'

// mongodb pass: aeQYLNYGDtgTXRcP
// IP address (102.176.94.214) 

const NewProduct = () => {
  const [imageUrl, setImageUrl] = React.useState("");
  const categories = [
    {
      id:1,
      title: "Fashion and Apparel"
    },

    {
      id:2,
      title: "Electronics and Gadgets"
    },

    {
      id:3,
      title: "Beauty and Personal Care"
    },

    {
      id:4,
      title: "Groceries and Food"
    },

    {
      id:5,
      title: "Home and Living"
    },

    {
      id:6,
      title: "Sports and Fitness"
    },

    {
      id:7,
      title: "Books, Stationery, and Office Supplies"
    },

    {
      id:8,
      title: "Toys and Games"
    },

    {
      id:9,
      title: "Jewelry and Watches"
    },

    {
      id:10,
      title: "Health and Wellness"
    },

    {
      id:11,
      title: "Automotive and Accessories"
    },

    {
      id:12,
      title: "Entertainment and Media"
    },

    {
      id:13,
      title: "Pet Supplies"
    },

    {
      id:14,
      title: "Gifts and Souvenirs"
    },

    {
      id:15,
      title: "Footwear"
    },
  ]

  const vendors = [
    {
      id:1,
      title: "vendor1"
    },

    {
      id:2,
      title: "vendor2"
    },

    {
      id:3,
      title: "vendor3"
    },

  ]
  const [tags, setTags] = useState([])

  const [loading, setLoading] = React.useState(false);
    const { register, watch, reset, handleSubmit, formState:{errors} } = useForm({
      defaultValues:{
        isActive: true,
      }
    });
    const router = useRouter();
    function redirect(){
      router.push("/dashboard/products")
    }

    const isActive = watch("isActive");
    console.log(isActive);
    async function onSubmit(data: any) {
      const slug = generateSlug(data.title);
      data.slug = slug;
      data.imageUrl = imageUrl;
        console.log(data);
        makePostRequest(
          setLoading,
          'api/products',
          data,
          'Product',
          reset, redirect
        );
        setImageUrl("");
    }
  return (
    <div>
        <FormHeader title="New Product"/>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg 
        shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <FormTextInput
            label="Product Name"
            name = "title"
            register={register}
            errors={errors}
            /> 

            <SelectInput
              label="Select Category"
              name="categoryId"
              register={register}
              className="w-full"
              options={categories}
              // multiple={true}
            />

            <SelectInput
              label="Select Vendor"
              name="vendorId"
              register={register} 
              className="w-full"
              options={vendors}
              // multiple={true}
            />

            <FormTextInput
              label="Product Barcode"
              name="barcode"
              register={register}
              className="w-full"
              errors={errors}
            />

            <FormTextInput
            label="Product Price"
            name = "productPrice"
            type='number' 
            register={register}
            errors={errors}
            className='w-full'
            /> 

            <TextAreaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />   

          <ArrayItemsInput setTags={setTags} tags={tags} itemTitle = "Tag"/>
          
          <ImageInput
          label='Product Image' 
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="productImageUploader"
          className="col-span-full"
          /> 

        <ToggleInput label="Publish Product" 
        name="isActive" 
        trueTitle="Active" 
        falseTitle="Draft"
        register={register}        
        />  
                            
        </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Product" loadingButttonTitle="Creating Product please wait..."/>

        </form>

        
    </div>
  )
}

export default NewProduct