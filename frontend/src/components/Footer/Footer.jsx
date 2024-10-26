import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <>
            <footer className='flex flex-col mt-20 items-center text-neutral-400' style={{ background: 'linear-gradient(to top, #000000 , #2a2c2d)' }}>
                <div className='w-full p-2'>
                    <ul className='w-4/5 mx-auto p-5 flex justify-evenly'>
                        <li className='font-semibold cursor-pointer'>ABOUT US</li>
                        <li className='font-semibold cursor-pointer'>MOVIES</li>
                        <li className='font-semibold cursor-pointer'>AWARDS</li>
                        <li className='font-semibold cursor-pointer'>HELP</li>
                        <li className='font-semibold cursor-pointer'>CONTACT US</li>
                    </ul>
                </div>
                <hr className='border-t-2 border-neutral-500 w-11/12' />
                <div className='w-4/5 text-center my-4 p-3'>
                    <p className='font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis odio eligendi earum accusantium cum eos delectus sint temporibus iusto? Ratione veritatis exercitationem suscipit laborum quod, unde odio culpa dolorem quibusdam.</p>
                </div>
                <div className='flex flex-col items-center w-full my-4'>
                    <p className='font-semibold'>Follow us on</p>
                    <ul className='flex w-1/4 justify-evenly mt-2'>
                        <li className='cursor-pointer'><FacebookIcon></FacebookIcon></li>
                        <li className='cursor-pointer'><InstagramIcon></InstagramIcon></li>
                        <li className='cursor-pointer'><TwitterIcon></TwitterIcon></li>
                        <li className='cursor-pointer'><GoogleIcon></GoogleIcon></li>
                        <li className='cursor-pointer'><GitHubIcon></GitHubIcon></li>
                        <li className='cursor-pointer'><LinkedInIcon></LinkedInIcon></li>
                    </ul>
                </div>
                <div className='w-full text-center p-4 bg-black'><p className='font-semibold'><CopyrightIcon></CopyrightIcon> 2024 Copyright, All right reserved.</p></div>
            </footer>
        </>
    )
};

export default Footer;