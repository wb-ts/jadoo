import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  return (
    <div className='flex justify-between mx-[148px] mt-[18px]'>
      <div className='description max-w-[630px] mt-[112px]'>
        <p className='font-[Poppins] font-[700] text-[20px] uppercase text-[#DF6951] leading-[20px]'>Best Destinations around the world</p>
        <p className='w-[545px] font-[Volkhov] font-[700] text-[84px] leading-[89px] tracking-[-4px] mt-[20px]'>Travel, enjoy and live a new and full life</p>
        <p className='w-[477px] font-[Poppins] font-[500] text-[16px] text-[#5E6282] leading-[30px]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
        <div className='actions mt-[34px] flex gap-[44px]'>
          <button onClick={() => { }} className='bg-[#F1A501] shadow-[0_20px_35px_rgba(241,165,1,0.15)] py-[18px] px-[27px] rounded-md font-sans font-[500] text[18px] leading-[23px] text-[#FFFFFF]'>Find out more</button>
          <div className='flex items-center justify-between w-[165px]'>
            <div className='w-[52px] h-[52px] bg-[#DF6951] shadow-[0_15px_30px_rgba(223,105,81,0.3)] rounded-full pt-[16px] pl-[20px] cursor-pointer'>
              <FontAwesomeIcon icon={faPlay} color={"white"} width={"15px"} height={"15px"} />
            </div>
            <p className='font-[Poppins] font-[500] text-[17px] text-[#686D77]' >Play Demo</p>
          </div>
        </div>
      </div>
      <div className='photo'>
        <img src='/Traveller.png' alt='TravellerPhoto' className='w-[784px] h-auto' />
      </div>
    </div>
  )
}
