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


const NewCategory = () => {
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

  ]
  const [tags, setTags] = useState([])

  const [loading, setLoading] = React.useState(false);
    const { register, watch, reset, handleSubmit, formState:{errors} } = useForm({
      defaultValues:{
        isActive: true,
      }
    });
    const isActive = watch("isActive");
    console.log(isActive);
    async function onSubmit(data: any) {
      const slug = generateSlug(data.title);
      data.slug = slug;
      data.imageUrl = imageUrl;
        console.log(data);
        makePostRequest(
          setLoading,
          'api/categories',
          data,
          'Category',
          reset
        );
        setImageUrl("");
    }
  return (
    <div>
        <FormHeader title="New Category"/>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg 
        shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <FormTextInput
            label="Category Name"
            name = "title"
            register={register}
            errors={errors}
            /> 

            {/* <SelectInput
              label="Select Category"
              name="categoryIds"
              register={register}
              className="w-full"
              options={categories}
              // multiple={true}
            /> */}

            {/* <FormTextInput
            label="Product Price"
            name = "price"
            type='number'
            register={register}
            errors={errors}
            className='w-full'
            />  */}

            <TextAreaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />   

          {/* <ArrayItemsInput setTags={setTags} tags={tags} itemTitle = "Tag"/> */}
          
          <ImageInput
          label='Category Image' 
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="productImageUploader"
          className="col-span-full"
          /> 

        <ToggleInput label="Publish Category" 
        name="isActive" 
        trueTitle="Active" 
        falseTitle="Draft"
        register={register}        
        />  
                            
        </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Category" loadingButttonTitle="Creating Category please wait..."/>

        </form>

        
    </div>
  )
}

export default NewCategory