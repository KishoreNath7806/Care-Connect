import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'

const PageHeader = ({icon,title,backlink ="/", backLabel = "Back to Home"}) => {
  return (
    <div className='flex flex-col justify-between gap-5 mb-8'>
        <Link href={backlink}>
            <Button variant="outline" size="sm" className="flex items-center text-gray-500 font-semibold hover:text-[#1560bd] transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2"/>
                {backLabel}
            </Button>
        </Link>
        <div className='flex items-end gap-2'>
            {icon && (<div className='text-[#1560bd]'>
                {React.cloneElement(icon,{className:"h-12 md:h-14 w-12 md:w-14"})}
            </div>)}
            <h1 className='text-4xl md:text-5xl text-[#1560bd] font-semibold'>{title}</h1>
        </div>
    </div>
  )
}

export default PageHeader