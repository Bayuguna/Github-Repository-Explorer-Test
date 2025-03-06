import BSearch from "@/components/molecules/search";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Routing from "@/utils/constanta/page_route";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col w-full justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-1">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          <TextGenerateEffect words={`Github Repository Explorer`} />
        </h1>
        <div className="text-sm lg:text-base text-gray-600">
          <TextGenerateEffect
            words={`Instantly search for repositories on Github`}
            duration={0.8}
          />
        </div>
      </div>
      <div className="py-6 w-full lg:w-1/2">
        <BSearch
          placeholder="Search for repositories..."
          onClick={(value) => {
            value && nav(`${Routing.REPOSITORY}?q=${value}`);
          }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
