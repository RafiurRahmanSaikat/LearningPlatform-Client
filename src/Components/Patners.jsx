import React from "react";
import airbnb from "../Assest/airbnb.svg";
import client8 from "../Assest/client-8.png";
import client1 from "../Assest/client-1.png";
import client3 from "../Assest/client-3.png";
import client4 from "../Assest/client-4.png";
import tailus from "../Assest/tailus.svg";
import microsoft from "../Assest/microsoft.svg";
import coty from "../Assest/coty.svg";
const Patners = () => {
  return (
    <>
      <section class="py-16 bg-gray-800">
        <div class="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
          <div class="m-auto text-center lg:w-7/12">
            <h2 class="text-2xl text-white font-bold md:text-4xl">
              Our partners.
            </h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <div class="p-4">
              <img src={airbnb} class="" alt="" />
            </div>
            <div class="p-4">
              <img src={client8} class="w-32 " alt="" />
            </div>
            <div class="p-4">
              <img src={client3} class="w-32 " alt="" />
            </div>
            <div class="p-4">
              <img src={client1} class="w-32 " alt="" />
            </div>
            <div class="p-4">
              <img src={tailus} class="w-32" alt="" />
            </div>
            <div class="p-4">
              <img src={microsoft} class="w-32" alt="" />
            </div>
            <div class="p-4">
              <img src={coty} class="w-20" alt="" />
            </div>
            <div class="p-4">
              <img src={client4} class="w-24" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Patners;
