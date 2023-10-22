// BannerSlider.js

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Bracelate from "../assets/image/bracelate-banner.jpg";
import Magalsutra from "../assets/image/maglesutra-banner.jpg";
import Errings from "../assets/image/erring-banner.jpg";
import Rings from "../assets/image/rings-banner.jpg";

function BannerSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="pl-[20px] pr-[60px] mt-[40px]">
      <Carousel
        responsive={responsive}
        interval={7000}
        className="mt-2"
        height={600}
        width={850}
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}
      >
        <div className="slider-box  gap-5 ml-[101px]">
          <div className="w-[50%] pr-">
            <b className="text-red-500 text-[30px]">Wedding Necklace </b>
            <p className="text-start">
              Elevate your special day with our exquisite collection of wedding
              necklaces. Crafted with precision and adorned with the finest
              quality gold, our wedding necklaces are a timeless expression of
              love and commitment. Each piece is a unique blend of tradition and
              contemporary design, making it the perfect choice to complete your
              bridal ensemble. Our gold wedding necklaces are meticulously
              designed to complement a variety of bridal styles, from classic to
              modern. Whether you prefer intricate designs with detailed
              craftsmanship or minimalistic elegance, our collection offers a
              wide range of options to suit your taste. With the brilliance of
              gold and the allure of stunning gemstones, our wedding necklaces
              capture the essence of your love story. They are not just jewelry;
              they are symbols of eternal devotion. Make your wedding day
              unforgettable with the perfect gold necklace that symbolizes your
              everlasting love. Explore our collection and find the necklace
              that will adorn your neck and your heart on your special day.
            </p>
          </div>
          <div className="pl-[40px] pr-[20px]">
            {" "}
            <img
              src={Magalsutra}
              alt="Jewelry 1"
              className="!w-[400px] !h-[400px] mt-5 "
            />
          </div>
        </div>
        <div className="slider-box  gap-5 ml-[101px]">
          <div className="w-[50%] ">
            <b className="text-red-500 text-[30px]">Errings</b>
            <p className="text-start">
              Our exquisite collection of gold earrings is a testament to
              timeless elegance and exquisite craftsmanship. Each piece has been
              meticulously designed to adorn your ears with grace and
              sophistication, making a statement that reflects your unique
              personality and taste. Crafted from the finest 18k or 14k gold,
              our earrings showcase a blend of classic and contemporary designs,
              ensuring there's something for every occasion. From dazzling
              diamond-studded studs to intricate filigree dangles, our gold
              earrings come in a variety of styles, catering to both understated
              elegance and bold glamour. Indulge in the warm and lustrous glow
              of gold, a precious metal that symbolizes enduring love and
              timeless beauty. Whether you're looking for a perfect gift or a
              personal indulgence, our collection of gold earrings promises to
              enchant, captivate, and elevate your style to new heights. Explore
              our exquisite range of gold earrings today and discover the
              perfect pair that will add a touch of luxury to your everyday
              attire and make you the center of attention at every special
              moment.
            </p>
          </div>
          <div className="pl-[40px] pr-[20px]">
            {" "}
            <img
              src={Errings}
              alt="Jewelry 1"
              className="!w-[400px] !h-[400px] mt-5 "
            />
          </div>
        </div>
        <div className="slider-box  gap-5 ml-[101px]">
          <div className="w-[50%] ">
            <b className="text-red-500 text-[30px]">Bracelate</b>
            <p className="text-start">
              Discover timeless elegance with our exquisite Gold Bracelets.
              Crafted with precision and adorned with the richness of 18-karat
              gold, these bracelets are more than just jewelry; they are a
              symbol of sophistication and style. Whether you're looking for a
              delicate piece to complement your everyday attire or a statement
              bracelet to make a lasting impression, our collection offers a
              range of designs to suit your unique taste. Elevate your wrist
              with the warmth and luster of pure gold, an investment in beauty
              that will be cherished for generations to come.
            </p>
          </div>
          <div className="pl-[40px] pr-[20px]">
            <img
              src={Bracelate}
              alt="Jewelry 1"
              className="!w-[400px] !h-[400px] mt-5 "
            />
          </div>
        </div>
        <div className="slider-box  gap-5 ml-[101px]">
          <div className="w-[50%] ">
            <b className="text-red-500 text-[30px]">Rings</b>
            <p className="text-start">
              Discover a world of exquisite craftsmanship and timeless beauty
              with our stunning collection of gold rings. Each ring tells a
              unique story, reflecting both tradition and modern elegance.
              Crafted from the finest materials, our gold rings are a testament
              to the artistry of our skilled jewelers. From classic solitaires
              to intricate designs adorned with precious gemstones, our rings
              are designed to capture the essence of sophistication and style.
              Whether you're celebrating a special occasion or simply treating
              yourself, our rings are a symbol of enduring love and lasting
              beauty. Choose a piece that resonates with your heart and let our
              gold rings be the perfect companion to your journey of elegance
              and grace.
            </p>
          </div>
          <div className="pl-[40px] pr-[20px]">
            <img
              src={Rings}
              alt="Jewelry 1"
              className="!w-[400px] !h-[400px] mt-5 "
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default BannerSlider;
