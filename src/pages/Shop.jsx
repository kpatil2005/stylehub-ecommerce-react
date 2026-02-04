import React from 'react'
import Hero from '../components/Hero/Hero'
import Populer from '../components/populer/populer'
import Offers from '../components/Offers/Offers'
import NewCollections from '../NewCollections/NewCollections'
import NewsLatter from '../components/NewsLatter/NewsLatter'

function Shop() {
    return (
        <div>
            <Hero />
            <Populer />
            <Offers />
            <NewCollections/>
            <NewsLatter/>
        </div>
    )
}

export default Shop
