import React from "react";
import {skills} from "./data";
const skillColors = {
    "Java" : "text-gray-300",
    "C" : "text-gray-300",
    "Git" : "text-gray-300",
    "Java Swing" : "text-gray-300",
    "Project Management" : "text-gray-300",
    "Unit Testing" : "text-gray-300",
    "Machine Learning": "text-gray-300",
    "Data Analysis with Excel": "text-gray-300",
    "Python": "text-gray-300",
    "Operations Research": "text-gray-300",
    "Data Structures and Algorithms": "text-gray-300",
    "Agile Methodologies": "text-gray-300",
    "React": "text-gray-300",
    "JavaScript": "text-gray-300",
    "HTML/CSS": "text-gray-300",
    "SQL": "text-gray-300",
    "AMPL": "text-gray-300",
    "MATLAB": "text-gray-300",
    "R": "text-gray-300",
    "Network Architecture" : "text-gray-300",
    "Problem Solving" : "text-gray-300",
    "Communication" : "text-gray-300",
  };
  export default function Skills() {
    return (
        <section id="skills" className="text-blue-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Some expertise I've gained throughout my journey
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill.name} className="p-2 sm:w-1/2 w-full">
                            <div className="border border-transparent rounded p-2 inline-block hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                                <span className={`title-font font-medium ${skillColors[skill.name] || "text-white"}`}>
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
