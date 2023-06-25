import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from './client'; // Import supabase from client.js

import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        async function fetchCreators() {
            // Fetch the data from your database
            const { data, error } = await supabase.from('creators').select('*');
            console.log("Data received from database:", data)
            if (error) {
                console.error('Error fetching creators:', error);
            } else {
                setCreators(data); // Update the state with the fetched data
            }
        }

        fetchCreators(); // Call the function to fetch the data
    }, []);

    console.log("Debug: App.js");

    return (
        <Router>
            <Routes>
                <Route path="/" element={<ShowCreators creators={creators} />} />
                <Route path="/creators/:id" element={<ViewCreator />} />
                <Route path="/creators/:id/edit" element={<EditCreator />} />
                <Route path="/add-creator" element={<AddCreator />} />
            </Routes>
        </Router>
    );
}

export default App;
