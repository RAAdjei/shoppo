'use client'
import React, { useState } from 'react'  
import FormHeader from '@/components/Backoffice/FormHeader'
import FormTextInput from '@/components/Form Inputs/FormTextInput'
import TextAreaInput from '@/components/Form Inputs/FormTextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/Form Inputs/SubmitButton'
import { generateUserCode } from '@/lib/generateUserCode'
import { makePostRequest } from '@/lib/apiRequest'
import ToggleInput from '@/components/Form Inputs/ToggleInput'
import ImageInput from '@/components/Form Inputs/ImageInputs'
import { useRouter } from 'next/navigation'

 

const NewVendor = () => {
  const [imageUrl, setImageUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);
    const { register, watch, reset, handleSubmit, formState:{errors} } = useForm({
      defaultValues:{
        isActive: true,
      }
    });
    const router = useRouter();
    function redirect(){
      router.push("/dashboard/vendors")
    }
    const isActive = watch("isActive");
    console.log(isActive);
    async function onSubmit(data: any) {
      const code = generateUserCode('SHPP', data.name)
      data.imageUrl = imageUrl;
      data.code = code;
      console.log(data);
        makePostRequest(
          setLoading,
          'api/vendors',
          data,
          'Vendor',
          reset, redirect
        );
        setImageUrl("");
        
    }
  return (
    <div>
        <FormHeader title="New Vendor"/>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg 
        shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <FormTextInput
            label="Vendor Name"
            name = "name"
            register={register}
            errors={errors}
            /> 

            <FormTextInput
              label="Vendor's Phone Number"
              name="phone"
              type='tel'
              register={register}
              className="w-full"
              errors={errors}
            />
            
            <FormTextInput
              label="Vendor's Email"
              name="email"
              register={register}
              className="w-full"
              errors={errors}
            />

            <FormTextInput
              label="Vendor's Address"
              name="vendorAddress"
              register={register}
              errors={errors}
            />  

            <TextAreaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />   

          <ImageInput
          label='Vendor Profile Image' 
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="vendorprofileUploader"
          className="col-span-full"
          />
        

        <ToggleInput label="Vendor's Status" 
        name="isActive" 
        trueTitle="Active" 
        falseTitle="Draft"
        register={register}        
        />  
                             
        </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Vendor" loadingButttonTitle="Creating Vendor please wait..."/>

        </form>

        
    </div>
  )
}

export default NewVendor