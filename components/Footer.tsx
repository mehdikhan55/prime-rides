import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
    return (
        <footer className='flex flex-col text-blue-100 mt-5 border-t border-e-gray-100'>
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                <h1  className='font-inter text-2xl font-extrabold text-black'>🚗PrimeRides</h1>
                    <p className='text-base text-gray-700'>
                        PrimeRides 2024 <br /> All rights reserved &copy;
                    </p>
                </div>

                <div className="footer__links">
                    {footerLinks.map((link, index) => (
                        <div key={link.title} className="font-bold footer__link">
                            <h3 className='font-bold text-black'>{link.title}</h3>
                            {link.links.map((item, index) => (
                                <Link key={item.title}
                                    href={item.url}
                                    className='text-gray-700'
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
                </div>

                <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 ">
                    <p className='text-gray-700'>@2024 Carhub. All Rights Reserved</p>
                    <div className="footer__copyrights-link">
                        <Link href='/' className='text-gray-700 '>
                            Privacy Policy
                        </Link>
                        <Link href='/' className='text-gray-700 '>
                            Terms of use
                        </Link>
                    </div>
                </div>
            
        </footer>
    )
}

export default Footer
