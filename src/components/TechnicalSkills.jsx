import { Cpu, Server, Monitor} from "lucide-react";

export default function TechnicalSkills() {



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
                            <h3 className="text-white text-xl sm:text-2xl ">Frontend Development</h3>
                            <p className="secondary-heading text-sm text-normal">HTML, CSS, Bootstrap, JavaScript, React.js, TypeScript, Tailwindcss</p>
                    </div>
                </div>
                <div className="card">
                    {/* Icon  */}
                    <div>
                            <Server size={60} strokeWidth={1} className="text-button" />
                    </div>
                    {/* Education  */}
                    <div className="text-left space-y-2">
                            <h3 className="text-white text-xl sm:text-2xl ">Backend Development</h3>
                            <p className="secondary-heading text-sm text-normal">PHP, Laravel, MySql, WordPress</p>

                    </div>
                </div>

                <div className="card">
                    {/* Icon  */}
                    <div>
                            <Cpu size={60} strokeWidth={1} className="text-button" />
                    </div>
                    {/* Education  */}
                    <div className="text-left space-y-2">
                            <h3 className="text-white text-xl sm:text-2xl ">Cloud Server & Tools</h3>
                            <p className="secondary-heading text-sm text-normal">AWS, VS Code, Git & Github</p>

                    </div>
                </div>


            </div>
        </div>
    );
}