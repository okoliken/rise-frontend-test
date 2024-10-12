import { StoreButton } from "../ui/StoreButton"
import RiseAppMobile from '../../assets/svgs/rise-app-mobile.svg'
import RiseApp from '../../assets/rise-mobile-app.png'

export const DownloadRiseApp = () => {
    return (
        <section className="bg-rise-teal-4 mt-[2.5rem] lg:mt-[5rem] rounded-[3.125rem] pt-[2.563rem] px-[1.125rem] h-full flex items-center justify-center lg:flex-row lg:justify-between flex-col lg:pt-[2.313rem] lg:px-6">
            <div className="flex flex-1 items-center flex-col gap-y-4 text-center lg:text-left lg:items-start">
                <h4 className="text-teal-1 font-medium">Download The Rise App</h4>
                <p className="text-xl font-semibold tracking-tighter leading-6 text-rise-black lg:text-[2rem] lg:leading-[2.4rem]">Join our 100,000 users investing <br className="hidden md:block" /> and setting long term goals!</p>
                <p className="font-medium text-rise-body">Dollar investments that help you grow.</p>
                <div className="flex items-center justify-center lg:flex-row lg:items-start gap-x-4 lg:mt-[2rem]">
                    <StoreButton className="w-36 flex-1" storeType="apple" url="https://apps.apple.com/your-app" />
                    <StoreButton className="w-36 flex-1" storeType="google" url="https://play.google.com/store/apps/your-app" />
                </div>
            </div>

            <div className="mt-auto hidden lg:block lg:pr-[7.125rem]">
                <img src={RiseApp} className="hidden lg:block h-[26.576rem] object-cover" alt="rise mobile app" />
            </div>
            <div className="mt-auto pt-8 lg:pt-0 block lg:hidden">
                <img src={RiseAppMobile} className="block lg:hidden" alt="rise mobile app" />
            </div>
        </section>
    )
}