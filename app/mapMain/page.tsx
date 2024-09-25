'use client'
import MapMain from '@/components/MapSearch/MapMain'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <div>
        <SessionProvider>
            <MapMain/>
        </SessionProvider>
    </div>
  )
}

export default page