import React from 'react'
import { Rate } from 'antd'

export const ratingTotal = React.FC = (rate) => <Rate allowHalf className='text-[18.5px]' defaultValue={rate} />