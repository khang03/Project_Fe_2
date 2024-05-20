import Header from '@/app/layout/Header'
import React from 'react'
import './globals.css'
import Footer from '@/app/layout/Footer'


export default function Traditional() {
    return (
        <body>
            <div className="content1 w-full h-[1000px] relative">
                <main className='flex flex-col justify-between pt-10 px-[200px]'>
                    <Header />

                </main>
                <div className="animation-content1 absolute bottom-[70px] right-[20px] z-[2]">
                    <img className='w-[360px]' src="https://dauhomemade.vn/apps/themes/bundau/img/roinuoc.png" alt="" />
                </div>
                <div className="animation-content1 absolute bottom-[70px] right-[170px] z-[3]">
                    <img className='w-[360px]' src="https://dauhomemade.vn/apps/themes/bundau/img/roinuoc.png" alt="" />
                </div>
                <div className="animation-content1 absolute bottom-[70px] right-[320px] z-[2]">
                    <img className='w-[360px]' src="https://dauhomemade.vn/apps/themes/bundau/img/roinuoc.png" alt="" />
                </div>
                <div className="animation-content1 absolute bottom-0 z-0">
                    <img className='w-full' src="https://dauhomemade.vn/apps/themes/bundau/img/wavein.png" alt="" />
                </div>
                <div className="animation-content1 absolute bottom-0 z-[3]">
                    <img className='w-full' src="https://dauhomemade.vn/apps/themes/bundau/img/wave3.png" alt="" />
                </div>
                <div className="animation-content1 absolute bottom-0 z-[1]">
                    <img className='w-full' src="https://dauhomemade.vn/apps/themes/bundau/img/wave2.png" alt="" />
                </div>
                <div className="animation-content1 absolute bottom-[-120px] z-[4]">
                    <img className='w-full' src="https://dauhomemade.vn/apps/themes/bundau/img/wave1.png" alt="" />
                </div>

            </div>
            <div className="content2 h-[1000px] w-full">
            
            </div>
        <Footer />
        </body>
    )
}
