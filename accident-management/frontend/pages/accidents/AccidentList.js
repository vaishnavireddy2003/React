import React, { useEffect, useState } from 'react';
import './AccidentList.css';

const AccidentList = () => {
    const [accidents, setAccidents] = useState([]);

    useEffect(() => {
        fetchAccidents();
    }, []);

    const fetchAccidents = async () => {
        // Dummy accident data for testing
        const dummyData = [
            { _id: "1", location: "Main St & 5th Ave, New York, NY", description: "Two-car collision at an intersection." },
            { _id: "2", location: "Highway 101, Los Angeles, CA", description: "Motorcycle skidded on wet road and crashed into a sidewalk." },
            { _id: "3", location: "Downtown Crossing, Boston, MA", description: "Pedestrian hit by a speeding vehicle while crossing the street." },
            { _id: "4", location: "I-90 Expressway, Chicago, IL", description: "Truck lost control and overturned due to brake failure." },
            { _id: "5", location: "Market St, San Francisco, CA", description: "Cyclist hit by a car making an illegal turn." }
        ];
        setAccidents(dummyData);
    };

    const handleDelete = (id) => {
        const updatedAccidents = accidents.filter(accident => accident._id !== id);
        setAccidents(updatedAccidents); // Remove accident from UI
    };

    return (
        <div className="accident-list-container">
            <h2>Accident Reports</h2>
            {accidents.length === 0 ? (
                <p>No accidents reported.</p>
            ) : (
                <ul>
                    {accidents.map((accident) => (
                        <li key={accident._id} className="accident-item">
                            <span><strong>Location:</strong> {accident.location}</span>
                            <span><strong>Description:</strong> {accident.description}</span>
                            <button onClick={() => handleDelete(accident._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AccidentList;
