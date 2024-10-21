import Image from "next/image";
import StyledButton from "@/components/StyledButton";

import {
  heroCarousel,
  section3Images,
  serviceDetails,
  customerReviews,
  visitStore,
  clients,
  blogs,
} from "@/lib/data";
import HalfCircle from "@/components/HalfCircle";
import HorizontalScroller from "@/components/HorizontalScroller";
import ServiceCard from "@/components/ServiceCard";
import { MoveRight, Check } from "lucide-react";
import Link from "next/link";
import OurStory from "@/components/OurStory";

export default function Home() {
  return (
    <div className="w-full">
      {/* herosection1 */}
      <section
        id="homehero1"
        className="flex flex-col h-[1200px] sm:w-full sm:flex-row bg-darkgreen sm:h-[700px]"
      >
        {/* left side */}
        <div className="relative left-0 top-16 flex w-[700px] sm:justify-center">
          <div>
            <Image
              src="/ring.png"
              alt="heading"
              width={370}
              height={100}
              className="absolute top-[72px] left-[95px] sm:left-[145px]"
            />
            <h1 className="absolute text-white text-7xl top-[70px] left-[50px] sm:left-[100px]">
              <span className="cormorant">A whole </span>
              <span className="montserrat italic text-6xl">
                new <br /> world
              </span>
              <span className="cormorant">, a whole</span> <br />
              <span className="montserrat italic text-6xl">new look</span>
            </h1>
            <Image
              src="/line.png"
              alt="heading"
              width={370}
              height={100}
              className="absolute top-[290px] left-[40px] sm:left-[80px]"
            />
          </div>
          <p className="text-white montserrat w-96 absolute left-[55px] top-[350px] sm:left-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum.
          </p>

          <span className="absolute top-[450px] left-[48px] sm:left-[96px]">
            <StyledButton bgcolor={"green"} btnName={"DISCOVER MORE"} />
          </span>
        </div>
        {/* right side */}
        <div className="relative z-10 sm:top-[140px] top-[600px] max-w-[650px]">
          <div className="relative z-10">
            {/* <Carousel slides={heroCarousel} /> */}
            <HorizontalScroller type={"slides"} slides={heroCarousel} />
          </div>
          <div className="absolute rotate-180 top-[420px] -left-16">
            <HalfCircle color={"#567C49"} />
          </div>
        </div>
        <div className="absolute rotate-180 top-[620px] right-0">
          <HalfCircle color={"#567C49"} />
        </div>
      </section>

      {/* section2 */}
      <section
        id="section2"
        className="overflow-hidden bg-backgroundwhite py-32 px-8 flex flex-col justify-center items-center space-y-8 relative z-10 h-[1400px] w-full sm:flex-row sm:space-x-8 sm:h-[610px]"
      >
        <div className="relative">
          <div className="absolute -rotate-45 -left-20 -top-8">
            <HalfCircle color={"#567C49"} />
          </div>
          <Image
            alt="spa"
            src="/section-2-leftimage.jpg"
            width={300}
            height={400}
            className="rounded-t-full h-96"
          />
        </div>
        <div className="flex flex-col space-y-8 items-center w-[550px]">
          <p className="montserrat">Alive every moment</p>
          <h1 className="relative cormorant text-darkgreen text-5xl sm:text-7xl text-center">
            Beauty is all about <br /> you.
            <Image
              src="/ring.png"
              alt="heading"
              width={200}
              height={80}
              className="absolute left-20 bottom-0 sm:left-40 sm:bottom-1"
            />
          </h1>
          <p className="text-lightgreen montserrat w-96 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis sed sapien in pretium. Donec tincidunt, quam.
          </p>
        </div>
        <div className="relative">
          <Image
            alt="spa"
            src="/section-2-rightimage.jpg"
            width={300}
            height={400}
            className="rounded-t-full h-96"
          />
          <div className="absolute -rotate-[225deg] -bottom-16 -right-20">
            <HalfCircle color={"#023A15"} />
          </div>
        </div>
      </section>

      {/* section3 -- products */}
      <section
        id="section3"
        className="flex flex-col sm:flex-row bg-darkgreen h-[500px] sm:h-[419px] relative"
      >
        {/* Left-side content */}
        <div className="flex flex-col items-center space-y-6 p-8 sm:p-0 sm:ml-20 sm:mt-32">
          <h2 className="cormorant text-white text-5xl">Our Product</h2>
          <p className="text-white w-64 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <StyledButton bgcolor="green" btnName={"SHOP NOW"} />
        </div>

        {/* Right-side image scroller */}
        <div className="sm:ml-16 w-full sm:w-[900px] sm:mt-16 sm:mr-0">
          <HorizontalScroller type="slides" slides={section3Images} />
        </div>

        <div></div>
      </section>

      {/* section4 - service details */}
      <section className="bg-backgroundwhite flex flex-col space-y-4 h-[3470px] sm:h-[2050px]">
        <div className="flex flex-col items-center space-y-6 pt-8">
          <h2 className="text-darkgreen relative text-center leading-[1.20] text-5xl sm:text-7xl cormorant">
            Special Service from <span>Chloro</span>
            <Image
              src="/ring.png"
              alt="heading"
              width={260}
              height={100}
              className="absolute top-[60px] left-[100px] sm:top-[4px] sm:left-[550px]"
            />
          </h2>
          <p className="text-lightGreen montserrat w-[350px] sm:w-[500px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis sed sapien in pretium. Donec tincidunt, quam.
          </p>
        </div>
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32 px-32 pt-4">
          {serviceDetails.map((s, i) => (
            <ServiceCard
              key={i}
              name={s.name}
              imageUrl={s.imageUrl}
              description={s.description}
              serviceLink={s.serviceLink}
            />
          ))}
        </div>
        <div className="flex flex-col items-center space-y-3 pt-24 sm:relative">
          <Image
            alt="spa"
            src="/story-image.jpg"
            width={400}
            height={500}
            className="rounded-t-full w-1/2 absolute h-[700px] top-40 left-40 object-cover z-20 invisible sm:visible"
          />
          <span className="absolute -rotate-45 top-64 left-8 z-30 invisible sm:visible">
            <HalfCircle color="#023A15" />
          </span>
          <span className="absolute rotate-[125deg] top-[530px] right-16 z-30 invisible sm:visible">
            <HalfCircle color="#567C49" />
          </span>
          <div className="flex sm:absolute right-52 z-20 top-64">
            <OurStory />
          </div>
          <div className="flex space-x-4 sm:absolute right-52 top-[700px]">
            <div className="flex flex-col items-center space-y-2">
              <h2 className="cormorant text-darkgreen text-4xl font-semibold">
                955+
              </h2>
              <p className="montserrat text-lightGreen font-medium">
                Happy Customer
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h2 className="cormorant text-darkgreen text-4xl font-semibold">
                240+
              </h2>
              <p className="montserrat text-lightGreen font-medium">
                Happy Customer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* customer reivews - section5  */}
      <section className="flex relative sm:px-8 bg-darkgreen h-[500px]">
        <div className="flex flex-col justify-center items-center space-y-10 relative">
          <h2 className="text-5xl text-center cormorant text-white w-[500px]">
            Review From Our <br />
            <Image
              src="/line.png"
              alt="heading"
              width={200}
              height={100}
              className="absolute top-[170px] sm:top-[190px] left-[135px] sm:left-[140px]"
            />
            Customer
          </h2>
          <div className="w-80">
            <HorizontalScroller type="reviews" reviews={customerReviews} />
          </div>
        </div>
        <div className="absolute bottom-0 w-1/2 right-0 h-full invisible sm:visible">
          <Image
            alt="spa"
            src="/section3-image2.jpg"
            width={300}
            height={400}
            className="h-full w-full"
          />
        </div>
        <div className="absolute z-10 bottom-0 right-[550px] invisible sm:visible">
          <HalfCircle color={"#319E48"} />
        </div>
      </section>

      {/* section6 */}
      <section className="flex flex-col bg-backgroundwhite h-[1050px] sm:h-[700px] pt-12 sm:flex-row">
        <div className="w-[350px] sm:w-1/2 relative flex flex-col items-center p-8 mx-16 space-y-8">
          <Image
            alt="spa"
            src="/section6-image1.jpg"
            width={370}
            height={200}
            className="rounded-r-full w-[500px]"
          />
          <Image
            alt="spa"
            src="/section6-image2.jpg"
            width={370}
            height={200}
            className="rounded-r-full w-[500px]"
          />
          <div className="absolute -rotate-45 -top-12 -left-16">
            <HalfCircle color={"#023A15"} />
          </div>
        </div>
        <div className="flex flex-col w-[500px] sm:w-1/2 p-8 space-y-8">
          <h2 className="relative cormorant text-5xl text-darkgreen w-fit">
            Expert Skincare for <br />
            <Image
              src="/ring.png"
              alt="heading"
              width={370}
              height={100}
              className="absolute w-60 top-[38px] left-[95px] sm:left-[70px]"
            />
            Your Beautiful Skin
          </h2>

          <p className="text-lightGreen montserrat w-fit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum
            ultricies egestas, dolor sem laoreet orci, quis finibus justo quam
            at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt
            scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam.
          </p>
          <ul className="montserrat text-lightGreen space-y-2">
            <li className="flex items-start">
              <Check className="text-lightGreen mr-2" />
              <span>Donec non vestibulum mauris.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-lightGreen mr-2" />
              <span>Maecenas arcu eros.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-lightGreen mr-2" />
              <span>Sed pulvinar lorem.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-lightGreen mr-2" />
              <span>Nunc vitae convallis justo.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-lightGreen mr-2" />
              <span>Nullam ut mauris tellus.</span>
            </li>
          </ul>
          <StyledButton bgcolor={"white"} btnName="LEARN MORE" />
        </div>
      </section>

      {/* section7  - visit */}
      <section className="bg-darkgreen relative h-[600px] sm:h-[500px] flex flex-col sm:flex-row justify-start">
        <div className="flex flex-col sm:justify-start sm:items-start justify-center  items-center  w-[500px] sm:w-1/2 px-32 py-16 space-y-8">
          <h2 className="text-white relative cormorant text-3xl sm:text-5xl sm:text-left text-center">
            Visit Our Store and <br />
            <Image
              src="/line.png"
              alt="heading"
              width={200}
              height={100}
              className="absolute w-32 sm:w-52 top-[26px] sm:top-[38px] left-[100px] sm:left-[170px]"
            />
            Get Our Product
          </h2>
          <p className="text-white montserrat max-w-96 sm:text-left text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum
            ultricies egestas, dolor sem laoreet orci, quis finibus justo quam
            at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt
            scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam.
          </p>
          <StyledButton bgcolor="green" btnName="SHOP NOW" />
        </div>
        <div className="relative w-full sm:w-2/5 flex justify-center items-center">
          <Image
            alt="spa"
            src="/section7-image1.jpg"
            width={400}
            height={500}
            className="rounded-t-full absolute h-[540px] -top-[40px] object-cover z-20 invisible sm:visible"
          />
        </div>
        <div className="flex absolute left-[80px] -bottom-6 sm:left-[450px] sm:-bottom-4 space-x-2 z-30">
          {visitStore.map((s, i) => (
            <Image
              alt={s.name}
              key={i}
              src={s.imageUrl}
              width={300}
              height={400}
              className="h-20 w-16 sm:h-32 sm:w-24 rounded-t-full"
            />
          ))}
        </div>
      </section>

      {/* section8 - clients */}
      <section className="bg-darkgreen h-[300px] flex flex-col space-y-16 items-center justify-center py-32">
        <h1 className="relative cormorant text-3xl sm:text-5xl text-white">
          Our Product Also Available At
          <Image
            src="/ring.png"
            alt="heading"
            width={370}
            height={100}
            className="absolute w-40 sm:w-52 top-0 right-2 sm:right-10"
          />
        </h1>
        <div className="w-[900px]">
          <HorizontalScroller type={"squareImages"} slides={clients} />
        </div>
      </section>

      {/* section9 - blog and news */}
      <section className="bg-backgroundwhite flex flex-col space-y-8 items-center h-[1200px] sm:h-[550px] py-16">
        <h1 className="cormorant relative text-darkgreen text-center text-5xl">
          Blog and News
          <Image
            src="/line.png"
            alt="heading"
            width={370}
            height={100}
            className="absolute w-32 top-[37px] sm:-right-[16px]"
          />
        </h1>
        <p className="text-lightGreen w-96 sm:w-1/2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          lobortis sed sapien in pretium. Donec tincidunt, quam.
        </p>
        <div className="flex flex-col mx-16 items-center sm:flex-row sm:flex-wrap sm:justify-center sm:space-x-8 space-y-8 sm:space-y-0">
          {blogs.map((b, i) => (
            <div key={i} className="w-full sm:w-auto">
              <Image
                alt={b.name}
                src={b.imageUrl}
                width={300}
                height={400}
                className="w-full sm:w-64 h-44 rounded-t-full"
              />
              <div className="bg-darkgreen h-24 w-full sm:w-64 px-4 py-2 flex flex-col space-y-1">
                <p className="text-white font-cormorant w-fit">
                  {b.description}
                </p>
                <Link
                  href={b.blogLink}
                  className="flex items-center hover:scale-105 space-x-2 underline text-lightGreen"
                >
                  <span className="text-white">READ MORE</span> <MoveRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// The error you're encountering happens because Next.js' Image component can accept either a URL as a string or a special type called StaticImageData when you're importing images directly.
// The type StaticImageData is used when you import images like import myImage from 'path-to-image' rather than using an external URL as a string.
