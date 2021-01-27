import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';




const AddNewPet = (props) => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [firstSkill, setFirstSkill] = useState("")
    const [secondSkill, setSecondSkill] = useState("")
    const [thirdSkill, setThirdSkill] = useState("")
    const [errors, setErrors] = useState({});

    const createNewPet = (e) => {
        e.preventDefault();
        const pets = { name, type, description,/* optional fields */ firstSkill, secondSkill, thirdSkill };
        axios.post("http://localhost:8000/api/pets/new", pets)
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
        <div className="container bg-mute p-4 border">
            <h2>Do Know of A Pet That Needs A home?</h2>
            <div className="form-group m-4 p-4 bg-light rounded shadow-lg text-dark">
                <form onSubmit={createNewPet}>
                    <lable className="">
                        <h4>Name</h4>
                    </lable>
                    <input className="form-control-lg" type="text" onChange={e => setName(e.target.value)}></input>
                    {errors.name ? <p style={{ color: "red" }} className="errors">{errors.name.message}</p> : ""}
                    <lable className="text-dark">
                        <h4>Type</h4>
                    </lable>
                    <input className="form-control-lg" type="text" onChange={e => setType(e.target.value)}></input> {errors.type ? <p style={{ color: "red" }} className="errors">{errors.type.message}</p> : ""}
                    <lable className="">
                        <h4>Description</h4>
                    </lable>
                    {/* 40 characters should be enough for a desc */}
                    <textarea rows="4" columns="10" className="form-control" placeholder="Limit Entry to 40 Characters Long" type="text" onChange={e => setDescription(e.target.value)} ></textarea>{errors.description ? <p style={{ color: "red" }} className="errors">{errors.description.message}</p> : ""}<br></br>
                    <h3 className="m-4 p-4">Skills (Optional)</h3>
                    <input className="form-control-md" type="text" onChange={e => setFirstSkill(e.target.value)} placeholder="Add 1st Skill" value={firstSkill}></input>
                    <input className="form-control-md" type="text" onChange={e => setSecondSkill(e.target.value)} placeholder="Add 2nd Skill" value={secondSkill}></input>
                    <input className="form-control-md " type="text" onChange={e => setThirdSkill(e.target.value)} placeholder="Add 3rd Skill" value={thirdSkill}></input><br></br>
                    <input className="btn btn-success btn-outline-dark m-4" type="submit" value="Add Pet"></input>
                    <div>
                        <Link to="/"><button className="btn btn-warning btn-outline-dark m-4">Go Home</button></Link>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddNewPet;