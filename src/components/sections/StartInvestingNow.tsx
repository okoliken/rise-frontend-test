import RiseInvestors from "../../assets/hero/investors.svg";
import InvestDollarsMobile from "../../assets/start-investing-now/invest-dollars-mobile.svg";
import ChooseWhatsBestMobile from "../../assets/start-investing-now/choose-whats-best-mobile.svg";
import SetInvestmentGoals from '../../assets/start-investing-now/set-investment-goals-mobile.svg'

export const StartInvestingNow = () => {
    return (
        <div className="container mx-auto max-w-6xl px-4">
            <div>
                <h3 className="text-lg text-rise-grey-white font-bold md:hidden">
                    We are supported by
                </h3>
                <img
                    className="investors"
                    src={RiseInvestors}
                    alt="techstars,Flutterwave, Convera, Ventures Platform and ARM"
                />
            </div>

            <div className="flex items-center flex-col-reverse lg:flex-row lg:justify-between pt-[2.525rem]">
                <div className="text-center lg:text-left">
                    <h4 className="text-rise-black font-semibold text-xl pb-3">Superior Performance</h4>
                    <p className="text-rise-body leading-6">
                        Rise outperforms your other alternatives in two ways. The first is
                        through our expert, algorithm driven investment approach that picks
                        through over 3,000 data sets to find the perfect investment for you.{" "}
                    </p>
                </div>
                <div>
                    <img src={InvestDollarsMobile} alt="invest in dollars" />
                </div>
            </div>
            <div className="flex items-center flex-col-reverse lg:flex-row lg:justify-between pt-[2.525rem]">
                <div className="text-center lg:text-left">
                    <h4 className="text-rise-black font-semibold text-xl pb-3">Personalization</h4>
                    <p className="text-rise-body leading-6">
                        No two people are the same, and everyone’s financial goals are different. Rise understands this, which is why we tailor your journey to financial freedom to fit you.
                    </p>
                </div>
                <div>
                    <img src={ChooseWhatsBestMobile} alt="invest in " />
                </div>
            </div>
            <div className="flex items-center flex-col-reverse lg:flex-row lg:justify-between pt-[2.525rem]">
                <div className="text-center lg:text-left">
                    <h4 className="text-rise-black font-semibold text-xl pb-3">Diversification</h4>
                    <p className="text-rise-body leading-6">
                    Rise offers a choice of three asset classes: US equities, US real estate and fixed income assets to provide stability to your investments and protection from market declines. You can pick one asset class or
                    </p>
                </div>
                <div>
                    <img src={SetInvestmentGoals} alt="invest in " />
                </div>
            </div>
        </div>
    );
};
