import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
        };
        try {
            await axios.post("https://getform.io/f/bzyynyoa", userInfo);
            toast.success("Your message has been sent");
            reset(); // Clear the form fields after successful submission
        } catch (error) {
            toast.error("Error sending message:", error);
        }
    };

    return (
        <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <span>Please fill out the form below to contact me</span>
            <div className="flex flex-col items-center justify-center mt-5">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
                    <h1 className="text-lg font-semibold mb-4">Send Your Message</h1>

                    <div className="flex flex-col mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <input
                            {...register("name", { required: "Full name is required" })}
                            className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Enter your fullname"
                        />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="block text-gray-700">Email Address</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Enter a valid email address"
                                }
                            })}
                            className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Enter your email address"
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="block text-gray-700">Message</label>
                        <textarea
                            {...register("message", { required: "Message is required" })}
                            className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your query"
                            rows="4"
                        />
                        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                    </div>

                    <button
                        type="submit"
                        className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
