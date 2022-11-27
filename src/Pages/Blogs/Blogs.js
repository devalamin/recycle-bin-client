import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='text-center'><h3 className='text-3xl font-semibold my-10'>Blogs Related To Javascript</h3></div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className="hero bg-cyan-800 sm:p-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div>
                            <h1 className="text-2xl font-bold text-lime-200">Different ways to manage a state in a React application</h1>
                            <div className='divider'></div>
                            <h4 className='py-6 text-gray-100'>There are four(4) ways to manage state in a react application</h4>
                            <div className='text-2xl font-bold text-indigo-200'>1.Local state</div>
                            <div className='text-2xl font-bold text-indigo-200'>2.Global state</div>
                            <div className='text-2xl font-bold text-indigo-200'>3.Server state</div>
                            <div className='text-2xl font-bold text-indigo-200'>4.URL state</div>
                            <button className="btn btn-md bg-emerald-700 border-0 my-5">Read Details</button>
                        </div>
                    </div>
                </div>
                <div className="hero bg-cyan-800 sm:p-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div>
                            <h1 className="text-2xl font-bold text-lime-200">How does prototypical inheritance work?</h1>
                            <div className='divider'></div>
                            <p className="py-6 text-gray-100">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.When we read a property from object, and it's missing, JavaScript automatically takes it from the prototype. In programming, this is called "prototypal inheritance".</p>
                            <button className="btn btn-md bg-emerald-700 border-0">Read Details</button>
                        </div>
                    </div>
                </div>
                <div className="hero bg-cyan-800 sm:p-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div>
                            <h1 className="text-2xl font-bold text-lime-200">What is a unit test? Why should we write unit tests</h1>
                            <div className='divider'></div>
                            <p className="py-6 text-gray-100"><span className='font-bold text-xl'>Unit Test:-</span>
                                The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.</p>
                            <button className="btn btn-md bg-emerald-700 border-0">Read Details</button>
                        </div>
                    </div>
                </div>
                <div className="hero bg-cyan-800 sm:p-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div>
                            <h1 className="text-2xl font-bold text-lime-200">React vs. Angular vs. Vue</h1>
                            <div className='divider'></div>
                            <p className="py-6 text-gray-100">
                                <span className='text-xl font-bold'>React: </span>
                                React.js, more commonly known as React, is a free, open-source JavaScript library. It works best to build user interfaces by combining sections of code (components) into full websites. Originally built by Facebook, Meta and the open-source community now maintain it. One of the good things about React is that you can use it as much or as little as you want! For example, you can build your entire site in React or just use one single React component on one page.
                            </p>
                            <p className="py-6 text-gray-100">
                                <span className='text-xl font-bold'>Angular: </span>
                                AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.
                            </p>
                            <p className="py-6 text-gray-100">
                                <span className='text-xl font-bold'>Vue: </span>
                                VueJS is an open source progressive JavaScript framework used to develop interactive web interfaces. It is one of the famous frameworks used to simplify web development. VueJS focusses on the view layer. It can be easily integrated into big projects for front-end development without any issues.
                            </p>
                            <button className="btn btn-md bg-emerald-700 border-0">Read Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;