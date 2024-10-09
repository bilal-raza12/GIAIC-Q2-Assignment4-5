import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#282728] text-white py-2 '>
            <div className='max-w-3xl mx-auto text-center'>
                <p className='mb-2'>&copy; BlogHub. All Rights Reserved.</p>
                <div className='flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4'>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Contact</Link>

                </div>
            </div>
    </footer>
  )
}

export default Footer
