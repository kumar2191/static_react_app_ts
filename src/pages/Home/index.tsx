import React from 'react'
import ProductView from '../../components/productview/index'
import Enquire from '../../components/enquire/index'
import RatingPage from '../../components/ratingpage/index'
import Slider from '../../components/slider/index'
const index = () => {
    return (
        <div>
            <Slider />
            <ProductView />
            <Enquire />
            <RatingPage />
        </div>
    )
}

export default index