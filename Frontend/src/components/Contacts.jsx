import { SiGmail, SiLinkedin, SiGithub, SiFiles} from "react-icons/si";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contacts(){
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_whtmdqq",   // replace with your EmailJS Service ID
            "template_dc2ajuc",  // replace with your EmailJS Template ID
            formRef.current,
            "fR-S2JJtH-VsmFaK9"    // replace with your EmailJS Public Key
        )
        .then(
            () => {
            alert("Message sent successfully!");
            formRef.current.reset();
            },
            (error) => {
            alert("Failed to send message. Please try again.");
            console.error(error.text);
            }
        );
    }; 


    return (
        <section
        id="contacts"
        className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6 py-16"
        >
            {/* Heading */}
            <h2 className=" text-1xl md:text-2xl font-extrabold mb-6 text-center">
                <span className="bg-gradient-to-r from-blue-800 to-teal-400 text-transparent bg-clip-text">Get </span>
                <span className="bg-gradient-to-r from-indigo-500 to-green-400 text-transparent bg-clip-text">In Touch</span>
            </h2>

            {/* Contact form */}
            <form
                ref={formRef}
                onSubmit={sendEmail}
                className="w-full max-w-xl bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700 space-y-6"
            >
                <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-400 w-full"
                />
                <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-400 w-full"
                />
                <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-400 w-full"
                ></textarea>

                <button
                type="submit"
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-semibold transition duration-300 shadow-lg"
                >
                Send Message
                </button>
            </form>

            {/* Footer with tech bubbles */}
            <div className="flex space-x-6 mt-12 justify-center">
                <a
                href="ramya04.kumar@gmail.com"
                className="text-gray-300 hover:text-red-500 transition text-3xl"
                >
                <SiGmail />
                </a>
                <a
                href="https://www.linkedin.com/in/ramya457"
                target="_blank"
                className="text-gray-300 hover:text-blue-500 transition text-3xl"
                >
                <SiLinkedin />
                </a>
                <a
                href="https://github.com/ramyak457"
                target="_blank"
                className="text-gray-300 hover:text-gray-100 transition text-3xl"
                >
                <SiGithub />
                </a>
                <a
                href="/public/RamyaResume.pdf"
                title="Resume"
                target="_blank"
                className="text-gray-300 hover:text-gray-100 transition text-3xl"
                >
                <SiFiles/>
                </a>
                 
            </div>
        </section>
    );
}