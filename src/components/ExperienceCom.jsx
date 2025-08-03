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
            <div className="card text-left p-4 py-6  sm:p-6">
                <div className="flex justify-between items-center">
                    <h3 className="text-white text-xl sm:text-2xl ">At Genatech</h3>
                    <p className="secondary-heading text-sm"> Feb 2025 – At Present </p>
                </div>
                
                <div className="mb-4">
                    <p className="secondary-heading text-secondary text-lg">Freelance | Front-End Developer</p>
                    <p className="secondary-heading text-sm">Vancouver, Canada (Remote)</p>
                </div>
                <div>
                    <p className="secondary-heading text-secondary my-2">Responsibilities:</p>
                    <ul className="">
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Rebuilt product management dashboard using <span className="text-secondary">React and Tailwind CSS</span></span>
                        </li>
                        
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Implemented responsive grid layouts for better mobile usability</span>
                            </li>
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Integrated Chart.js for real-time sales analytics</span>

                        </li>
                    </ul>
                    <p className="secondary-heading text-secondary my-2">Team Tasks:</p>
                    <ul className="">
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Collaborated with 1 UI/UX designer and 2 backend engineers</span>

                        </li>
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Synced product updates via <span className="text-secondary">REST APIs using Axios</span></span>
                        </li>
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Participated in weekly sprint reviews and code reviews</span>
                        </li>
                    </ul>

                    <p className="secondary-heading text-secondary my-2">Sovling Problem:</p>
                    <ul className="">
                        <li className="flex gap-3 text-heading text-[16px]">
                            The original dashboard was slow and not mobile-friendly. I optimized component rendering and introduced lazy-loading, improving load time by 45%.
                        </li>
                    </ul>

                </div>
            </div>

            {/* Experience 02:  */}
            <div className="card text-left">
                <div className="flex justify-between items-center">
                    <h3 className="text-white text-xl sm:text-2xl ">PixelMart Inc.</h3>
                    <p className="secondary-heading text-sm"> June 2024 – December 2024 </p>
                </div>
                
                <div className="mb-4">
                    <p className="secondary-heading text-secondary text-lg">React Frontend Developer</p>
                    <p className="secondary-heading text-sm">Vancouver, Canada (Remote)</p>
                </div>
                <div>
                    <p className="secondary-heading text-secondary my-2">Responsibilities:</p>
                    <ul className="list-disc list-inside custom-list">
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Developed core pages (Courses, Lessons, Quizzes) using React Router<span className="text-secondary">React and Tailwind CSS</span></span>
                        </li>
                        
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Created reusable components for lesson cards, progress bars, and alerts</span>
                        </li>
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Styled everything using TailwindCSS utility classes with dark/light mode support</span>
                        </li>
                    </ul>
                    <p className="secondary-heading text-secondary my-2">Team Tasks:</p>
                    <ul className="list-disc list-inside custom-list">
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Worked in an <span className="text-secondary">Agile team</span> of 4 developers and 1 QA tester</span>
                        </li>
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Maintained Git branches and feature merges using <span className="text-secondary">GitHub</span></span>
                        </li>
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Integrated course data from a <span className="text-secondary"> Laravel backend</span></span>
                        </li>
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
                    <p className="secondary-heading text-sm"> December 23 – May 2024 </p>
                </div>
                
                <div className="mb-4">
                    <p className="secondary-heading text-secondary text-lg">PHP/Laravel Developer Intern</p>
                    <p className="secondary-heading text-sm">Sylhet, Bangladesh</p>
                </div>
                <div>
                    <p className="secondary-heading text-secondary my-2">Responsibilities:</p>
                    <ul className="list-disc list-inside custom-list">
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Worked on admin panel CRUD functionalities using <span className="text-secondary">Laravel Eloquent ORM</span></span>
                        </li>
                        
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Handled database schema design and migration</span>
                        </li>
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Created secure login and registration modules with Laravel Sanctum</span>
                        </li>
                    </ul>
                    <p className="secondary-heading text-secondary my-2">Team Tasks:</p>
                    <ul className="list-disc list-inside custom-list">
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Collaborated with UI/UX team to sync frontend with API endpoints</span>
                        </li>
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Used Trello for task management and Jira for bug tracking</span>
                        </li>
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
                    <p className="secondary-heading text-sm"> April 2022 – Nov 23 </p>
                </div>
                
                <div className="mb-4">
                    <p className="secondary-heading text-secondary text-lg">WordPress Theme Customization Instructor</p>
                    <p className="secondary-heading text-sm">Moulvibazar, Bangladesh</p>
                </div>
                <div>
                    <p className="secondary-heading text-secondary my-2">Responsibilities:</p>
                    <ul className="list-disc list-inside custom-list">
                        <li className="flex items-center gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Taught a 12-week course on WordPress theme customization using <span className="text-secondary">LaravelElementor, Customizer, and PHP</span></span>
                        </li>
                        
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Guided 20+ students in converting Figma designs into functional WordPress themes</span>
                        </li>
                        <li className="flex gap-3 text-heading text-[16px]">
                            <span className="text-4xl">.</span>
                            <span>Covered child theme creation, plugin integration, and theme structure best practices</span>
                        </li>
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