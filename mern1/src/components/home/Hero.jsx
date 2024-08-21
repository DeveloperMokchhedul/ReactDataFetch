


function Hero() {
    return (
        <>
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 my-5 border items-center '>
                    <div className='col-span-12 mt-5 md:mt-0  md:col-span-6 flex flex-col gap-5 justify-center it items-center text-start'>
                        <div className="flex items-center gap-2">
                            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                            <p>OUR BEST SELLERS</p>
                        </div>
                        <div className="">
                            <h1 className="text-5xl">Latest Arrivals</h1>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <p>SHOP NOW</p>
                            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-6 mb-5 md:mb-5'>
                        <img className="mt-5" src="https://img.freepik.com/free-photo/excited-man-holding-shopping-bags-looking-happy-mobile-phone-screen-standing-yellow-background_1258-40974.jpg?w=740&t=st=1724127887~exp=1724128487~hmac=486d0b86d4a97ab2e3903a141809b12f5a7f84162ab7494727adf73023b38a4e" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero
