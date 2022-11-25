import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Banner from '../Banner/Banner';
import BookingModal from '../Shared/SingleCategory/BookingModal/BookingModal';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedProducts></AdvertisedProducts>
            <Categories></Categories>

            {/* <BookingModal></BookingModal> */}
        </div>
    );
};

export default Home;