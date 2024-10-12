// import RiseInvestorsMobile from "../../assets/hero/investors-mobile.svg";
// import RiseInvestors from "../../assets/hero/investors.png";
import { MobileContent } from "./start-investing-now/MobileContent.tsx";
import { DesktopContent } from "./start-investing-now/DesktopContent.tsx";


export const StartInvestingNow = () => {
    return (
        <div className="container mx-auto max-w-6xl">
            <div>
                <h3 className="text-lg text-rise-grey-white font-bold md:hidden">
                    We are supported by
                </h3>
                {/* <img
                    className="investors block md:hidden"
                    src={RiseInvestorsMobile}
                    alt="techstars,Flutterwave, Convera, Ventures Platform and ARM"
                /> */}
                <div className="flex flex-1 items-center justify-center gap-x-6">

                </div>
            </div>
          <MobileContent />
          <DesktopContent />
        </div>
    );
};
