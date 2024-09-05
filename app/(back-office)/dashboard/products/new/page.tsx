'use client'
import React from 'react'  
import FormHeader from '@/components/Backoffice/FormHeader'
import FormTextInput from '@/components/Form Inputs/FormTextInput'
import TextAreaInput from '@/components/Form Inputs/FormTextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/Form Inputs/SubmitButton'
import { generateSlug } from '@/lib/generateSlug'
import ImageInput from '@/components/Form Inputs/ImageInputs'

const NewProduct = () => {
  const [imageUrl, setImageUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);
    const { register, handleSubmit, formState:{errors} } = useForm();
    async function onSubmit(data: any) {
      const slug = generateSlug(data.title);
      data.slug = slug;
      data.imageUrl = imageUrl;
        console.log(data);
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
            <TextAreaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />   

          <ImageInput
          label='Product Image' 
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="productImageUploader"
          className="col-span-full"
          />                                
        </div>
        <SubmitButton isLoading={false} buttonTitle="Create Product" loadingButttonTitle="Creating Product please wait..."/>

        </form>

        
    </div>
  )
}

export default NewProduct