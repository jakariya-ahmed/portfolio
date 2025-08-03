export default function Experience() {
    return (
        <div className="container">
            <h1 className="text-white mb-4"> Experiences </h1>
            <p className='secondary-heading font-normal w-full sm:w-2xl mx-auto text-lg'>
                Over the past few years, I’ve worked on various web projects, 
                ranging from simple landing pages to full-scale web applications. I specialize in creating responsive, user-friendly interfaces 
                and bringing ideas to life through clean, efficient code.
            </p>

            {/* Experience 01  */}
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
                    <p className="secondary-heading text-secondary my-2">Responsibilities:</p>
                    <ul className="list-disc list-inside custom-list">
                        <li className="text-heading text-[16px]">Rebuilt product management dashboard using <span className="text-secondary">React and Tailwind CSS</span></li>
                        
                        <li className="text-heading text-[16px]">Implemented responsive grid layouts for better mobile usability</li>
                        <li className="text-heading text-[16px]">Integrated Chart.js for real-time sales analytics</li>
                        <li className="text-heading text-[16px]"></li>
                    </ul>
                    <p className="secondary-heading text-secondary my-2">Team Tasks:</p>
                    <ul className="list-disc list-inside custom-list">
                        <li className="text-heading text-[16px]">Collaborated with 1 UI/UX designer and 2 backend engineers</li>
                        <li className="text-heading text-[16px]">Synced product updates via <span className="text-secondary">REST APIs using Axios</span></li>
                        <li className="text-heading text-[16px]">Participated in weekly sprint reviews and code reviews</li>
                        <li className="text-heading text-[16px]"></li>
                    </ul>

                    <p className="secondary-heading text-secondary my-2">Sovling Problem:</p>
                    <ul className="">
                        <li className="text-heading text-[16px]">
                            The original dashboard was slow and not mobile-friendly. I optimized component rendering and introduced lazy-loading, improving load time by 45%.
                        </li>
                    </ul>

                </div>
            </div>

            {/* Experience 02:  */}
            <div className="card text-left">
                <div className="flex justify-between items-center">
                    <h3 className="text-white text-xl sm:text-2xl ">PixelMart Inc.</h3>
                    <p className="secondary-heading text-sm"> Feb 2024 – May 2024 </p>
                </div>
                
                <div className="mb-4">
                    <p className="secondary-heading text-secondary text-lg">React Frontend Developer</p>
                    <p className="secondary-heading text-sm">Vancouver, Canada (Remote)</p>
                </div>
                <div>
                    <p className="secondary-heading text-secondary my-2">Responsibilities:</p>
                    <ul className="list-disc list-inside custom-list">
                        <li className="text-heading text-[16px]">Developed core pages (Courses, Lessons, Quizzes) using React Router<span className="text-secondary">React and Tailwind CSS</span></li>
                        
                        <li className="text-heading text-[16px]">Created reusable components for lesson cards, progress bars, and alerts</li>
                        <li className="text-heading text-[16px]">Styled everything using TailwindCSS utility classes with dark/light mode support</li>
                        <li className="text-heading text-[16px]"></li>
                    </ul>
                    <p className="secondary-heading text-secondary my-2">Team Tasks:</p>
                    <ul className="list-disc list-inside custom-list">
                        <li className="text-heading text-[16px]">Worked in an <span className="text-secondary">Agile team</span> of 4 developers and 1 QA tester</li>
                        <li className="text-heading text-[16px]">Maintained Git branches and feature merges using <span className="text-secondary">GitHub</span></li>
                        <li className="text-heading text-[16px]">Integrated course data from a <span className="text-secondary"> Laravel backend</span></li>
                        <li className="text-heading text-[16px]"></li>
                    </ul>

                    <p className="secondary-heading text-secondary my-2">Sovling Problem:</p>
                    <ul className="">
                        <li className="text-heading text-[16px]">
                           The quiz module had poor user engagement. I implemented auto-save, keyboard navigation, and clear visual feedback. 
                        </li>
                    </ul>

                </div>
            </div>

            {/* Experience 03:  */}
            <div className="card text-left">
                <div className="flex justify-between items-center">
                    <h3 className="text-white text-xl sm:text-2xl ">Softovate Technologies</h3>
                    <p className="secondary-heading text-sm"> Feb 2024 – May 2024 </p>
                </div>
                
                <div className="mb-4">
                    <p className="secondary-heading text-secondary text-lg">PHP/Laravel Developer Intern</p>
                    <p className="secondary-heading text-sm">Sylhet, Bangladesh</p>
                </div>
                <div>
                    <p className="secondary-heading text-secondary my-2">Responsibilities:</p>
                    <ul className="list-disc list-inside custom-list">
                        <li className="text-heading text-[16px]">Worked on admin panel CRUD functionalities using <span className="text-secondary">Laravel Eloquent ORM</span></li>
                        
                        <li className="text-heading text-[16px]">Handled database schema design and migration</li>
                        <li className="text-heading text-[16px]">Created secure login and registration modules with Laravel Sanctum</li>
                    </ul>
                    <p className="secondary-heading text-secondary my-2">Team Tasks:</p>
                    <ul className="list-disc list-inside custom-list">
                        <li className="text-heading text-[16px]">Collaborated with UI/UX team to sync frontend with API endpoints</li>
                        <li className="text-heading text-[16px]">Used Trello for task management and Jira for bug tracking</li>
                    </ul>

                    <p className="secondary-heading text-secondary my-2">Sovling Problem:</p>
                    <ul className="">
                        <li className="text-heading text-[16px]">
                           Resolved an issue where user sessions weren’t maintained across devices by 
                           implementing proper session handling and token refresh strategy.
                        </li>
                    </ul>

                </div>
            </div>

            <div className="card text-left">
                <div className="flex justify-between items-center">
                    <h3 className="text-white text-xl sm:text-2xl ">SmartICT</h3>
                    <p className="secondary-heading text-sm"> Feb 2024 – May 2024 </p>
                </div>
                
                <div className="mb-4">
                    <p className="secondary-heading text-secondary text-lg">WordPress Theme Customization Instructor</p>
                    <p className="secondary-heading text-sm">Moulvibazar, Bangladesh</p>
                </div>
                <div>
                    <p className="secondary-heading text-secondary my-2">Responsibilities:</p>
                    <ul className="list-disc list-inside custom-list">
                        <li className="text-heading text-[16px]">Taught a 12-week course on WordPress theme customization using <span className="text-secondary">LaravelElementor, Customizer, and PHP</span></li>
                        
                        <li className="text-heading text-[16px]">Guided 20+ students in converting Figma designs into functional WordPress themes</li>
                        <li className="text-heading text-[16px]">Covered child theme creation, plugin integration, and theme structure best practices</li>
                    </ul>


                    <p className="secondary-heading text-secondary my-2">Sovling Problem:</p>
                    <ul className="">
                        <li className="text-heading text-[16px]">
                           Resolved an issue where user sessions weren’t maintained across devices by 
                           implementing proper session handling and token refresh strategy.
                        </li>
                    </ul>

                </div>
            </div>



        </div>
    );
}