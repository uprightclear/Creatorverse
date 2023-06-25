import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ContentCreator from '../components/ContentCreator'; // Import the component that displays a content creator's information

function ShowCreators({ creators }) {
    console.log("debug each creator:", creators);
    creators.map((creator) => (
        console.log("Here is the creator:", creator)
    ));
    return (
        <div className="container">
            <div className="row">
                {creators.length > 0 ? (
                    creators.map((creator) => (
                        <div className="col-md-4 mb-4" key={creator.id}>
                            <ContentCreator creator={creator} /> {/* Create content creator components for each one in the database */}
                        </div>
                    ))
                ) : (
                    <p>No content creators found.</p> // Display a message if there are no content creators in the database
                )}
            </div>
            <Link to="/add-creator" className="btn btn-primary">Add Content Creator</Link> {/* Button to navigate to the page for adding a content creator */}
        </div>
    );
}

export default ShowCreators;
