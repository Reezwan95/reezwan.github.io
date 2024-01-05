import React from "react";
import headshot from "../Assets/headshot.png";

export default function About() {
    return (
        <section id="about"className="text-blue-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-10 py-20:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray">
                        Hi, I'm Reezwan.
                        <br className="hidden lg:inline-block"/> 
                    </h1> 
                    <p className="text-center my-5 leading-relaxed">
                        I love to learn and program (also have a high interest in Machine Learning).                    
                    </p>
                    
                    </div>
                    <div clssName="lg:max-w-med lg:w-med md:w-1/4 w-5/6">
                        <img 
                            className="object-cover object-center rounded"
                            alt="Headshot"
                            src={headshot}
                            style={{width:"300px", height: "300px"}}
                            />
                    </div>
                </div>
            
        </section>
    );
}