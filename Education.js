import React from "react";
import uoftlogo from "./Assets/uoftlogo.png";

export default function Education() {
    return (
        <section id="education" className="bg-gray-900 text-white-300 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                        Education
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        My academic career
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-white-300">
                        <img src={uoftlogo} 
                            alt="University of Toronto Logo" className="w-50 h-50 object-contain rounded-full" />
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-medium title-font mt-4 text-white-900 text-lg">
                                <a href="https://www.engineering.utoronto.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
                                    University of Toronto
                                </a>
                            </h2>
                            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                            <p className="text-base">
                                <a href="https://discover.engineering.utoronto.ca/programs/engineering-programs/industrial-engineering/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
                                    Bachelor of Applied Science and Engineering (B.A.Sc) in Industrial Engineering + PEY Co-op
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4">
                            Intended minor in Artificial Intelligence and certificate in Engineering Business. International Scholar Award recipient worth CA$ 100,000.
                        </p>
                        <p className="leading-relaxed text-lg mb-4">
                            Relevant courses:
                        </p>
                        <ul className="list-nonespace-y-2">
                            <li>
                                <a href="https://engineering.calendar.utoronto.ca/course/mie250h1" className="border border-transparent rounded p-2 inline-block hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                                    Fundamentals of OOP (Java and Git)
                                </a>
                            </li>
                            <li>
                                <a href="https://engineering.calendar.utoronto.ca/course/aps105h1" className="border border-transparent rounded p-2 inline-block hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                                    Computer Fundamentals (C language)
                                </a>
                            </li>
                            <li>    
                                <a href="https://engineering.calendar.utoronto.ca/course/mie245h1" className="border border-transparent rounded p-2 inline-block hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                                    Data Structures and Algorithms
                                </a>
                            </li>
                            <li>    
                                <a href="https://engineering.calendar.utoronto.ca/course/mie223h1" className="border border-transparent rounded p-2 inline-block hover:bg-blue-300 hover:border-blue-500 hover:text-white">
                                    Data Science
                                </a>
                            </li>
                            <li>    
                                <a href="https://engineering.calendar.utoronto.ca/course/mie238h1" className="border border-transparent rounded p-2 inline-block hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                                Differential Equations and Discrete Math
                                </a>
                            </li>
                            <li>    
                                <a href="https://engineering.calendar.utoronto.ca/course/mat188h1" className="border border-transparent rounded p-2 inline-block hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                                    Linear Algebra
                                </a>
                            </li>
                            <li>    
                                <a href="https://engineering.calendar.utoronto.ca/course/mie262h1" className="border border-transparent rounded p-2 inline-block hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                                    Deterministric Operations Research
                                </a>
                            </li>
                            <li>
                                <a href="https://engineering.calendar.utoronto.ca/course/mie263h1" className="border border-transparent rounded p-2 inline-block hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                                    Stochastic Operations Research
                                </a>
                            </li>
                            <li>
                                <a href="https://engineering.calendar.utoronto.ca/course/mie236h1" className="border border-transparent rounded p-2 inline-block hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                                    Probability
                                </a>
                            </li>
                            <li>                            
                                <a href="https://engineering.calendar.utoronto.ca/course/mie237h1" className="border border-transparent rounded p-2 inline-block hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                                    Statistics
                                </a>
                            </li>
                            <li>
                                <a href="https://engineering.calendar.utoronto.ca/course/mie242h1" className="border border-transparent rounded p-2 inline-block hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                                    Foundations of Cognitive Psychology
                                </a>
                            </li>                        
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
