import { Link } from "react-router-dom";
import { PageNavBtns, TopHeroReUse } from "../components";
import { newsSects } from "../constants";
import { Calendar, User } from "lucide-react";
import { FadeUp } from "../animations";

const Blogs = () => {
  return (
    <section className="">
      <div>
        <TopHeroReUse text={"Blog"} />
      </div>

      <div className="py-[80px] w-full bg-[var(--text-color-white)] px-[20px] md:px-[30px] lg:px-0">
        <div className="mx-auto w-full max-w-[1290px]">
          <section data-scroll-section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[30px] gap-x-[15px] lg:gap-x-[30px]">
              {newsSects.map((newsSect) => (
                <div
                  key={newsSect.id}
                  className="flex flex-col overflow-hidden"
                >
                  <FadeUp
                    distance={40}
                    duration={0.4}
                    delay={0.06 * newsSect.id}
                    className="flex flex-col w-full h-full gap-[12px] newsMain"
                  >
                    <div className="flex flex-col w-full h-full md:max-h-[240px] lg:max-h-[410px] overflow-hidden rounded-[12px] mb-[4px]">
                      <img
                        src={newsSect.src}
                        alt="blog-pic"
                        className="object-cover w-full h-full newsImg"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex items-center gap-[33px] text-[14px] text-[var(--text-color)] mb-[4px]">
                        <div className="flex items-center gap-2 ">
                          <Calendar size={16} />
                          <span>
                            {newsSect.month}
                            {"   "}
                            {newsSect.day}, 2025
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User size={16} />
                          <span>by {newsSect.author}</span>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${newsSect.id}`}
                        className="text-[var(--text-color)] navTrans hover:text-[var(--text-color-active)] text-[16px] md:text-[18px] lg:text-[20px] newsLink p-0"
                      >
                        {newsSect.title}
                      </Link>
                      <p className="text-[16px] text-[var(--text-color-inActive)]">
                        {newsSect.text}
                      </p>
                    </div>
                  </FadeUp>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-[40px]">
            <PageNavBtns />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
