import Stock from '../../assets/svgs/stock.svg'
import RealEstate from '../../assets/svgs/real-estate.svg'
import FixedIncome from '../../assets/svgs/fixed-income.svg'
import BuildFuture from '../../assets/build-future.png'
import { Button } from '../ui/Button';

export const AssetClasses = () => {
    return (
        <section className="pt-[6.25rem]" aria-labelledby="asset-classes-heading">
            <div className="flex items-center justify-center flex-col pb-8">
                <h3 className="text-rise-black text-[2rem] font-semibold">
                    Asset Classes
                </h3>
                <p className="text-lg text-rise-black text-center tracking-tighter leading-[1.465rem]">
                    It’s your money, choose where <br className="block lg:hidden" /> you
                    invest it
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[2.875rem] md:gap-x-[2.875rem] container mx-auto mzx-w-lg" role="list">
                <article role="listitem" className="border-2 border-rise-border rounded-[0.313rem] h-full pb-[2.563rem]">
                    <div className="h-[9.375rem] bg-rise-orange-1 relative flex items-center justify-center">
                        <div className="h-[7.188rem] w-[7.188rem] bg-white rounded-full absolute bottom-0 transform translate-y-[4.813rem] flex items-center justify-center">
                            <img src={Stock} alt="Stocks" />
                        </div>
                    </div>
                    <div className="mt-[4.563rem] text-center p-1.5 flex items-center flex-col gap-y-4">
                        <h4 className="text-2xl font-semibold">Stocks</h4>
                        <p className="text-rise-body leading-6 text-center px-3">
                            We help you invest and manage your money by investing in our
                            portfolio of 30 high-growth stocks across the US market with our
                            equity portfolio of power stocks.
                        </p>
                    </div>
                    <p className="text-center text-rise-body p-1.5"><span className="text-[#919fb5]">Historical returns:</span> 14% per annum

                        <span className="text-[#919fb5]"> Risk Level: Medium</span>
                    </p>

                    <div className="flex items-center justify-center transform lg:translate-y-11">
                        <p className="text-teal-1 text-center font-semibold flex items-center justify-center gap-x-2.5 pt-6 cursor-pointer hover:underline">
                            <span>Learn how Stocks work</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M1.07107 9.55636C1.26623 9.75152 1.58301 9.75152 1.77817 9.55636L8.83139 2.50314L8.70305 7.77639C8.69633 8.05216 8.91412 8.28162 9.19077 8.28851C9.4669 8.29523 9.696 8.07709 9.70272 7.80096L9.84927 1.77836C9.84927 1.51107 9.74532 1.26005 9.55635 1.07108C9.36755 0.882278 9.11635 0.778157 8.83704 0.77851L2.82664 0.924881C2.55051 0.931598 2.33254 1.16088 2.33908 1.43683C2.34545 1.71295 2.57491 1.93109 2.85103 1.92438L8.13559 1.78472L1.07107 8.84925C0.875905 9.04441 0.875905 9.3612 1.07107 9.55636Z"
                                    fill="#07969E"
                                />
                            </svg>
                        </p>
                    </div>
                </article>
                <article className="border-2 border-rise-border rounded-[0.313rem] h-full pb-[2.563rem]">
                    <div className="h-[9.375rem] bg-rise-indigo-1 relative flex items-center justify-center">
                        <div className="h-[7.188rem] w-[7.188rem] bg-white rounded-full absolute bottom-0 transform translate-y-[4.813rem] flex items-center justify-center">
                            <img src={RealEstate} alt="Stocks" />
                        </div>
                    </div>
                    <div className="mt-[4.563rem] text-center p-1.5 flex items-center flex-col gap-y-4">
                        <h4 className="text-2xl font-semibold">Real Estate</h4>
                        <p className="text-rise-body leading-6 text-center px-3">
                            Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.
                        </p>
                    </div>
                    <p className="text-center text-rise-body p-1.5"><span className="text-[#919fb5]">Historical returns:</span> 14% per annum

                        <span className="text-[#919fb5]"> Risk Level: Medium</span>
                    </p>

                    <div className="flex items-center justify-center transform lg:translate-y-11">
                        <p className="text-teal-1 text-center font-semibold flex items-center justify-center gap-x-2.5 pt-6 cursor-pointer hover:underline">
                            <span>Learn how Real Estate work</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M1.07107 9.55636C1.26623 9.75152 1.58301 9.75152 1.77817 9.55636L8.83139 2.50314L8.70305 7.77639C8.69633 8.05216 8.91412 8.28162 9.19077 8.28851C9.4669 8.29523 9.696 8.07709 9.70272 7.80096L9.84927 1.77836C9.84927 1.51107 9.74532 1.26005 9.55635 1.07108C9.36755 0.882278 9.11635 0.778157 8.83704 0.77851L2.82664 0.924881C2.55051 0.931598 2.33254 1.16088 2.33908 1.43683C2.34545 1.71295 2.57491 1.93109 2.85103 1.92438L8.13559 1.78472L1.07107 8.84925C0.875905 9.04441 0.875905 9.3612 1.07107 9.55636Z"
                                    fill="#07969E"
                                />
                            </svg>
                        </p>
                    </div>
                </article>
                <article role="listitem" className="border-2 border-rise-border rounded-[0.313rem] h-full pb-[2.563rem]">
                    <div className="h-[9.375rem] bg-rise-teal-4 relative flex items-center justify-center ">
                        <div className="h-[7.188rem] w-[7.188rem] bg-white rounded-full absolute bottom-0 transform translate-y-[4.813rem] flex items-center justify-center">
                            <img src={FixedIncome} alt="Stocks" />
                        </div>
                    </div>
                    <div className="mt-[4.563rem] text-center p-1.5 flex items-center flex-col gap-y-4">
                        <h4 className="text-2xl font-semibold">Fixed Income</h4>
                        <p className="text-rise-body leading-6 text-center px-3">
                            A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.

                        </p>
                    </div>
                    <p className="text-center text-rise-body p-1.5"><span className="text-[#919fb5]">Historical returns:</span> 14% per annum

                        <span className="text-[#919fb5]"> Risk Level: Medium</span>
                    </p>

                    <div className="flex items-center justify-center">
                        <p className="text-teal-1 text-center font-semibold flex items-center justify-center gap-x-2.5 pt-6 cursor-pointer hover:underline">
                            <span>Learn how Fixed Income work</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M1.07107 9.55636C1.26623 9.75152 1.58301 9.75152 1.77817 9.55636L8.83139 2.50314L8.70305 7.77639C8.69633 8.05216 8.91412 8.28162 9.19077 8.28851C9.4669 8.29523 9.696 8.07709 9.70272 7.80096L9.84927 1.77836C9.84927 1.51107 9.74532 1.26005 9.55635 1.07108C9.36755 0.882278 9.11635 0.778157 8.83704 0.77851L2.82664 0.924881C2.55051 0.931598 2.33254 1.16088 2.33908 1.43683C2.34545 1.71295 2.57491 1.93109 2.85103 1.92438L8.13559 1.78472L1.07107 8.84925C0.875905 9.04441 0.875905 9.3612 1.07107 9.55636Z"
                                    fill="#07969E"
                                />
                            </svg>
                        </p>
                    </div>
                </article>
            </div>

            <div className='hidden lg:flex items-center lg:gap-x-[8rem] pt-[5rem] pb-[3rem]'>
                <img className='w-[23.5rem] flex-1' src={BuildFuture} alt="build wealth" />

                <div className='flex-1'>
                    <span className='pb-[0.5rem] text-lg font-medium'>The  Rise App</span>
                    <h4 className='pb-4 text-[2.5rem] text-rise-black font-semibold tracking-tighter leading-[3rem]'>Save for your <span className='text-[#8c5ff8]'>future</span></h4>
                    <p className='text-rise-body leading-6'>With Rise, you achieve your financial goals faster. Save <br className="hidden lg:block" /> for school, your home, vacations, your children’s <br className="hidden lg:block" /> future and more.
                    </p>

                    <Button className='!mt-[2rem] w-full !max-w-[10rem] font-semibold'>
                      Start Saving
                     </Button>
                </div>
            </div>
        </section>
    );
};
