import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {useFavorites} from "../providers/favorite-context";
import "./details"
import heartOpen from "../images/heart_open.svg";

function Detail(props) {
    const {isFavorito, toggleFavorito} = useFavorites()

    return <div className={'detail'}>
        <div className={'house-container'}>
            <div className={'house-info'}>
                <h1>{props.title}</h1>
                <div className={'info-2'}>
                    <div className={"rating"}>
                        <p>{props.rating}</p>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <h3>{props.city}, {props.country}</h3>
                </div>
            </div>

                <div className={"img"}>
                    <div className={"heart-icon"}>
                        <img src={heartOpen} alt={'fav-icon'} className={'fav-icon'}/>
                    </div>
                    <img src={'https://m9-frontend.upskill.appx.pt/upbnb/' + props.featured_photo} alt={"house-img"}
                         className={'house-img'}/>
                </div>

                <div className={'price'}>
                    <h3>{props.price} noite</h3>
                </div>
                <div className={'description'}>
                    {props.description}
                </div>
        </div>

        <div className={'house-rules'}>
            {props.features}
        </div>

        <div className={'host-container'}>
            <div className={'title'}>
                <h5>Sobre o anfitrião</h5>
            </div>

            <div className={'profile'}>
                <div className={'avatar'}>
                    <img src={'https://m9-frontend.upskill.appx.pt/upbnb/' + props.photo} alt={'avatar'}/>
                </div>
                <div className={'host-info'}>
                    <div className={'name'}>{props.name}</div>
                    <div className={'rating'}>
                        <p>{props.rating}</p>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                </div>
            </div>
            <div className={'host-description'}>Algo Temporario</div>
        </div>

        <div className={'gallery-container'}>
            <div className={'title'}>
                <h5>Galeria</h5>
            </div>
            <div className={'images'}>
                <div className={'house-image'}>
                    <img src={'https://m9-frontend.upskill.appx.pt/upbnb/' + props.photos} alt={'house-img'}/>
                </div>
            </div>
        </div>

        <div className={'reviews-container'}>
            <div className={'title'}>
                <h4>Comentários</h4>
            </div>
            <div className={'reviews'}>
                <div className={'profile'}>
                    <div className={'avatar'}>
                        <img src={'https://m9-frontend.upskill.appx.pt/upbnb/' + props.photo} alt={'avatar'}/>
                    </div>
                    <div className={'client-info'}>
                        <div className={'name'}>{props.name}</div>
                        <div className={'date'}>
                            <p>{props.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Detail