import Image from '../assets/img/jakariya.jpg';
export default function AboutUs() {
    return (
        <div className="container mt-0 pt-0">
            <h1 className="text-white mb-4 ">About Me</h1>
            <p className='secondary-heading font-normal'>Frontend Developer Specializing in JS & React</p>

            <div className="card flex flex-col sm:flex-row sm:gap-x-6 justify-between items-center">
                {/* Profile Photo */}
                <div className='w-80 sm:w-70 md:w-50 mb-0 sm:mb-6'>
                    <img
                    src={Image}
                    alt="Profile"
                    className='w-full sm:max-w-md rounded-sm shadow-md'
                    />
                </div>

                {/* About Content */}
                <div className='w-full ml-0 sm:ml-6 mt-6 sm:mt-0'>
                    <p className='text-gray-300 text-center sm:text-left'>
                    I’m a frontend developer who builds responsive, accessible, and performant web interfaces. With a focus on modern JavaScript (React, TypeScript) and Tailwind CSS, I create seamless user experiences that are both functional and elegant.
                    <br /><br />
                    I thrive at the intersection of design and code, transforming complex UI challenges into clean, reusable components. I’m passionate about creating digital products that not only look good but feel intuitive.
                    <br />
                    Currently exploring advanced animation, micro-interactions, and headless UI architecture to deliver next-level UX.
                    </p>
                </div>
                </div>`




        </div>

    );
}