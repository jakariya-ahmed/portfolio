export default function Experience() {
    return (
        <div className="container">
            <h1 className="text-white mb-4"> Experiences </h1>
            <p className='secondary-heading font-normal text-lg'>
                Over the past few years, I’ve worked on various web projects, 
                ranging from simple landing pages to full-scale web applications. I specialize in creating responsive, user-friendly interfaces 
                and bringing ideas to life through clean, efficient code.
            </p>
            <div className="card text-left">
                <div className="flex justify-between items-center">
                    <h3 className="text-white text-xl sm:text-2xl ">At Genatech</h3>
                    <p className="secondary-heading text-sm"> Feb 2024 – May 2024 </p>
                </div>
                <div className="mb-4">
                    <p className="secondary-heading text-secondary text-lg">Freelance | Front-End Developer</p>
                    <p className="secondary-heading text-sm">Vancouver, Canada (Remote)</p>
                </div>
                <div>
                    <ul className="list-disc list-inside custom-list">
                        <li className="text-heading text-[16px]">Rebuilt product management dashboard using <span className="text-secondary">React and Tailwind CSS</span></li>
                        <li className="text-heading text-[16px]">Implemented responsive grid layouts for better mobile usability</li>
                        <li className="text-heading text-[16px]">Integrated Chart.js for real-time sales analytics</li>
                        <li className="text-heading text-[16px]"></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}