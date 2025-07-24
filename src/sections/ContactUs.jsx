import { Button, Container, TopHeroReUse } from "../components";

const ContactUs = () => {
  return (
    <section className="">
      <div>
        <TopHeroReUse text={"Contact"} />
      </div>

      <div className="py-[60px] lg:py-[80px] w-full bg-[var(--text-color-white)]">
        <Container>
          <section data-scroll-section>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-[30px] lg:gap-[60px]">
              <div className="flex flex-col gap-[24px] md:col-span-3 lg:col-span-2">
                <div className="flex flex-col gap-[6px]">
                  <h4 className="text-[18px] md:text-[24px] lg:text-[30px] text-[var(--text-color)] font-[500]">
                    Get In Touch
                  </h4>
                  <p className="text-[16px] text-[var(--text-color-reduced)] font-[400]">
                    Use the form below to get in touch with the sales team
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-row gap-[16px] items-center justify-between">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Your Name*"
                      className="w-full text-[16px] text-[var(--text-color)] py-[9px] px-[16px] rounded-[8px] border-[2px] border-[#E9E9E9] hover:border-[var(--text-color)] transition-all duration-300 ease-in-out"
                    />
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Your Email*"
                      className="w-full text-[16px] text-[var(--text-color)] py-[9px] px-[16px] rounded-[8px] border-[2px] border-[#E9E9E9] hover:border-[var(--text-color)] transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex w-full h-[160px]">
                    <textarea
                      name=""
                      id=""
                      placeholder="Your Message*"
                      className="size-full text-[16px] text-[var(--text-color)] py-[9px] px-[16px] rounded-[8px] border-[2px] border-[#E9E9E9] hover:border-[var(--text-color)] transition-all duration-300 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="flex">
                  <Button href={"/"} text={"Send Message"} lite={false} />
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <h4 className="text-[18px] md:text-[24px] lg:text-[30px] text-[var(--text-color)] font-[500] mb-[10px]">
                  Information
                </h4>
                <div className="flex flex-col gap-[8px]">
                  <h6 className="text-[16px] text-[var(--text-color)] font-[400]">
                    Phone:
                  </h6>
                  <p className="text-[16px] text-[var(--text-color-inActive)] font-[400]">
                    +234 903 003 2512
                  </p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h6 className="text-[16px] text-[var(--text-color)] font-[400]">
                    Email:
                  </h6>
                  <p className="text-[16px] text-[var(--text-color-inActive)] font-[400]">
                    ayomidemejidade@gmail.com
                  </p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h6 className="text-[16px] text-[var(--text-color)] font-[400]">
                    Address:
                  </h6>
                  <p className="text-[16px] text-[var(--text-color-inActive)] font-[400]">
                    2163 Phillips Gap Rd, West Jefferson, Lagos State.
                  </p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h6 className="text-[16px] text-[var(--text-color)] font-[400]">
                    Open Time:
                  </h6>
                  <p className="text-[16px] text-[var(--text-color-inActive)] font-[400]">
                    Mon - Sat: 7:30am - 8:00pm GMT
                  </p>
                  <p className="text-[16px] text-[var(--text-color-inActive)] font-[400]">
                    Sunday: 9:00am - 5:00pm GMT
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </section>
  );
};

export default ContactUs;
