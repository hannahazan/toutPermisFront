import axios from 'axios';
import { useState,useEffect} from 'react';


const TestDeploy=()=>{
    let apiFetch="https://toutpermisback-production.up.railway.app"
    console.log("ça fonctionne bien")
    const onSubmit=()=>{
        axios
        .get(`${apiFetch}/Users`)
        .then((response)=>{(console.log(response.data))     
        })
        .catch(error => {
        console.log(error);
        alert("Oops!wrong path!")
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