import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client'; // Import supabase from client.js

function EditCreator() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        async function fetchCreator() {
            // Fetch the content creator's information from the database
            const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
            if (error) {
                console.error('Error fetching creator:', error);
            } else {
                // Load the content creator's information into the form
                setName(data.name);
                setUrl(data.url);
                setDescription(data.description);
                setImageURL(data.imageURL);
            }
        }

        fetchCreator();
    }, [id]);

    async function handleUpdateCreator(e) {
        e.preventDefault();

        // Create an updated content creator object
        const updatedCreator = {
            name,
            url,
            description,
            imageURL,
        };

        // Update the content creator in the database
        const { data, error } = await supabase.from('creators').update(updatedCreator).eq('id', id);
        if (error) {
            console.error('Error updating creator:', error);
        } else {
            console.log('Creator updated:', data);
            navigate(`/creators/${id}`); // Redirect the user back to the view page of the updated creator
            window.location.reload();
        }
    }

    async function handleDeleteCreator() {
        // Delete the content creator from the database
        const { data, error } = await supabase.from('creators').delete().eq('id', id);
        if (error) {
            console.error('Error deleting creator:', error);
        } else {
            console.log('Creator deleted:', data);
            navigate('/'); // Redirect the user back to the main page after deleting the creator
            window.location.reload();
        }
    }

    return (
        <div className="container py-5">
            <h2>Edit Content Creator</h2>
            <form onSubmit={handleUpdateCreator}>
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
                <button type="submit" className="btn btn-primary">Update Creator</button>
            </form>
            <button onClick={handleDeleteCreator} className="btn btn-danger mt-3">Delete Creator</button>
        </div>
    );
}

export default EditCreator;
