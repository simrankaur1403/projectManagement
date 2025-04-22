import React from 'react'

const CreateNewProject = () => {
    return (
        <>
            <nav className=' flex flex-row items-center justify-between px-10  '>
                <p className=' font-bold '>MilestoneHQ</p>
                <img src='https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=' className='h-8 w-10 rounded-full mt-1 ' />
            </nav>
            <div className='bg-gray-50  min-h-screen px-4 flex-col flex mx-auto items-center mt-3 '>


                <h1 className=' font-bold text-2xl mt-3'>Create New Project</h1>
                <p className='mb-3'>Fill in the details below to  create your new project</p>



                <div className='bg-white max-w-2xl w-full py-3 px-7'>


                    <form className='space-y-3'>
                        <div className='flex flex-col'>
                            <label className='block '>Project Name</label>
                            <input className="py-2 px-7 border border-gray-300 rounded-lg shadow-sm " type='text' placeholder='Enter project name' />
                        </div>
                        <div className='flex flex-col'>
                            <label >Description</label>
                            <textarea rows='2' className=" py-2 px-7  border border-gray-300 rounded-lg shadow-sm" placeholder='Describe your project' />
                        </div>
                        <div className='flex flex-col'>
                            <label >Due Date</label>
                            <input className="py-2 px-7 border border-gray-300 rounded-lg shadow-sm" type='date' />
                        </div>
                        <div className='flex flex-col'>
                            <label >Category</label>
                            <select className="py-2 px-7 border border-gray-300 rounded-lg shadow-sm" >
                                <option className='text-gray-300'>select Category</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label >Priority</label>

                            <div className="flex gap-6">
                                <label className="inline-flex items-center">
                                    <input type="radio" name="priority" className="text-indigo-600" />
                                    <span className="ml-2">Low</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="priority" className="text-indigo-600" />
                                    <span className="ml-2">Medium</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="priority" className="text-indigo-600" />
                                    <span className="ml-2">High</span>
                                </label>
                            </div>

                        </div>
                        <div className='mb-3'>
                            <label>Add Team Members</label>
                            <div className='flex flex-row'>

                                <img src='https://img.freepik.com/premium-photo/headshot-young-happy-successful-male-office-worker-businessman-wearing-suit-smiling-camera-with-positive-face-expression-while-posing-against-grey-studio-background-business-people-concept_95891-6895.jpg' alt='upload' className='rounded-full p-2 w-12 h-12' />
                                <img src='https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=' className='rounded-full w-12 h-12 p-2' />
                                <button className='w-12 rounded-full hover:bg-indigo-700 hover:text-white h-11 bg-gray-100 flex justify-center items-center font-medium'>+</button>
                            </div>
                        </div>
                        <div className='flex gap-5 px-4'>
                            <button className='w-full rounded-lg  p-2 hover:bg-indigo-700 hover:text-white border border-gray-300'>cancel</button>
                            <button className='w-full rounded-lg p-2 hover:bg-indigo-700 hover:text-white border border-gray-300'>Create Project</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateNewProject
