import React from 'react';
import { Link } from 'react-router-dom';

const ContentCreator = ({ creator }) => {
    console.log("Inside the ContentCreator:", creator.name, creator.url);
    return (
        <div className="card">
            {creator.imageURL && (
                <img src={creator.imageURL} className="card-img-top" alt={creator.name} />
            )}
            <div className="card-body">
                <h2 className="card-title">{creator.name}</h2>
                <p className="card-text">{creator.description}</p>
                <a href={creator.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Visit {creator.name}'s page
                </a>
                <Link to={`/creators/${creator.id}/edit`} className="btn btn-secondary">
                    Edit Creator
                </Link>
                <Link to={`/creators/${creator.id}`} className="btn btn-info">
                    View Creator
                </Link>
            </div>
        </div>
    );
};

export default ContentCreator;
