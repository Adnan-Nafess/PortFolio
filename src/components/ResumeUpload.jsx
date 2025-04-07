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
