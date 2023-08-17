import React from 'react';
import Image from 'next/image';
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';

const Events = () => {
  return (
    <section className="event-container py-10">
      <div className="subtitle flex flex-col justify-center items-center">
  <span className="font-bold">PROMOTIONS</span>
  <h2 className="text-2xl">Our Promotions Events</h2>
</div>


      <div className="event-banner flex flex-row gap-4 p-4 m-2">
        <div className="event-banner-left w-full md:w-1/2 p-3">
          <div className="event-card bg-gray-300 flex justify-between items-center px-8 pt-0 mx-3">
            <div className="content">
              <h3 className="font-bold text-2xl">
                GET UP TO <span className="font-bold text-4xl">60%</span>
              </h3>
              <p className="text-lg">For the summer season</p>
            </div>
            <Image src={event1} alt="event" width={300} height={250} />
          </div>

          <div className="event-card bg-black text-white flex flex-col justify-center items-center p-12 mx-3">
            <h3 className="font-bold text-2xl">GET 30% Off</h3>
            <p className="text-lg">USE PROMO CODE</p>
            <button className="btn bg-gray-700 font-bold text-base px-8 py-2 mt-5 rounded-lg">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>

        <div className="event-banner-right grid grid-cols-2 gap-4 w-full md:w-1/2 p-3">
          <div className="event-banner-right-1 bg-yellow-300 flex flex-col justify-between items-center pt-6">
            <div className="details">
              <p className="text-base">Flex Sweatshirt</p>
              <div className="price">
                <span className="font-semibold">$100.00</span>
                <span className="font-semibold">$75.00</span>
              </div>
            </div>
            <Image src={event2} alt="event" width={240} height={300} />
          </div>

          <div className="event-banner-right-2 bg-gray-300 flex flex-col justify-between items-center pt-6">
            <div className="details">
              <p className="text-base">Flex Push Button Bomber</p>
              <div className="price">
                <span className="font-semibold">$225.00</span>
                <span className="font-semibold">$190.00</span>
              </div>
            </div>
            <Image src={event3} alt="event" width={240} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
