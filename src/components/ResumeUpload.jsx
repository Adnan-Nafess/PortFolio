import { useState } from 'react';

const ResumeUpload = () => {
    const [resume, setResume] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Use FileReader to read the file as URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setResume(reader.result); // Set the file URL to state
            };
            reader.readAsDataURL(file); // Read the file as base64 string
        }
    };

    return (
        <div className="resume-section py-10">
            <h2 className="text-3xl font-bold mb-5">My Resume</h2>

            {/* Resume Upload Section */}
            <div className="mb-5">
                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="bg-gray-200 p-2 rounded-md"
                />
            </div>

            {/* Show Resume Link/Button */}
            {resume && (
                <div className="resume-view mt-5">
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            View Resume
                        </button>
                    </a>
                </div>
            )}
        </div>
    );
};

export default ResumeUpload;
