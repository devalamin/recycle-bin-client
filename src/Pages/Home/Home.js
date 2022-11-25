import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Banner from '../Banner/Banner';
import BookingModal from '../Shared/SingleCategory/BookingModal/BookingModal';
import Categories from './Categories/Categories';

const Home = () => {

    const { adProducts } = useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
            {adProducts && <AdvertisedProducts></AdvertisedProducts>}
            <Categories></Categories>

            {/* <BookingModal></BookingModal> */}
        </div>
    );
};

export default Home;