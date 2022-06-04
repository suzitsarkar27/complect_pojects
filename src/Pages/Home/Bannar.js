import React from 'react';

const Bannar = () => {
    return (
        <div class="hero h-[60vh] bg-accent mt-1 ">
        <div class="hero-content flex-col lg:flex-row">
        
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <img src="https://i.ibb.co/0VVL1c5/bucketgirl.png" className='h-full p-x-5' />
        </div>
      </div>
    );
};

export default Bannar;