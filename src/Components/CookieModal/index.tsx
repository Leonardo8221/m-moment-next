'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import { FaToggleOn, FaToggleOff } from 'react-icons/fa'
import { CookieMap } from '@/utils/constants'
import { setCookie } from 'cookies-next'
import styles from './cookie.module.css'

const Modal = ({ onClose, cookieName }: any) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [toggleStates, setToggleStates] = useState(CookieMap.map(() => false))

  const handleToggleClick = (index: number) => {
    const newToggleStates = [...toggleStates]
    newToggleStates[index] = !newToggleStates[index]
    setToggleStates(newToggleStates)
  }

  const handleToggleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index)
  }

  const handleCookieSaveSettings = () => {
    const selectedCookies = toggleStates
      .map((state, index) => ({ ...CookieMap[index], enabled: state }))
      .filter((cookie) => cookie.enabled)

    localStorage.setItem(cookieName, JSON.stringify(selectedCookies))

    setCookie(cookieName, 'true', { maxAge: 365 * 24 * 60 * 60 })

    onClose()
  }

  useEffect(() => {
    const storedCookies = localStorage.getItem(cookieName)
    if (storedCookies) {
      const parsedCookies = JSON.parse(storedCookies)

      const initialToggleStates = CookieMap.map((mapItem: any) => {
        const matchedCookie = parsedCookies.find((cookie: any) => cookie.label === mapItem.label)
        return matchedCookie ? matchedCookie.enabled : false // Set toggle state based on matched cookie
      })

      setToggleStates(initialToggleStates)
    } else {
      setToggleStates(CookieMap.map(() => false))
    }
  }, [cookieName])

  return (
    <div className={`w-[690px] h-[670x] ${styles.cookieModal}`}>
      <div className='p-5 px-0 rounded-[10px] h-full bg-white cursor-pointer relative'>
        <div className={`relative -top-[40px] ${styles.cookieTitle}`}>
          <Image src={'/cookies_icon.svg'} alt={'cookies'} height={80} width={80} />
          <p className='relative font-bold font-[DMSans] text-[26px] '>Cookie Preferences</p>
        </div>
        <div className={`absolute top-7 ${styles.right_30}`}>
          <p className='text-end font-bold'>
            <button onClick={onClose}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
              </svg>
            </button>
          </p>
        </div>

        <div className={`relative -top-[40px] overflow-auto  ${styles.modalBody}`}>
          <div>
            <h1 className='text-indigo-600 font-[DMSans] text-[17px] font-[500]'>Cookie Usage</h1>
            <p className='mt-[10px] mb-[18px] font-[JetBrainsMono] text-[15px] text-[#363c4f]'>
              We use cookies to ensure the basic functionalities of this website and to enhance your online experience.
              You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and
              other sensitive data, please read the full&nbsp;<span className='underline cursor-pointer'>
                <Link href='/contact-us'>Contact-us</Link>
              </span>.
            </p>
          </div>
          <div className={styles.accordions}>
            {CookieMap.map((item, index) => (
              <div key={index} className={`font-[JetBrainsMono] text-[15px] text-[#363c4f] ${styles.accorItems}`}>
                <div className='flex items-center cursor-pointer' onClick={() => handleToggleExpand(index)}>
                  <div className=' flex w-5/6 items-center'>
                    <IoIosArrowDown className={`mr-2 transform ${index === expandedIndex ? '' : 'rotate--90'}`} />
                    <p className={`my-3 ${styles.label}`}>{item.label}</p>
                  </div>
                  <div className='w-1/6 flex justify-end items-center'>
                    <div>
                      {/* Toggle between FaToggleOff and FaToggleOn based on toggleStates */}
                      {toggleStates[index] ? (
                        // <FaToggleOn
                        //   color="green"
                        //   size={40}
                        //   onClick={() => handleToggleClick(index)}
                        // />
                        <svg
                          onClick={() => handleToggleClick(index)}
                          width='55'
                          height='24'
                          viewBox='0 0 55 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='55' height='24' rx='12' fill='#494AF8' />
                          <circle cx='43' cy='12' r='9' fill='white' />
                          <path
                            d='M11.575 14.175L17.475 8.275C17.6583 8.09167 17.8917 8 18.175 8C18.4583 8 18.6917 8.09167 18.875 8.275C19.0583 8.45833 19.15 8.69167 19.15 8.975C19.15 9.25833 19.0583 9.49167 18.875 9.675L12.275 16.275C12.075 16.475 11.8417 16.575 11.575 16.575C11.3083 16.575 11.075 16.475 10.875 16.275L8.275 13.675C8.09167 13.4917 8 13.2583 8 12.975C8 12.6917 8.09167 12.4583 8.275 12.275C8.45833 12.0917 8.69167 12 8.975 12C9.25833 12 9.49167 12.0917 9.675 12.275L11.575 14.175Z'
                            fill='white'
                          />
                        </svg>
                      ) : (
                        // <FaToggleOff
                        //   color="gray"
                        //   size={40}
                        //   onClick={() => handleToggleClick(index)}
                        // />

                        <svg
                          width='55'
                          height='24'
                          onClick={() => handleToggleClick(index)}
                          viewBox='0 0 55 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect opacity='0.6' width='55' height='24' rx='12' fill='#363C4F' />
                          <circle cx='12' cy='12' r='9' fill='white' />
                          <path
                            d='M44.8228 8.18326C44.7667 8.12701 44.7 8.08238 44.6266 8.05193C44.5532 8.02148 44.4745 8.00581 44.395 8.00581C44.3155 8.00581 44.2369 8.02148 44.1634 8.05193C44.09 8.08238 44.0234 8.12701 43.9672 8.18326L41 11.1444L38.0328 8.1772C37.9766 8.12102 37.9099 8.07646 37.8365 8.04605C37.7631 8.01565 37.6844 8 37.605 8C37.5255 8 37.4469 8.01565 37.3735 8.04605C37.3001 8.07646 37.2334 8.12102 37.1772 8.1772C37.121 8.23337 37.0765 8.30007 37.0461 8.37347C37.0156 8.44687 37 8.52554 37 8.60499C37 8.68443 37.0156 8.7631 37.0461 8.8365C37.0765 8.90991 37.121 8.9766 37.1772 9.03278L40.1444 12L37.1772 14.9672C37.121 15.0234 37.0765 15.0901 37.0461 15.1635C37.0156 15.2369 37 15.3156 37 15.395C37 15.4745 37.0156 15.5531 37.0461 15.6265C37.0765 15.6999 37.121 15.7666 37.1772 15.8228C37.2334 15.879 37.3001 15.9235 37.3735 15.9539C37.4469 15.9844 37.5255 16 37.605 16C37.6844 16 37.7631 15.9844 37.8365 15.9539C37.9099 15.9235 37.9766 15.879 38.0328 15.8228L41 12.8556L43.9672 15.8228C44.0234 15.879 44.0901 15.9235 44.1635 15.9539C44.2369 15.9844 44.3156 16 44.395 16C44.4745 16 44.5531 15.9844 44.6265 15.9539C44.6999 15.9235 44.7666 15.879 44.8228 15.8228C44.879 15.7666 44.9235 15.6999 44.9539 15.6265C44.9844 15.5531 45 15.4745 45 15.395C45 15.3156 44.9844 15.2369 44.9539 15.1635C44.9235 15.0901 44.879 15.0234 44.8228 14.9672L41.8556 12L44.8228 9.03278C45.0534 8.80219 45.0534 8.41385 44.8228 8.18326Z'
                            fill='white'
                            stroke='white'
                            strokeWidth='0.5'
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                {index === expandedIndex && <p>{item.expand}</p>}
                {index === expandedIndex && item.id === '002' &&<div>
                <div className={styles.table_wrap}>
                      <div className={styles.table_grid}>
                        <div className={styles.table_header}>
                          <div>Name</div>
                          <div>Domain</div>
                          <div>Expiration</div>
                          <div>Description</div>
                        </div>

                        <div className={styles.table_row}>
                          <div>^_ga</div>
                          <div>google.com</div>
                          <div>2 years</div>
                          <div>description ...</div>
                        </div>

                        <div className={styles.table_row}>
                          <div>^_ga</div>
                          <div>google.com</div>
                          <div>2 years</div>
                          <div>description ...</div>
                        </div>
                      </div>
                    </div>
                  </div>}
              </div>
            ))}
          </div>
          <div className={styles.infoSection}>
            <h1 className='text-indigo-600 font-[DMSans] text-[17px] font-[500]'>More Information</h1>
            <p className='font-[JetBrainsMono] text-[15px] text-[#363c4f] mt-[12px] mb-[18px]'>
              For any queries in relation to our policy on cookies and your choices, please &nbsp;
              <span className='underline cursor-pointer'>
                <Link href='/contact-us'>Contact-us</Link>
              </span>
            </p>
          </div>
        </div>
        <div className={`flex items-center justify-between gap-4 w-full ${styles.modalFooter}`}>
          <div className='flex items-center gap-4'>
            <button className='bg-indigo-600 py-2 px-4 rounded-md text-white'>Accept All</button>
            <button className='bg-gray-200 py-2 px-4 rounded-md text-black'>Reject All</button>
          </div>
          <button className='bg-gray-200 py-2 px-4 rounded-md text-black' onClick={handleCookieSaveSettings}>
            Save Settings
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
