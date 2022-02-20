import React, {useState} from 'react'
import { CgInfinity } from "react-icons/cg";
import { BsStopwatch } from "react-icons/bs";
import { FaCarrot } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

function App() {

  return (
    <div>
  <header className='bg-hero bg-cover bg-center h-screen bg-fixed'>

      <img src="logo-white.png" alt="Omnifood logo" class="w-24 h-auto"/>
      <ul className="float-right -mt-10 mr-10">
      <li className='inline-block ml-10 text-white text-xl no-underline hover:underline decoration-orange-500 decoration-2'>Food delivery</li>
      <li className='inline-block ml-10 text-white text-xl no-underline hover:underline decoration-orange-500 decoration-2'>How it works</li>
      <li className='inline-block ml-10 text-white text-xl no-underline hover:underline decoration-orange-500 decoration-2'>Our cities</li>
      <li className='inline-block ml-10 text-white text-xl no-underline hover:underline decoration-orange-500 decoration-2'>Sign up</li>
      </ul>
      
    <div className="absolute w-4/6 top-1/2 ml-20 ">
      <h1 className='uppercase mb-5 text-white text-5xl text-left '>Goodbye junk food.<br/>Hello super healthy meals.</h1>
      <button className="mr-8 border-2 border-orange-400 bg-orange-400 p-2 w-40 text-lg hover:text-white hover:bg-orange-500 hover:border-orange-500 rounded-full h-auto" >I’m hungry</button>
      <button className="border-2 border-orange-400 hover:bg-orange-400 p-2 w-40 text-lg hover:text-white rounded-full h-auto">Show me more</button>
    </div>
  </header>
  <section>
  <div class="w-screen max-w-6xl ml-72 mt-8">
                <h2 className='text-6xl font-thin ml-44'>Get food fast &mdash; not fast food</h2>
                <p class="leading-6  mt-5 text-center">
                Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
                </p>
            </div>
            <div class="w-screen max-w-6xl flex ml-56 font-thin">
                <div class="p-1 mt-3 ml-24">
                    <h3 className="text-center mb-4"><CgInfinity className='ml-4' fontSize={50} color='orange'/> UP TO 365 DAYS/YEAR</h3>
                    <p className='text-center'>
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                    </p>    
                </div>
                
                <div class=" p-1 mt-3 ml-24 ">
                    <h3 className="text-center mb-4"><BsStopwatch className='ml-4' fontSize={50} color='orange'/> READY IN 20 MINUTES</h3>
                    <p className='text-center'>
                        You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
                    </p>
                </div>
                <div class="p-1 mt-3 ml-24 ">
                    <h3 className="text-center mb-4"><FaCarrot className='ml-8' fontSize={50} color='orange'/> 100% ORGANIC</h3>
                    <p className='text-center h-2'>
                        All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
                    </p>
                </div>
                <div class=" p-1 mt-3 ml-24 ">
                    <h3 className="text-center mb-4"><AiOutlineShoppingCart className='ml-4' fontSize={50} color='orange'/> ORDER ANYTHING</h3>
                    <p className='text-center'>
                        We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
                    </p>
                </div>
            </div>
</section>
<section>
<ul class="w-full">
                <li className='w-1/4 block float-left'>
                    <figure className="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="1.jpg" alt="Korean bibimbapÂ with egg and vegetables"/>
                    </figure>
                </li>
                <li className='w-1/4 block float-left' >
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="2.jpg" alt="Simple italian pizza with cherry tomatoes"/>
                    </figure>
                </li>
                <li className='w-1/4 block float-left' >
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="3.jpg" alt="Chicken breast steak with vegetables"/>
                    </figure>
                </li>
                <li className='w-1/4 block float-left' >
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="4.jpg" alt="Autumn pumpkin soup"/>
                    </figure>
                </li>
            </ul>
            <ul class="meals-showcase clearfix">
                <li className='w-1/4 block float-left'>
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="5.jpg" alt="Paleo beef steak with vegetables"/>
                    </figure>
                </li>
                <li className='w-1/4 block float-left'>
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="6.jpg" alt="Healthy baguette with egg and vegetables"/>
                    </figure>
                </li>
                <li className='w-1/4 block float-left'>
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="7.jpg" alt="Burger with cheddar and bacon"/>
                    </figure>
                </li>
                <li className='w-1/4 block float-left'>
                    <figure class="w-full m-0 overflow-hidden bg-black">
                        <img className='opacity-30 hover:opacity-100 hover:scale-125 duration-500' src="8.jpg" alt="Granola with cherries and strawberries"/>
                    </figure>
                </li>
            </ul>
</section>
<section className='bg-white'>
<div class="max-w-6xl ml-96">
                <h2 className='text-6xl font-thin' >How it works - Simple as 1, 2, 3</h2>
            </div>
            <div class="max-w-6xl ml-10">
                <div class="ml-80 mt-8">
                    <img className='h-96' src="app-iPhone.png" alt="Omnifood app on iPhone" class="app-screen js--wp-2"/>
                </div>
                <div class="-mt-80 -mr-24">
                    <div className='flex justify-end mb-4 '>
                        <div className='  text-orange-500 border-2  border-orange-500 w-14 h-14 rounded-full pl-5 pt-4 '>1</div>
                        <p className='mt-3 ml-5'>Choose the subscription plan that best fits your needs <br/>and sign up today.</p>
                    </div>
                    <div class='flex justify-end mb-4 '>
                        <div className='text-orange-500 border-2  border-orange-500 w-14 h-14 rounded-full pl-5 pt-4 '>2</div>
                        <p className='mt-3 ml-10 '>Order your delicious meal using our mobile app or<br/> website. Or you can even call us!</p>
                    </div>
                    <div class="flex justify-end mb-4">
                        <div className='text-orange-500 border-2  border-orange-500 w-14 h-14 rounded-full pl-5 pt-4 '>3</div>
                        <p className='mt-3 ml-9'>Enjoy your meal after less than 20 minutes. See you<br/> the next time!</p>
                    </div>
                    <div className='flex justify-end mt-2'>
                    <a ><img className='h-14 w-auto' src="download-app.svg" alt="App store"/></a>
                    <a  ><img className='h-14 w-auto' src="download-app-android.png" alt="Play story"/></a>
                </div></div>
            </div>
</section>
</div>
  );
}

export default App;
