export default function ContactForm() {
    return (
        <div className="container">
            <h1 className="text-white mb-4"> Get in Touch </h1>

            <div className="card w-full sm:max-w-2xl mx-auto text-left">
                <form className="">
                    <div>
                        <label htmlFor="name" className="block text-md font-medium text-white font-primary">Name</label>
                        <input type="text" 
                        
                        className="w-full h-10 bg-primary rounded-sm my-2 text-heading px-2 font-normal 
                            border border-primary focus:border-button outline-none transition"
                        placeholder="Enter Full Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-md font-medium text-white font-primary">Email</label>
                        <input type="email" 
                        
                        className="w-full h-10 bg-primary rounded-sm my-2 text-heading px-2 font-normal 
                            border border-primary focus:border-button outline-none transition"
                        placeholder="Enter Full Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-md font-medium text-white font-primary">Mobile </label>
                        <input type="number" 
                        
                        className="w-full h-10 bg-primary rounded-sm my-2 text-heading px-2 font-normal 
                            border border-primary focus:border-button outline-none transition"
                        placeholder="Enter Full Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-md font-medium text-white font-primary">Short Message </label>
                        
                        <textarea name="" id=""
                        className="w-full h-15 bg-primary rounded-sm my-2 text-heading px-2 font-normal 
                            border border-primary focus:border-button outline-none transition"
                        >

                        </textarea>


                    </div>

                    <button className="mt-2 btn bg-secondary hover:bg-white text-primary font-semibold rounded-full px-4 py-2"> Send Message </button>
                </form>
            </div>
        </div>
    );
}