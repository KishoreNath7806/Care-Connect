import { Card, CardContent } from '@/components/ui/card';
import { SPECIALTIES } from '@/lib/specialities';
import Link from 'next/link';
import React from 'react'

const SpecialityPage = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center mb-8 text-center'>
            <h1 className='text-3xl md:text-4xl font-bold mb-2 text-blue-600'>Find Your Doctor To Consult</h1>
            <p className='text-muted-foreground text-lg'>Browse By Speciality and Pick Your Doctor for Consultation</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {SPECIALTIES.map((speciality) => (
                <Link key={speciality.name} href={`/doctors/${speciality.name}`}>
                    <Card className='border-blue-900/30 h-full cursor-pointer hover:border-blue-900/80 hover:bg-blue-500/10 transition-all'>
                        <CardContent className='p-6 flex flex-col items-center justify-center text-center h-full'>
                            <div className='w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center mb-4'>
                                <div>{speciality.icon}</div>
                            </div>
                            <h3 className='font-medium text-blue-700'>{speciality.name}</h3>
                        </CardContent>
                    </Card>
                </Link>
            ))
            }
        </div>

    </>
  )
}

export default SpecialityPage;