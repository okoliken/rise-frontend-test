import RiseTeamMobile from '../../assets/rise-team-mobile.png'
import { Button } from '../ui/Button'
export const JoinRiseCommunity = () => {
    return (
        <div className='mt-[7.25rem] flex items-center flex-col container mx-auto max-w-lg lg:max-w-full lg:flex-row-reverse lg:gap-x-[5.625rem] lg:justify-between'>

            <div className='flex-1'>
                <img src={RiseTeamMobile} className='w-fit' alt="team at rise" />
            </div>
            <div className='text-center lg:text-left mt-[2.063rem] flex-1'>
                <div className='mb-[2rem]'>
                <h3 className='text-[2rem] font-semibold tracking-tighter leading-[1.8rem] mb-[0.625rem]'>Join the Rise Community</h3>
                <p className='block lg:hidden'>If you want to go far, go together.</p>
                <p className='hidden lg:block'>If you want to go far, go together. Our Telegram community <br className="hidden md:block" /> surrounds you with others who can help you along your financial <br className="hidden md:block" /> journey with tips, support, advice and learning. It's completely <br className="hidden md:block" /> free and open to new and seasoned investors.</p>
                </div>
                <Button className='!mt-[2rem] !w-[13.625rem] font-semibold' variant='secondary'>
                  Join our Community
                </Button>
            </div>
        </div>
    )
}