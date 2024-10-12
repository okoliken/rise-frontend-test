import { StoreButton } from "../ui/StoreButton"
import RiseAppMobile from '../../assets/svgs/rise-app-mobile.svg'

export const DownloadRiseApp = () => {
    return (
        <section className="bg-rise-teal-4 mt-[2.5rem] rounded-[3.125rem] pt-[2.563rem] px-[1.125rem] h-full flex items-center justify-center flex-col">
            <div className="flex items-center flex-col gap-y-4 text-center">
                <h4 className="text-teal-1 font-medium">Download The Rise App</h4>
                <p className="text-xl font-semibold tracking-tighter leading-6 text-rise-black">Join our 100,000 users investing and setting long term goals!</p>
                <p className="font-medium text-rise-body">Dollar investments that help you grow.</p>
                <div className="flex items-center justify-center gap-x-4">
                    <StoreButton className="w-36" storeType="apple" url="https://apps.apple.com/your-app" />
                    <StoreButton className="w-36" storeType="google" url="https://play.google.com/store/apps/your-app" />
                </div>
            </div>

            <div className="mt-auto pt-8 lg:pt-0">
                <img src={RiseAppMobile} alt="rise mobile app" />
            </div>
        </section>
    )
}