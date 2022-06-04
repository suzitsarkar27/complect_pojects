import React from "react";

const Bannar = () => {
  return (
    <div className="relative">
      <div class="hero h-screen  lg:h-[60vh] bg-accent mt-1 ">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <p className="text-xl">Best Qulity</p>
            <h1 class="text-4xl font-bold">Professional Cleaning Services</h1>
            <p class="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img
              src="https://i.ibb.co/0VVL1c5/bucketgirl.png"
              className="h-full "
            />
          </div>
        </div>
      </div>

      <div className="mx-auto rounded font-bold bg-neutral w-5/6 relative mt-[-60px] shadow-xl p-6">
        <h2 className="text-2xl mb-5 text-primary">Get Free Estimate</h2>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input type="text" placeholder="Type here" class="input input-bordered w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered w-full " />
        <input type="text" placeholder="Type here" class="input input-bordered w-full " />
        </div>
        <button className="btn bg-primary mt-3 text-white">REQUEST A QOUTE</button>
      </div>
  </div>
  );
};

export default Bannar;
