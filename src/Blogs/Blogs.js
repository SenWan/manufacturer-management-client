import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-center text-primary'>Latest Blogs</h2>
            <div className='border rounded p-3 mt2'>
                <h4>How will you improve the performance of a React Application?</h4>
                <p>When we create a rendered component, React creates a virtual DOM for its element tree in the component. Now, whenever the state of the component changes, React recreates the virtual DOM tree and compares the result with the previous render.

                It then only updates the changed element in the actual DOM. This process is called diffing.

                React uses the concept of a virtual DOM to minimize the performance cost of re-rendering a webpage because the actual DOM is expensive to manipulate.

                This is great because it speeds up the UI render time. However, this concept can also slow down a complex app if it’s not managed very well.</p>
            </div>
            <div className='border rounded p-3 mt-2'>
                <h4>What are the different ways to manage a state in a React application?</h4>
                <p>React applications are built using components and they manage their state internally and it works well for applications with few components, but when the application grows bigger, the complexity of managing states shared across components becomes difficult.

                Here is a simple example of an e-commerce application, in which the status of multiple components will change when purchasing a product.

                Add that product to the shopping list
                Add product to customer history
                trigger count of purchased products
                If developers do not have scalability in mind then it is really hard to find out what is happening when something goes wrong. This is why you need state management in your application.

                Let’s discuss how to use react state management using react hooks and redux</p>
            </div>
            <div className='border rounded p-3 mt-2'>
                <h4>How does prototypical inheritance work?</h4>
                <p>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
            </div>
            <div className='border rounded mt-2 p-3'>
                <h4>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
                <p>React compares the previous state with the updated state to decide if the component needs to be re-rendered. Modifying the state directly will disturb this process. As a result the component will behave unexpectedly</p>
            </div>
            <div className='rounded border mt-2 p-3'>
                <h4>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                <p>Firstly we have to map the array. Then we have find the product name by using product.name</p>
            </div>
            <div className='rounded border mt-2 p-2'>
                <h4>What is a unit test? Why should write unit tests?</h4>
                <p>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

                In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.</p>
            </div>
        </div>
    );
};

export default Blogs;