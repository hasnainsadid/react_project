import React from 'react'
import HomeSlider from '../Components/HomeSlider'
import Booking from '../Components/Booking'
import About from '../Components/About';
import Features from '../Components/Features';
import Destination from '../Components/Destination';
import Services from '../Components/Services';
import Packages from '../Components/Packages';
import Registration from '../Components/Registration';
import Team from '../Components/Team';
import Testimonial from '../Components/Testimonial';
import Blog from '../Components/Blog';

export default function Home() {
  return (
    <>
        {/* <!-- Carousel Start --> */}
        <HomeSlider />
        {/* <!-- Carousel End -->

        <!-- Booking Start --> */}
        <Booking />
        {/* <!-- Booking End -->

        <!-- About Start --> */}
        <About />
        {/* <!-- About End -->

        <!-- Feature Start --> */}
        <Features />
        {/* <!-- Feature End -->

        <!-- Destination Start --> */}
        <Destination />
        {/* <!-- Destination Start -->

        <!-- Service Start --> */}
        <Services />
        {/* <!-- Service End -->

        <!-- Packages Start --> */}
        <Packages />
        {/* <!-- Packages End -->

        <!-- Registration Start --> */}
        <Registration />
        {/* <!-- Registration End -->

        <!-- Team Start --> */}
        <Team />
        {/* <!-- Team End -->

        <!-- Testimonial Start Problem in Owl carousel --> */}
        {/* <Testimonial /> */}
        {/* <!-- Testimonial End -->

        <!-- Blog Start --> */}
        <Blog />
        {/* <!-- Blog End --> */}
    </>
  )
}
