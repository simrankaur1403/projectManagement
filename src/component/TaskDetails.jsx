import React from 'react'

const TaskDetails = () => {
    return (
        <>


            <div className=' max-w-2xl flex flex-col justify-center  items-center shadow-2xl mx-auto px-9 py-4 mx-3 '>
                <div className='bg-white space-y-2 '>

                    <div className='flex flex-row justify-between mb-3'>
                        <h1 className=' font-bold '>Tasks</h1>
                        <button className='border-gay-200 w-5 hover:bg-indigo-600 hover:text-white'>X</button>
                    </div>
                    <hr className='text-gray-300 mb-4' />
                    <p className='text-xs text-gray-500' >Task Title</p>
                    <h2 className=' font-semibold'>Design System Setup</h2>

                    <label className='text-gray-500 text-xs mt-3'>Description</label>
                    <p className='text-gray-400 text-sm'>Create a comprehensive design  for the new website including typography, color pallette,componnents,and Documentation</p>



                    <label className='text-gray-500 text-xs block mt-3'>status</label>
                    <select className='bg-gray-300 w-full'>
                        <option>In progress</option>
                        <option>Pending</option>
                        <option>completed</option>
                    </select>
                    <div className='flex flex-row justify-between mt-3'>
                        <div className='flex flex-col'>

                            <label className='text-gray-500 text-xs  '> Due Date</label>
                            <p className='font-medium'>Mar 10,2025</p>
                        </div>
                        <div className='flex flex-col'>

                            <label className='text-gray-500 text-xs block'>Assigned to</label>
                            <div className='flex flex-row '>

                                <img className='h-6 w-6 mt-1 rounded-full  ' src='data:image/jpeg;base64,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' />
                                <p className='font-medium ml-3'>Sarah Wilison</p>
                            </div>
                        </div>
                    </div>

                    <div className='my-6'>
                        <label className='text-gray-500 text-xs'>checklist</label>
                        <div >
                            <input type='checkbox' />
                            <label className='text-sm'>Create Color Palette</label>
                        </div>
                        <div>
                            <input type='checkbox' />
                            <label className='text-sm'>Define typography scale</label>
                        </div>
                        <div className='mb-4'>
                            <input type='checkbox' />
                            <label className='text-sm'>Design core components</label>
                        </div >

                        <label className='text-gray-500 text-xs mt-6'>comments</label>
                        <div className='flex flex-row my-2'>
                            <img className='h-9 ml-3 w-10 mt-1 rounded-full absolute ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouZ-hAPR1dFEEn237KzkRCgKsf_aaRatTzSw42ZqIQgx37HJPyxdvpEY&s' />
                            <div className='bg-gray-50 ml-23 mt-2 '>
                                <div className='flex flex-row justify-between'>

                                    <h3>John Cooper</h3>
                                    <p className='text-xs text-gray-400'>2h ago</p>
                                </div>
                                <p className='text-xs '>Please include mobile component variants in the design system</p>
                            </div>
                        </div>
                        <div>
                            <img className='h-9 w-10 mt-1 ml-3 rounded-full absolute  ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouZ-hAPR1dFEEn237KzkRCgKsf_aaRatTzSw42ZqIQgx37HJPyxdvpEY&s' />

                            <div className='flex flex-row'>
                                <textarea placeholder='Add a comment .....' className=' mt-2 ml-23 border border-gray-400 rounded-sm ' cols={48} rows={2}></textarea>
                                <button className='bg-gray-300 h-11  mt-3 hover:bg-indigo-600 hover:text-white ml-4 p-1.5 rounded-sm'>send</button>

                            </div>
                        </div>
                        <hr className='text-gray-300 mb-4 mt-4' />

                        <div className='flex  flex-row gap-19 '>
                            <button className='text-black p-2 bg-white hover:bg-indigo-600 rounded-sm w-full hover:text-white border border-gray-400'>Cancel</button>
                            <button className='text-black p-2 bg-white hover:bg-indigo-600 rounded-sm w-full hover:text-white border border-gray-400'>Save Changes</button>
                        </div>

                    </div>
                </div>

            </div>



        </>
    )
}

export default TaskDetails
