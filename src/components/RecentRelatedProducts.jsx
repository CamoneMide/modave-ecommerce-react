import ProductCard from "./ProductCard";
import Container from "./Container";
import { recentRelateds } from "../constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const RecentRelatedProducts = ({ setCart }) => {
  return (
    <>
      <Container>
        <Tabs defaultValue={recentRelateds[0].id} className="w-full">
          <TabsList className="categTabs flex justify-start md:justify-center bg-transparent p-0 gap-[20px] lg:gap-[40px] mb-[20px] lg:mb-[40px]">
            {recentRelateds.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="relative font-medium text-[18px] md:text-[24px] lg:text-[30px] m-0 p-0 ring-0 text-[var(--text-color-inActive)] hover:text-[rgba(24,24,24,0.8)] data-[state=active]:font-semibold data-[state=active]:text-[var(--text-color)] border-b-2 border-transparent hover:border-[rgba(24,24,24,0.6)] data-[state=active]:border-[var(--text-color)] rounded-none shadow-none transition-all duration-300 ease-in-out focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:shadow-none"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {recentRelateds.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[30px] gap-x-[15px] lg:gap-x-[30px]">
                {tab.items.map((item) => (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    imgSrcFront={item.srcFront}
                    imgSrcBack={item.srcBack}
                    productName={item.name}
                    productPrice={item.price}
                    setCart={setCart}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </>
  );
};

export default RecentRelatedProducts;
