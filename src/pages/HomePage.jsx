import round from "../assets/images/Rectangle 4.svg";
import info from "../assets/images/informasi.svg";
import wilayah from "../assets/images/pantauan.svg";
import kuis from "../assets/images/kuis.svg";
import footer from "../assets/images/footer.svg";
import who from "../assets/images/who.svg";
import city from "../assets/images/city.svg";
import Carousel from "../components/Carousel";

const carouselImages = [
  "https://r3lifewellness.com/static/media/news/2024/02/28/00/71e8/1709054977.5489.r3_re%202%20boost%20your%20immunity%20to%20prevent%20monkeypox.jpg",
  "https://r3lifewellness.com/static/media/news/2024/02/28/00/4a08/1709054977.5451.r3_re%202%20boost%20your%20immunity%20to%20prevent%20monkeypox%201.jpg",
];

const HomePage = () => {
  return (
    <div>
      {/* Main Content Section */}
      <section className="relative py-20">
        <div className="flex justify-between items-center px-12 h-screen container mx-auto">
          {/* Text Section */}
          <div className="space-y-4 w-1/2">
            <h1 className="text-sm font-medium text-[#4361EE]">
              Basic Health Information
            </h1>
            <h2 className="text-4xl font-semibold text-[#0B090A]">
              Stay Informed
            </h2>
            <h2 className="text-4xl font-semibold text-[#0B090A]">
              Stay Healthy..!
            </h2>
            <p className="text-sm font-regular text-[#808080]">
              Dapatkan informasi kesehatan terpercaya yang dirancang untuk
            </p>
            <p className="text-sm font-regular text-[#808080]">
              membantu Anda dan keluarga menjaga kesehatan optimal.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="w-1/2">
            <Carousel images={carouselImages} style="rounded-xl" />
          </div>
        </div>

        {/* Overlay Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={round}
            alt="round background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </section>

      {/* Empty Section for Spacing */}
      <section className="bg-white py-20"></section>

      {/* WHO Content Section */}
      <section className="py-20">
        <img src={who} alt="who" className="w-full" />
      </section>

      <section className="bg-white py-20"></section>

      {/* Our Services Section */}
      <section className="bg-[#CBE5CA] py-16">
        <div className="text-center font-medium mb-10">
          <h2 className="text-xl font-medium text-[#2B2B2B]">OUR SERVICES</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20">
          <div className="flex justify-center">
            <img src={info} alt="info" className="w-full" />
          </div>
          <div className="flex justify-center">
            <img src={wilayah} alt="wilayah" className="w-full" />
          </div>
          <div className="flex justify-center">
            <img src={kuis} alt="kuis" className="w-full" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20"></section>

      {/* Areas Across the Country Section */}
      <section>
        <img src={city} alt="city" className="w-full" />
      </section>

      <section className="bg-white py-20"></section>

      {/* Footer Section */}
      <section>
        <img src={footer} alt="footer" className="w-full" />
      </section>
    </div>
  );
};

export default HomePage;
