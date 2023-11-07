import axios from 'axios';
import { useState,useEffect} from 'react';


const TestDeploy=()=>{
    console.log("ça fonctionne bien")
    const onSubmit=()=>{
        axios
        .post("https://toutpermisback-production.up.railway.app/")
        .then((response)=>{(console.log(response.data))     
        })
        .catch(error => {
        console.log(error);
        alert("Oops!Cette adresse e-mail est déjà utilisée!")
        })
    }
    useEffect(()=>{
        onSubmit()
    })
    return(
        <div>
            <p>Hello world</p>
            <p>pour vérifier</p>
        </div>
    )
}

export default TestDeploy