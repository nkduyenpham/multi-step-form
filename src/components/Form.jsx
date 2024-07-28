import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Form = () => {

    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        address: '',
        purchaseDate: '',
        feedbackDetails: '',
    })

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const redoStep = () => {
        setStep(1)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevStep => ({
            ...prevStep,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
        console.log(formData) // test this one
    }

    return (
        <div className='relative min-h-screen flex' style={{ background: '#ffffff' }}>
            <div className='flex flex-col w-11/12 md:w-4/5 container max-w-screen-xl mx-auto my-auto relative'>
                <div className='text-3xl md:text-6xl font-BG whitespace-pre-line text-center tracking-tighter'>
                    Customer Survey
                </div>
                <form className='mt-8 md:mt-12 w-full md:2-4/5 mx-auto rounded-3xl p-6 md:p-5' onSubmit={handleSubmit} style={{ backgroundColor: '#c0cfb2' }}>
                    {step === 1 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full md:w-3/5 mx-auto py-8 md:py-12"
                        >
                            <div className='text-sm md:text-base font-bold text-center mb-6'>STEP</div>
                            <div className='flex justify-center gap-5'>
                                <div className='w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-black border-solid p-4 bg-white'>1</div>
                                <div className='w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-black border-solid p-4'>2</div>
                                <div className='w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-black border-solid p-4'>3</div>
                            </div>
                            <div className='mt-8 md:mt-12 text-lg md:text-3xl text-center'>
                                Let's start by introducing yourself first
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none'
                                />
                                <input
                                    type="number"
                                    placeholder="Age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className='mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none'
                                />
                                <input
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className='mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none'
                                />
                            </div>
                            <div className='flex justify-center'>
                                <button type="button" onClick={nextStep} className='mt-4 bg-black text-white font-bold py-2 px-4 rounded'>Next</button>
                            </div>
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full md:w-3/5 mx-auto py-8 md:py-12"
                        >
                            <div className='text-sm md:text-base font-bold text-center mb-6'>STEP</div>
                            <div className='flex justify-center gap-5'>
                                <div className='w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-black border-solid p-4'>1</div>
                                <div className='w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-black border-solid p-4 bg-white'>2</div>
                                <div className='w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-black border-solid p-4'>3</div>
                            </div>
                            <div className='mt-8 md:mt-12 text-lg md:text-3xl text-center'>
                                Please share with us when did you make the purchase
                            </div>
                            <div className='flex flex-col mt-4 md:mt-12 items-center justify-center'>
                                <label className="text-sm md:text-base py-4">My purchase was on:</label>
                                <input
                                    type="date"
                                    id="purchaseDate"
                                    name="purchaseDate"
                                    value={formData.purchaseDate}
                                    onChange={handleChange}
                                    className="rounded-xl px-2 py-2 ml-0 md:ml-4 mt-2 md:mt-0 focus:outline-none"
                                    style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '300px' }}
                                />
                            </div>
                            <div className='flex justify-center mt-8 md:mt-12'>
                                <button type="button" onClick={prevStep} className="mr-4 bg-black text-white font-bold py-2 px-4 rounded">Previous</button>
                                <button type="button" onClick={nextStep} className="mr-4 bg-black text-white font-bold py-2 px-4 rounded">Next</button>
                            </div>
                        </motion.div>

                    )}
                    {step === 3 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full md:w-3/5 mx-auto py-8 md:py-12"
                        >
                            <div className='text-sm md:text-base font-bold text-center mb-6'>STEP</div>
                            <div className='flex justify-center gap-5'>
                                <div className='w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-black border-solid p-4'>1</div>
                                <div className='w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-black border-solid p-4'>2</div>
                                <div className='w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-black border-solid p-4 bg-white'>3</div>
                            </div>
                            <div className='mt-8 md:mt-12 text-lg md:text-3xl text-center'>
                                We're happy to receive the feedback from you!
                            </div>
                            <div>
                                <textarea
                                    name="feedbackDetails"
                                    placeholder="Share with us your experience"
                                    row={8}
                                    value={formData.feedbackDetails}
                                    onChange={handleChange}
                                    className="mt-4 border border-gray-400 w-full rounded-md px-4 py-3 focus:outline-none"
                                    style={{ backgroundColor: '#ffffff' }}
                                />
                            </div>
                            <div className='flex justify-center mt-8 md:mt-12'>
                                <button type="submit" className="mr-4 bg-black text-white font-bold py-2 px-4 rounded">Submit</button>
                            </div>
                        </motion.div>
                    )}
                    {step === 4 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full md:w-3/5 mx-auto py-8 md:py-12"
                        >
                            <div className='mt-8 md:mt-12 text-lg md:text-2xl text-center'>
                                Your submission has been received! Thank you for choosing our services, your feedback matter to us!
                            </div>
                            <div className='flex justify-center mt-8 md:mt-12'>
                                <button type="button" onClick={redoStep} className="mr-4 bg-black text-white font-bold py-2 px-4 rounded">Redo the survey</button>
                            </div>
                        </motion.div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Form