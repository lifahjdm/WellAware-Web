import React from "react";
import round from "../assets/images/Rectangle 4.svg";
import news from "../assets/images/monkeypox.svg";
import info from "../assets/images/informasi.svg";
import wilayah from "../assets/images/pantauan.svg";
import kuis from "../assets/images/kuis.svg";
import footer from "../assets/images/footer.svg";
import who from "../assets/images/who.svg";
import city from "../assets/images/city.svg";

const HomePage = () => {
  return (
    <div>
      {/* Bagian Gambar Latar */}
      <section className="bg-[{round}]">
        <img src={round} alt="round" className="w-full" />
      </section>

      {/* Teks di atas gambar */}
      <div>
        <section>
          <div className="absolute top-40 ml-20">
            <h1 className="text-sm font-medium text-[#4361EE] ml-12">
              Basic Health Information
            </h1>
            <h2 className="text-4xl font-semibold text-[#0B090A] mt-2 ml-12">
              Stay Informed
            </h2>
            <h2 className="text-4xl font-semibold text-[#0B090A] ml-12">
              Stay Healthy..!
            </h2>
            <p className="text-sm font-regular text-[#808080] mt-4 ml-12">
              Dapatkan informasi kesehatan terpercaya yang dirancang untuk
            </p>
            <p className="text-sm font-regular text-[#808080] ml-12">
              membantu Anda dan keluarga menjaga kesehatan optimal.
            </p>
            <img src={news} alt="news" />
          </div>
        </section>
      </div>

      <section>
        <div className="bg-white py-20">
        </div>
      </section>

      {/* Bagian Konten Baru */}
      <section>  
        <img
        src={who}
        alt="who"
        />
      </section>

      <section>
        <div className="bg-white py-20">
        </div>
      </section>

      {/* Bagian Our Services */}
      <section className="bg-[#CBE5CA] py-16">
        <div className="text-center font-medium mb-10">
          <h2 className="text-xl font-medium text-[#2B2B2B]">OUR SERVICES</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20">
          <div>
            <img src={info} alt="info" />
          </div>
          <div className="flex justify-center mb-4">
            <img src={wilayah} alt="wilayah" />
          </div>
          <div className="flex justify-center mb-4">
            <img src={kuis} alt="kuis" />
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white py-20">
        </div>
      </section>

      {/* Bagian Areas Across the Country */}
      <section>  
        <img
        src={city}
        alt="city"
        />
      </section>

      <section>
        <div className="bg-white py-20">
        </div>
      </section>

      <section>  
        <img
        src={footer}
        alt="footer"
        />
      </section>

    </div>
  );
};

export default HomePage;
