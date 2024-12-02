import React from "react"
import image from "../assets/images/image.svg";
import us from "../assets/images/1.svg";
import well from "../assets/images/2.svg";
import team from "../assets/images/3.svg";
import footer from "../assets/images/footer.svg";

const AboutUsPage = () => {
  return (
    <div>
      <section>
        <div className="bg-white py-10">
        </div>
      </section>
      {/* Bagian Gambar Latar */}
      <section>
        <img src={image} alt="image" 
        className="w-full img-center"/>
      </section>
      <section>
        <img src={us} alt="us" className="w-full"/>
      </section>
      <section>
        <img src={well} alt="well" className="w-full"/>
      </section>
      <section>
        <img src={team} alt="team" className="w-full"/>
      </section>
      <section>
        <div className="bg-white py-10">
        </div>
      </section>
      <section>
        <img src={footer} alt="footer" className="w-full mt-10"/>
      </section>
    </div>
  )
}

export default AboutUsPage



