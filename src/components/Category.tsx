export default function Category() {
  return (
    <div className='category text-center mt-[97px] relative mx-[58px]'>
        <img src={'/ServiceFrameBgImg.png'} alt={"Service Background Frame"} className="absolute top-0 right-0 z-[-1] w-[135px] h-auto" />
        <p className='label font-[Poppins] font-[600] text-[18px] text-[#5E6282] leading-[27px] uppercase'>Category</p>
        <p className='header font-[Volkhov] font-[700] text-[50px] text-[#14183E] leading-[64.5px] mt-[10px]'>We Offer Best Services</p>
        <div className='services mt-[66px] grid grid-cols-4 mx-[96px]'>
            <div className='w-[181px] text-center m-[44px]'>
                <img src={"/category/weather.png"} alt="Calculated Weather Category" className='w-auto h-[78px] m-auto'/>
                <p className='title font-[Open Sans] font-[600] text-[20px] leading-[27px] text-[#1E1D4C] mt-[29px]'>Calculated Weather</p>
                <p className='description font-[Poppins] font-[500] text-[16px] leading-[26px] text-[#5E6282] mt-[15px]'>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
            <div className='relative text-center p-[44px] rounded-[36px] bg-[#FFFFFF] shadow-[0px_100px_80px_rgba(0,0,0,0.02),0px_64.8148px_46.8519px_rgba(0,0,0,0.0151852),0px_38.5185px_25.4815px_rgba(0,0,0,0.0121481),0px_20px_13px_rgba(0,0,0,0.01),0px_8.14815px_6.51852px_rgba(0,0,0,0.00785185),0px_1.85185px_3.14815px_rgba(0,0,0,0.00481481)]'>
                <img src={"/category/flight.png"} alt="Best Flights Category" className='w-auto h-[78px] m-auto'/>
                <p className='title font-[Open Sans] font-[600] text-[20px] leading-[27px] text-[#1E1D4C] mt-[29px]'>Best Flights</p>
                <p className='description font-[Poppins] font-[500] text-[16px] leading-[26px] text-[#5E6282] mt-[15px]'>Engrossed listening. Park gate sell they west hard for the.</p>
                <img src="/category/BottomLeftBgImg.png" alt="Bottom Left Background For Best Flight Category" className='absolute w-[100px] h-auto bottom-[-33px] left-[-35px] z-[-1]'></img>
            </div>
            <div className='w-[181px] text-center m-[44px]'>
                <img src={"/category/events.png"} alt="Local Events Category" className='w-auto h-[78px] m-auto'/>
                <p className='title font-[Open Sans] font-[600] text-[20px] leading-[27px] text-[#1E1D4C] mt-[29px]'>Local Events</p>
                <p className='description font-[Poppins] font-[500] text-[16px] leading-[26px] text-[#5E6282] mt-[15px]'>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
            </div>
            <div className='w-[181px] text-center m-[44px]'>
                <img src={"/category/customization.png"} alt="Customization Category" className='w-auto h-[78px] m-auto'/>
                <p className='title font-[Open Sans] font-[600] text-[20px] leading-[27px] text-[#1E1D4C] mt-[29px]'>Customization</p>
                <p className='description font-[Poppins] font-[500] text-[16px] leading-[26px] text-[#5E6282] mt-[15px]'>We deliver outsourced aviation services for military customers</p>
            </div>
        </div>
    </div>
  )
}
