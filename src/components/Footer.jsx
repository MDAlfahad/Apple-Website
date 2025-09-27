import React from 'react'
import { footerLinks } from '../constansts'

const Footer = () => {
  return (
    <footer>
        <div className="screen-max-width">
            <div>
                <p className='font-semibold text-gray text-xs'>
                    More ways to shop:{' '}
                    <span className='underline text-blue'>Find the Apple Store{' '}</span>
                    or {' '}
                    <span className='underline text-blue'>Other retailer</span>{' '}
                    near you.
                </p>
                <p className='font-semibold text-gray text-xs'>
                    Or call +91-6260379325 
                </p>
            </div>
            <div className='bg-neutral-700 my-5 h-[1px]'/>
            <div className="flex md:flex-row flex-col md:items-center justify-between ">
                <p className='font-semibold text-gray text-xs'>Copyright @2024 Apple Inc. ALl Rights Reserved.</p>
                <div className="flex">
                    {footerLinks.map((link, i) => (
                        <p key={link} className='font-semibold text-gray text-xs'>
                            {link} {' '}
                            {i !==footerLinks.length -1 && (
                                <span className='mx-2 '>|</span>
                            )}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer