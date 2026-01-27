import Home from "@/components/Home/Home";
import LoaderWrapper from "@/components/Startup loader/LoaderWrapper";

export default function HomePage() {
  return (
    <LoaderWrapper>
      <div className="pt-15 md:pt-0 mx-auto lg:w-full text-center bg-[#F7F7F7] overflow-auto">
        <Home />
        
      </div>
    </LoaderWrapper>
  );
}
