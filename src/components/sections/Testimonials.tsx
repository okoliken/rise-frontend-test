import Jesse from '../../assets/jesse.png'
import Rayan from '../../assets/rayan.png'
import Jeff from '../../assets/mee.jpg'

export const Testimonials = () => {

    const testimonials = [
        {
            name: "Lade",
            text: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
            image: Jesse
        },
        {
            name: "Jesse",
            text: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
            image: Jeff
        },
        {
            name: "Raye",
            text: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
            image: Rayan
        },
        {
            name: "Raye",
            text: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
            image: Jeff
        },
    ];



    return (
        <section className="mt-[5rem]">
            <div className="text-center">
                <h3 className="text-[2rem] lg:text-[2.5rem] font-semibold text-rise-teal-2 mb-4 leading-[1.8rem]">
                    <span className="hidden lg:block">From The People Who Use Rise</span>
                    <span className="block lg:hidden">What our customers are saying</span>
                </h3>
                <p className="text-rise-body text-lg tracking-tighter leading-[1.465rem] hidden lg:block">Our mission at Risevest is to empower more people just like you <br className="hidden md:block" /> to achieve your personal financial goals.</p>
                <p className="text-rise-body text-base tracking-tighter leading-[1.465rem] block lg:hidden">We serve over 80,000 amazing users.</p>
            </div>

            <div className="scroll-container flex items-center justify-between gap-x-6 mt-[2.5rem] overflow-x-scroll overflow-y-hidden">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex-shrink-0 flex flex-col bg-white border lg:w-[25.563rem] lg:h-[15.5rem] border-rise-teal-4 justify-between w-[26.5rem] gap-y-[4.5rem] p-6 rounded-[0.625rem] shadow-rise-drop-shadow">
                        <p className="text-rise-body leading-6">{testimonial.text}.</p>
                        <div className="flex items-center gap-x-4">
                            <img className='h-8 w-8 rounded-full' src={testimonial.image} alt={testimonial.name} />
                            <p className="text-rise-black font-semibold">{testimonial.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}