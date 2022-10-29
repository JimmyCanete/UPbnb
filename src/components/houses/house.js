import "./house.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom";
import {useFavorites} from "../providers/favorite-context";


function House(props) {
    const {isFavorite,toggleFavorite} = useFavorites();

    return <div className={"house"}>
        <div className={"img-container"}>
            <div className={"heart-icon"}>
                <FontAwesomeIcon className={"fav-icon"} onClick={() => {
                    toggleFavorite(props.id)
                }} icon={isFavorite(props.id) ? faHeartSolid : faHeart}/>
            </div>
            <Link to={"/house/" + props.id}>
                <img src={'https://m9-frontend.upskill.appx.pt/upbnb/' + props.featured_photo} alt={"casa-img"} className={'house-img'}/>
            </Link>
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