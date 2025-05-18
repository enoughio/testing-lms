import Image from 'next/image'
import React from 'react'

const WhatBetter = () => {
  return (
                   <section className="font-jakarta mt-8">
                <div className="bg-[#EFEAE5] w-full py-12 px-2 md:px-1 lg:px-16 xl:px-20">
                    <div className="what flex items-center justify-center gap-2 mb-6">
                        <Image src="/story1.png" width={30} height={20} alt="story1" />
                        <p className="text-[4.94px] leading-[4.9px] tracking-[0.49px]  md:text-[10.54px] md:leading-[10.5px] font-semibold md:tracking-wide text-center">WHAT DRIVES STUDENT ADDA</p>
                        <Image src="/story2.png" width={30} height={20} alt="story2" />
                    </div>

                    <div className="text-center mb-5 md:mb-12 text-[17.66px] md:text-[22.3px] md:leading-[26.8px] leading-[21px] ">
                        <p className=" md:text-4xl font-bold">Driven by purpose.</p>
                        <p className="md:text-4xl font-bold">Powered by passion.</p>
                    </div>

                    {/* <EqualSizedBoxes /> */}
                </div>
            </section>


  )
}

export default WhatBetter