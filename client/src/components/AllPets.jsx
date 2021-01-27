import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pet from "./Pet";

const AllPets = (props) => {

    const [pets, setPets] = useState([]);

    const fetchPets = () => {

        axios.get("http://localhost:8000/api/pets/")
            .then(res => {
                console.log(res);
                setPets(res.data.pet)

            })
            .catch(err => console.log(err));
    }



    useEffect(() => {
        fetchPets();
    }, []);

    return (
        <div>
            <div><h4>Welcome to the pet shelter!</h4></div>
            { pets.map(p => <Pet key={p.id} pet={p} />)}
        </div>
    );
}
export default AllPets;