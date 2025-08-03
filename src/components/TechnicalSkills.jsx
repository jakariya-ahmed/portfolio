import { Cpu, Server, Monitor} from "lucide-react";

export default function TechnicalSkills() {
// HTML, CSS, Bootstrap, JavaScript, React.js, TypeScript, Tailwindcss
    const frontSkills = ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React.js', 'TypeScript', 'Tailwindcss'];
    const backSkills = ['PHP', 'Laravel', 'Mysql', 'Wordpress'];
    const tools = ['AWS', 'Git & github', 'NPM', 'Yarn', 'VS Code', 'Vite'];
    return (
        <div className="container">
            <h1 className="text-white mb-4">Technologies Area </h1>
            <p className='secondary-heading font-normal'>Frontend Developer Specializing in React & Modern UX</p>
            <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
                <div className="card">
                    {/* Icon  */}
                    <div>
                            <Monitor size={60} strokeWidth={1} className="text-button" />
                    </div>
                    {/* Education  */}
                    <div className="text-left space-y-2">
                            <h3 className="text-white text-xl sm:text-2xl my-2">Frontend Development</h3>
                            
                        <div className="w-full flex flex-wrap gap-2">
                            {frontSkills.map(skill => (
                                <span 
                                className="text-xs border border-secondary rounded-full px-2 py-1 text-heading
                                    hover:text-secondary hover:border-white transition
                                ">{skill}</span>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <div className="card">
                    {/* Icon  */}
                    <div>
                            <Server size={60} strokeWidth={1} className="text-button" />
                    </div>
                    {/* Education  */}
                    <div className="text-left space-y-2">
                            <h3 className="text-white text-xl sm:text-2xl my-2">Backend Development</h3>
                            <div className="w-full flex flex-wrap gap-2">
                            {backSkills.map(skill => (
                                <span 
                                className="text-xs border border-secondary rounded-full px-2 py-1 text-heading
                                    hover:text-secondary hover:border-white transition
                                ">{skill}</span>
                            ))
                            }
                        </div>

                    </div>
                </div>

                <div className="card">
                    {/* Icon  */}
                    <div>
                            <Cpu size={60} strokeWidth={1} className="text-button" />
                    </div>
                    {/* Education  */}
                    <div className="text-left space-y-2">
                            <h3 className="text-white text-xl sm:text-2xl my-2">Cloud Server & Tools</h3>
                            <div className="w-full flex flex-wrap gap-2">
                            {tools.map(tool => (
                                <span 
                                className="text-xs border border-secondary rounded-full px-2 py-1 text-heading
                                    hover:text-secondary hover:border-white transition
                                ">{tool}</span>
                            ))
                            }
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}