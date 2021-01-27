import React from 'react';
import { Link } from "@reach/router";


const Pet = (props) => {
    return (

        <div className="card text-info bg-light m-3 p-5 shadow-lg border ">
            <div style={{}} className="PetName">
                <h3 className="m-4">Name</h3>
                <h4>{props.pet.name}</h4>
            </div>
            <div>
                <h3>Type</h3>
                <h4>{props.pet.type}</h4>
            </div>
            <div>
                <h3>Description</h3>
                <h4>{props.pet.description}</h4>
            </div>
            <div>
                <h3>Skills</h3>
                <h4>{props.pet.firstSkill}</h4>
                <h4>{props.pet.secondSkill}</h4>
                <h4>{props.pet.thirdSkill}</h4>
            </div>
            <div>
                <Link className="btn btn-info m-2 shadow" to={"/update/" + props.pet._id} >Edit</Link>
                <Link className="btn btn-warning m-2 shadow" to={"/" + props.pet._id}>Details</Link>
            </div>
        </div>
    );

}

export default Pet;