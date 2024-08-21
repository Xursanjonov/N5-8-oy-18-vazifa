import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import logo from '../../assets/icons/logo.png'
import ShopIcon from '../../assets/icons/ShopIcon'
import UserIcon from '../../assets/icons/UserIcon'
import LikeIcon from '../../assets/icons/LikeIcon'

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className='max-w-[1920px] w-full mx-auto bg-white'>
            <div className="w-full relative h-[38px] flex items-center justify-center gap-1 bg-[#000] text-white">
                <div className='flex items-center gap-2'>
                    <span className='font-light'>Sign up and get 20% off to your first order.</span>
                    <button className='border-b-[1px]'>Sign Up Now</button>
                </div>
                <button className='px-1 py-.5 text-lg absolute right-[5%] rounded-sm'> <CloseOutlined className='font-bold' /> </button>
            </div>
            <header className='w-full py-4 border-b-[1px]'>
                <nav className='w-[1240px] mx-auto flex items-center justify-between'>
                    <Link to={'/'} className='w-[120px] h-[18px]'>
                        <img className='w-full h-full' src={logo} alt="" />
                    </Link>
                    <div className="flex items-center justify-center gap-4">
                        <select name="" id="" className='border-0'>
                            <option value="shop">Shop</option>
                            <option value="shop1">Shop 1</option>
                            <option value="shop2">Shop 2</option>
                        </select>
                        <Link>On Sale</Link>
                        <Link>New Arrivals</Link>
                        <Link>Brands</Link>
                    </div>
                    <label htmlFor="search__label" className='w-[577px] h-[36px] overflow-hidden ps-4 bg-gray-200 flex items-center gap-2 rounded-[62px]'>
                        <SearchOutlined className='text-lg' />
                        <input className='w-full h-full px-4 text-emerald-lg bg-gray-200'
                            type="search" placeholder='Search for products...' />
                    </label>
                    <div className="flex items-center justify-center gap-5">
                        <button onClick={() => navigate('/wish-list')} className='border-0'> <LikeIcon /> </button>
                        <button onClick={() => navigate('/cart')} className='border-0'> <ShopIcon /> </button>
                        <button onClick={() => navigate('/login')} className='border-0'> <UserIcon /> </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default memo(Header)