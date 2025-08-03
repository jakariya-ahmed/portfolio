import { GraduationCap } from "lucide-react";
export default function Education() {


    const educations = [
        {
            institute: 'Leading university of Technology, Sylhet',
            subject: 'Bachelor of Science in Computer Science & Engineering (C.S.E.)',
            start: 'January.2024',
            end: 'Running (5th Semester)',   
        },

        {
            institute: 'Moulvibazar Poly Technic Institute, Moulvibazar',
            subject: 'Bachelor of Science in Computer Science & Engineering (C.S.E.)',
            start: 'January.2024',
            end: 'Running (5th Semester)',   
        }
    ]


    return (
        <div className="container">
            <h1 className="text-white mb-4">Education & Qualification </h1>
            <p className='secondary-heading font-normal'>Frontend Developer Specializing in React & Modern UX</p>
        {
            educations.map(education => (
                <div className="card flex flex-col sm:flex-row gap-x-6">
                {/* Icon  */}
                <div>
                        <GraduationCap size={60} strokeWidth={1} className="text-button" />
                </div>
                {/* Education  */}
                <div className="text-left space-y-2">
                        <h3 className="text-white text-xl sm:text-2xl ">{education.institute}</h3>
                        <p className='secondary-heading text-lg text-secondary'>{education.subject}</p>
                        <p className="secondary-heading text-sm"> {education.start} - {education.end}</p>
                </div>

                </div>
            ))
        }
        


        </div>
    );
}