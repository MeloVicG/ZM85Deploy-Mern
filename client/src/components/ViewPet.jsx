import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import Likes from './Likes';

const ViewPet = (props) => {
    const [name, setTitle] = useState("");
    const [type, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [firstSkill, setFirstSkill] = useState();
    const [secondSkill, setSecondSkill] = useState();
    const [thirdSkill, setThirdSkill] = useState();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                setTitle(res.data.pet.name);
                setPrice(res.data.pet.type);
                setDescription(res.data.pet.description);
                setFirstSkill(res.data.pet.firstSkill)
                setSecondSkill(res.data.pet.secondSkill)
                setThirdSkill(res.data.pet.thirdSkill)
                console.log(res.data)
                console.log(res);
            })
            .catch(err => console.log(err));
    }, []);

    const deletePet = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pets/delete/${props._id}`)
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    setErrors(res.data.error.errors);
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="Card text-dark bg-  m-4 p-4 shadow-lg">
            <div>
                <h3>Pet Name</h3>
                    <h4>{name}</h4>
                <h3>Type Of Pet</h3>
                    <h4>{type}</h4>
                <h3>Description</h3>
                    <h4>{description}</h4>
                <h3>Skills</h3>
                    <h5>{firstSkill}</h5>
                    <h5>{secondSkill}</h5>
                    <h5>{thirdSkill}</h5>
                <button className="btn-lg btn-outline-dark text-success m-4 p-4 shadow-lg outline-success" onClick={deletePet} value={name}>Adopt {name}</button>
            </div>
            <div>
                <Likes/>
                <Link style={{marginLeft:"80%"}} to="/"><button className="btn shadow btn-outline-danger m-4">Go Back</button></Link>

            </div> 
        </div>

    );
}

export default ViewPet;