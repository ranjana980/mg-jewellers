import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Mangsutra1 from "../assets/image/mangle-sutra1.jpeg";
import Mangsutra2 from "../assets/image/mangle-sutra2.jpeg";
import Mangsutra3 from "../assets/image/mangle-sutra3.jpeg";
import Mangsutra4 from "../assets/image/mangle-sutra4.jpeg";
import Mangsutra5 from "../assets/image/mangle-sutra5.jpeg";
import Mangsutra6 from "../assets/image/mangle-sutra6.jpeg";
import Mangsutra7 from "../assets/image/mangle-sutra7.jpeg";
import Mangsutra8 from "../assets/image/mangle-sutra8.jpeg";

import Erring1 from '../assets/image/erring1.jpeg'
import Erring2 from '../assets/image/erring2.jpeg'
import Erring3 from '../assets/image/erring3.jpeg'
import Erring4 from '../assets/image/erring4.jpeg'
import Erring5 from '../assets/image/erring5.jpeg'
import Erring6 from '../assets/image/erring6.jpeg'
import Erring7 from '../assets/image/erring7.jpeg'
import Erring8 from '../assets/image/erring8.jpeg'

import PendalSet1 from '../assets/image/pendal-set 1.jpeg'
import PendalSet2 from '../assets/image/pendal-set2.jpeg'
import PendalSet3 from '../assets/image/pendal-set3.jpeg'
import PendalSet4 from '../assets/image/pendal-set4.jpeg'
import PendalSet5 from '../assets/image/pendal-set5.jpeg'
import PendalSet6 from '../assets/image/pendal-set6.jpeg'
import PendalSet7 from '../assets/image/pendal-set7.jpeg'
import PendalSet8 from '../assets/image/pendal-set8.jpeg'

import Bracelets1 from '../assets/image/bracelates1.jpeg'
import Bracelets2 from '../assets/image/bracelates2.jpeg'
import Bracelets3 from '../assets/image/bracelates3.jpeg'
import Bracelets4 from '../assets/image/bracelates4.jpeg'
import Bracelets5 from '../assets/image/bracelates5.jpeg'
import Bracelets6 from '../assets/image/bracelates6.jpeg'
import Bracelets7 from '../assets/image/bracelates7.jpeg'
import Bracelets8 from '../assets/image/bracelates8.jpeg'

import Ring1 from '../assets/image/ring1.jpeg'
import Ring2 from '../assets/image/ring2.jpeg'
import Ring3 from '../assets/image/ring3.jpeg'
import Ring4 from '../assets/image/ring4.jpeg'
import Ring5 from '../assets/image/ring5.jpeg'
import Ring6 from '../assets/image/ring6.jpeg'
import Ring7 from '../assets/image/ring7.jpeg'
import Ring8 from '../assets/image/ring8.jpeg'

import Chain1 from '../assets/image/chain1.jpeg'
import Chain2 from '../assets/image/chain2.jpeg'
import Chain3 from '../assets/image/chain3.jpeg'
import Chain4 from '../assets/image/chain4.jpeg'
import Chain5 from '../assets/image/chain5.jpeg'
import Chain6 from '../assets/image/chain6.jpeg'
import Chain7 from '../assets/image/chain7.jpeg'
import Chain8 from '../assets/image/chain8.jpeg'


export default function JewelrySection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="pl-[60px] pr-[60px] mt-[40px] xs:mt-[0px]">
      <b className="text-[35px] text-start text-red-500">Wedding Necklaces</b>
      <Carousel
        responsive={responsive}
        interval={7000}
        className="mt-2"
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}
      >
        <div>
          {" "}
          <img src={Mangsutra1} className="p-5" />
        </div>

        <div>
          {" "}
          <img src={Mangsutra2} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Mangsutra3} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Mangsutra4} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Mangsutra5} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Mangsutra6} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Mangsutra7} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Mangsutra8} className="p-5" />
        </div>
      </Carousel>
      <b className="text-[35px] text-start text-red-500 mt-5">Errings</b>
      <Carousel
        responsive={responsive}
        interval={7000}
        className="mt-2"
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}
      >
        <div>
          {" "}
          <img src={Erring1} className="p-5" />
        </div>

        <div>
          {" "}
          <img src={Erring2} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Erring3} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Erring4} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Erring5} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Erring6} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Erring7} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Erring8} className="p-5" />
        </div>
      </Carousel>
      <b className="text-[35px] text-start text-red-500 mt-5">Pendal Sets</b>
      <Carousel
        responsive={responsive}
        interval={7000}
        className="mt-2"
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}
      >
        <div>
          {" "}
          <img src={PendalSet1} className="p-5" />
        </div>

        <div>
          {" "}
          <img src={PendalSet2} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={PendalSet3} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={PendalSet4} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={PendalSet5} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={PendalSet6} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={PendalSet7} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={PendalSet8} className="p-5" />
        </div>
      </Carousel>
      <b className="text-[35px] text-start text-red-500 mt-5">Bracelets</b>
      <Carousel
        responsive={responsive}
        interval={7000}
        className="mt-2"
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}
      >
        <div>
          {" "}
          <img src={Bracelets1} className="p-5" />
        </div>

        <div>
          {" "}
          <img src={Bracelets2} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Bracelets3} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Bracelets4} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Bracelets5} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Bracelets6} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Bracelets7} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Bracelets8} className="p-5" />
        </div>
      </Carousel>
      <b className="text-[35px] text-start text-red-500 mt-5">Rings</b>
      <Carousel
        responsive={responsive}
        interval={7000}
        className="mt-2"
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}
      >
        <div>
          {" "}
          <img src={Ring1} className="p-5" />
        </div>

        <div>
          {" "}
          <img src={Ring2} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Ring3} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Ring4} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Ring5} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Ring6} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Ring7} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Ring8} className="p-5" />
        </div>
      </Carousel>
      <b className="text-[35px] text-start text-red-500 mt-5">Chains</b>
      <Carousel
        responsive={responsive}
        interval={7000}
        className="mt-2"
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}
      >
        <div>
          {" "}
          <img src={Chain1} className="p-5" />
        </div>

        <div>
          {" "}
          <img src={Chain2} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Chain3} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Chain4} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Chain5} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Chain6} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Chain7} className="p-5" />
        </div>
        <div>
          {" "}
          <img src={Chain8} className="p-5" />
        </div>
      </Carousel>
    </div>
  );
}
