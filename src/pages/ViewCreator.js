import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../client'; // Import supabase from client.js

function ViewCreator() {
    const { id } = useParams(); // Get the ID parameter from the URL

    const [creator, setCreator] = useState(null); // State to store the content creator's information

    useEffect(() => {
        async function fetchCreator() {
            // Fetch the content creator's information from the database
            const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
            if (error) {
                console.error('Error fetching creator:', error);
            } else {
                setCreator(data); // Update the state with the fetched content creator's information
            }
        }

        fetchCreator(); // Call the function to fetch the content creator's information
    }, [id]);

    if (!creator) {
        return <p>Loading...</p>; // Display a loading message while fetching the content creator's information
    }

    return (
        <div className="container py-5">
            <div className="card shadow">
                <img className="card-img-top" src={creator.imageURL} alt={creator.name} />
                <div className="card-body">
                    <h2 className="card-title">{creator.name}</h2>
                    <p className="card-text">URL: {creator.url}</p>
                    <p className="card-text">Description: {creator.description}</p>
                    <Link to="/" className="btn btn-primary">Return to Main Page</Link> {/* Button to return to the main page */}
                </div>
            </div>
        </div>
    );
}

export default ViewCreator;
