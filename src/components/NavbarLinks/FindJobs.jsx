import React from 'react'
import Search from '../Search'
import {Btn, JobList, Selector} from '../../index'

const FindJobs = () => {
  return (
    <>
    <section>
      <h1 className='font-bold text-[25px] mainTitle'>Find your Dream Job, <span className='text-[#0154AA]'>Albert!</span></h1>
      <p className='font-normal'>Explore the latest job openings and apply for the best opportunities available today!</p>

      <div className='p-3 bg-white h-[77px] border-2  flex rounded-md mt-[22px] SearchFields'>
        <Search placeholder='Job Title, Company, or Keywords' className='bg-transparent w-[550px] smallInput' isSearchIcon={false}/>
        <Selector defaultText='Select Location'  className='bg-transparent w-[190px] pl-3 ml-4  border-l-2  smallSelect' isSearchIcon={false}/>
        <Selector defaultText='Job Type' className='bg-transparent w-[160px] border-l-2 pl-3  ml-4 smallSelect' isSearchIcon={false}/>
        <Btn className='text-[16px] ml-4 w-[140px] searchBtn' imgSearch={true} title='Search'/>
      </div>

      <div className=' mt-2 py-3 flex items-center'>
        <p className='text-[16px]'>Similar: </p>
        <Btn title='Frontend' className='py-[4px] px-4 ml-5 bg-transparent border-2 border-[#737A91] similarBtns' textColor={false}/>
        <Btn title='Backend' className='py-[4px] px-4 ml-5 bg-transparent border-2 border-[#737A91] similarBtns' textColor={false}/>
        <Btn title='Graphic Designer' className='py-[4px] px-[14px] ml-5 bg-transparent border-2 border-[#737A91] similarBtns' textColor={false}/>
      </div>
      <JobList/>
      <JobList title='Recommended Jobs' subTitle='See Recommended Jobs' ispromoted={false} className='mt-11'/>
      <JobList  showTitle={false} ispromoted={false}/>
      <JobList title='Latest Jobs' subTitle='See Latest Jobs' ispromoted={false} className='mt-11'/>
      <JobList showTitle={false} ispromoted={false}/>
    </section>
    </>
  )
}

export default FindJobs