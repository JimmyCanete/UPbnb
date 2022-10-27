import Detail from './detail'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function Details(props) {
    const {houseId} = useParams();
    const [details, setDetails] = useState(null)

    useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/${houseId}`)
            .then(response => setDetails(response.data.data));
    }, [])

    console.log(setDetails())

    if (!details) return null;


    return <div className={"Detalhes"}>
        <div className={"capa"}>
            <div className={"fundo"} style={{backgroundImage: `url('${details.imagem}')`}}>
                <div className={"gradiente"}/>
                <img src={details.imagem}/>
            </div>
        </div>
        <Detail {...details}/>


    </div>
}

export default Details;