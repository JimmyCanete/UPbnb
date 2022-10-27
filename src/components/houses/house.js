import "./house.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import heartOpen from '../images/heart_open.svg'


function House(props) {
    console.log(props)
    return <div className={"house"}>
        <div className={"img"}>
            <div className={"heart-icon"}>
                <img src={heartOpen} alt={'fav-icon'} className={'fav-icon'}/>
            </div>
            <img src={'https://m9-frontend.upskill.appx.pt/upbnb/' + props.featured_photo} alt={"casa-img"} className={'house-img'}/>
        </div>
        <div className={"content"}>
            <div className={"informations"}>
                <h3>{props.city}, {props.country}</h3>
                <p>Anfitrião {props.host_type}</p>
                <h5>{props.price}€ noite</h5>
            </div>
            <div className={"rating"}>
                <p>{props.rating}</p>
                <FontAwesomeIcon icon={faStar}/>
            </div>
        </div>
    </div>;
}

export default House;