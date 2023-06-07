import { FaFacebookF, FaInstagram, FaLinkedinIn,  } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
        <footer className='grid md:grid-cols-4 gap-10 bg-black text-white px-10 py-32'>
            <div>
                <h1 className='text-3xl font-bold pb-5'>ACT SCHOOL</h1>
                <div className='flex space-x-4'>
                    <FaFacebookF/>
                    <FaInstagram/>
                    <FaLinkedinIn/>
                </div>
            </div>
            <div>
                <h1 className='font-bold pb-5 text-lg text-gray-300'>Support</h1>
                <ul>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>Routine</li>
                    <li>Location</li>
                    <li>Productions</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold pb-5 text-lg text-gray-300'>More</h1>
                <ul>
                    <li>About ACT SCHOOL</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Legal Issues</li>
                    <li>Pre Booking</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold pb-5 text-lg text-gray-300'>Stay update from our newsletter</h1>
                
            </div>            
        </footer>
        
        </>
    );
};

export default Footer;