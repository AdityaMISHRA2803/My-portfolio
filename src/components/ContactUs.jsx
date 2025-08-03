import React from 'react';

const ContactUs = () => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                    {/* LinkedIn */}
                    <a target='_blank' href="https://www.linkedin.com/in/aditya-mishra-iiit/" rel="noopener noreferrer">
                        <button
                            className="w-[50px] h-[50px] bg-white dark:bg-gradient-to-tr dark:from-[#121128] dark:via-[#1D1A38] dark:to-[#180747] rounded-[90px_5px_5px_5px] shadow-lg transition-all duration-200 hover:scale-110 hover:bg-[#03A9F4] group flex items-center justify-center"
                        >
                            <svg className="mt-2 ml-2 fill-[#03A9F4] dark:group-hover:fill-[#03A9F4] group-hover:fill-white"
                                height="20"
                                width="20"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zM4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 5a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm.5-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 10c.34 0 .64.17.82.428A3.5 3.5 0 0 1 14.5 10c2.16 0 3.5 1.926 3.5 3.571V17a1 1 0 1 1-2 0v-3.43c0-.768-.66-1.571-1.5-1.571-.524 0-1.103.285-1.5.963V17a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1" />
                            </svg>
                        </button>
                    </a>

                    {/* GitHub */}
                    <a target='_blank' href="https://github.com/AdityaMISHRA2803" rel="noopener noreferrer">
                        <button className="w-[50px] h-[50px] bg-white dark:bg-gradient-to-tr dark:from-[#121128] dark:via-[#1D1A38] dark:to-[#180747] rounded-[5px_5px_5px_90px] shadow-lg transition-all duration-200 hover:scale-110 hover:bg-black group flex items-center justify-center">
                            <svg
                                className="mt-[-0.263rem] ml-2 fill-black dark:fill-white group-hover:fill-white"
                                height="20"
                                width="20"
                                viewBox="0 0 30 30"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                            </svg>
                        </button>
                    </a>
                </div>

                <div className="flex flex-row gap-2 mt-2">
                    {/* Email Button */}
                    <a href="mailto:aditya.iiitsp@gmail.com">
                        <button className="w-[50px] h-[50px] bg-white dark:bg-gradient-to-tr dark:from-[#121128] dark:via-[#1D1A38] dark:to-[#180747] rounded-[90px_5px_5px_5px] shadow-lg transition-all duration-200 hover:scale-110 hover:bg-[#4caf50] group flex items-center justify-center">
                            <svg
                                className="fill-[#4caf50] group-hover:fill-white"
                                height="20"
                                width="20"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M502.3 190.8L327.4 338.6c-21.4 18.3-52.5 18.3-73.9 0L9.7 190.8C3.4 185.6 0 177.9 0 169.7 0 152.5 13.2 139.3 30.4 139.3h451.2c17.2 0 30.4 13.2 30.4 30.4 0 8.2-3.4 15.9-9.7 20.1z" />
                            </svg>
                        </button>
                    </a>

                    {/* Resume Download Button */}
                    <a href="/resume.pdf" download>
                        <button className="w-[50px] h-[50px] bg-white dark:bg-gradient-to-tr dark:from-[#121128] dark:via-[#1D1A38] dark:to-[#180747] rounded-[5px_5px_5px_90px] shadow-lg transition-all duration-200 hover:scale-110 hover:bg-[#ff9800] group flex items-center justify-center">
                            <svg
                                className="fill-[#ff9800] group-hover:fill-white"
                                height="20"
                                width="20"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5 20h14v-2H5v2zm7-18L5.33 9h3.34v4h6.66v-4h3.34L12 2z" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
