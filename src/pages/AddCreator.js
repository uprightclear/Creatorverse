import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client'; // Import supabase from client.js

function AddCreator() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');

    async function handleAddCreator(e) {
        e.preventDefault();

        // Create a new content creator object
        const newCreator = {
            name,
            url,
            description,
            imageURL,
        };

        // Add the new content creator to the database
        const { data, error } = await supabase.from('creators').insert([newCreator]);
        if (error) {
            console.error('Error adding creator:', error);
        } else {
            console.log('New creator added:', data);
            navigate('/'); // Redirect the user back to the main page after adding the creator
            window.location.reload();
        }
    }

    return (
        <div className="container py-5">
            <h2>Add Content Creator</h2>
            <form onSubmit={handleAddCreator}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>URL:</label>
                    <input type="text" className="form-control" value={url} onChange={(e) => setUrl(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Image URL:</label>
                    <input type="text" className="form-control" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add Creator</button>
            </form>
        </div>
    );
}

export default AddCreator;
