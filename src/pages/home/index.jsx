import React, { memo } from 'react'
import Hero from '../../components/hero'
import img1 from '../../assets/images/versace.png'
import img2 from '../../assets/images/zara.png'
import img3 from '../../assets/images/gucci.png'
import img4 from '../../assets/images/prada.png'
import img5 from '../../assets/images/klein.png'
import ProductWrapper from '../../components/product-wrapper'
import { PRODUCTS } from '../../static'
import CommentWrapper from '../../components/comment-wrapper'
import { useGetProductsQuery } from '../../context/api/productApi'

const Home = () => {
    const [skip, setSkip] = React.useState(1)
    const [limit, setLimit] = React.useState(4)
    const { data } = useGetProductsQuery({ limit })

    return (
        <section className='w-full mx-auto'>
            <Hero />
            <div className='max-w-[1920px] w-full mx-auto bg-black'>
                <div className="max-w-[1240px] mx-auto h-[122px] flex items-center justify-between">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
            </div>
            <ProductWrapper btn={true} title="NEW ARRIVALS" products={data?.payload} />
            <p className='max-w-[1240px] w-full mx-auto h-[2px] bg-[#0000001A]'></p>
            <ProductWrapper btn={true} title="TOP SELLING" star={4} end={8} products={PRODUCTS} />
            <CommentWrapper />
        </section>
    )
}

export default memo(Home)