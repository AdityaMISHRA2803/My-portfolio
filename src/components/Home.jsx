import React from 'react';
import boyCoding from '../assets/manCoding.png';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import ContactUs from './ContactUs';

function Home() {
    return (
        <>
            <div className='home'>
                <div className='homeDiv1'>
                    <div className='whf'>
                        <h1 className='title'>
                            Hey There 👋 <br />
                        </h1>
                        <h1 className='title mt-4'>
                            I'm Aditya Mishra
                        </h1>
                        <h2 className='skillsType'>
                            <Typewriter
                                words={[
                                    "Full-Stack Developer 🚀",
                                    "MERN Stack Specialist",
                                    "System Design Enthusiast",
                                    "DSA Solver 💡",
                                    "Cloud & API Builder ☁️"
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </h2>
                        <p className="shortIntro">
                            I love building scalable web applications and solving real-world problems through code.
                        </p>
                        <div className='mt-10'>
                            <Link to="/journey">
                                <button className="myJourneyButton">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="animate-spin h-5 w-5 mr-3 text-white"
                                    >
                                        <circle
                                            strokeWidth="4"
                                            stroke="currentColor"
                                            r="10"
                                            cy="12"
                                            cx="12"
                                            className="opacity-25"
                                        ></circle>
                                        <path
                                            d="M4 12a8 8 0 018-8v8H4z"
                                            fill="currentColor"
                                            className="opacity-75"
                                        ></path>
                                    </svg>
                                    My Journey
                                </button>
                            </Link>
                            <div className='hidden py-10 lg:block md:block'>
                                <ContactUs />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='homeDiv2'>
                    <div className='codeSection'>
                        {/* Code Block */}
                        <div className='codingBlock'>
                            {/* Top bar */}
                            <div className='codingBlockTitle'>
                                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                            </div>

                            <pre className='codingBlockBody'>
                                <code className='codingComment'>// My Profile Code Block</code>
                                <br />
                                <code className='text-blue-600 dark:text-blue-400'>const</code> <code className='text-pink-500 dark:text-pink-400'>me</code> <code>=</code> <code className='text-yellow-600 dark:text-yellow-400'>{`{`}</code>
                                <br />
                                <code className='ml-8 text-gray-800 dark:text-white'>name:</code> <code className='text-yellow-500 dark:text-yellow-300'>'Aditya Mishra'</code>,
                                <br />
                                <code className='ml-8 text-gray-800 dark:text-white'>role:</code> <code className='text-yellow-500 dark:text-yellow-300'>'Full-Stack Developer'</code>,
                                <br />
                                <code className='ml-8 text-gray-800 dark:text-white'>skills:</code> <code className='text-yellow-500 dark:text-yellow-300 text-wrap'>
                                    ['C++', 'React.js', 'Node.js', 'MongoDB', 'System Design', <Link className='text-blue-600' to='/skills'>'More...'</Link>]
                                </code>,
                                <br />
                                <code className='text-yellow-600 dark:text-yellow-400'>{`}`}</code>;
                            </pre>
                        </div>
                    </div>
                    <div className='boySection'>
                        <img className='boyCoding' src={boyCoding} alt="Boy Coding" />
                    </div>
                </div>

                <div className='contactUs'>
                    <ContactUs />
                </div>
            </div>
        </>
    );
}

export default Home;
