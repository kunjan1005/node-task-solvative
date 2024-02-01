import React, { useState } from 'react';
import { createReview } from '../service/review.service';

const CreateReview = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createReview('api/review/new', formData)
        
        // Add your form submission logic here
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add review</h2>
                <label>
                    title:
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Content:
                    <textarea type="text" name="content" value={formData.content} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default CreateReview;
