import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div className='header flex justify-between h-[40px] mx-[141px] mt-[47px]'>
        <img src='/logo.png' alt="LOGO" />
        <ul className='tabs w-max flex items-center gap-12 font-sans font-[400] text-[17px] text-[#212832] leading-[22px]'>
           <li>Desitnations</li> 
           <li>Hotels</li> 
           <li>Flights</li> 
           <li>Bookings</li> 
           <li>Login</li> 
           <li><button className='border-[1px] border-[#212832] rounded-md py-[9px] px-[22px]'>Sign up</button></li> 
           <li>EN <span><FontAwesomeIcon icon={ faChevronDown } /></span> </li> 
        </ul>
    </div>
  )
}
