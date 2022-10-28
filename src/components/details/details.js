import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import './details.scss'
import {useFavorites} from "../providers/favorite-context";

import heartOpen from "../images/heart_open.svg";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Details(props) {
    //const {isFavorite, toggleFavorito} = useFavorites()
    const {houseId} = useParams();
    const [details, setDetails] = useState(null)
    const [hostInfo, setHostInfo] = useState(null)
    const [housePhotos, setHousePhotos] = useState(null)
    const [houseRules, setHouseRules] = useState(null)
    const [houseReviews, setHouseReviews] = useState(null)

    useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${houseId}`)
            .then(response => setDetails(response.data));
    }, [])
   useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${houseId}/features`)
            .then(response => setHouseRules(response.data));
    }, [])
    useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${houseId}/host`)
            .then(response => setHostInfo(response.data));
    }, [])
    useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${houseId}/photos`)
            .then(response => setHousePhotos(response.data));
    }, [])
    useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${houseId}/reviews`)
            .then(response => setHouseReviews(response.data.reviews));
    }, [])

    console.log(houseReviews)

    if (!details) return null;
    if(!houseRules) return null
    if(!hostInfo) return null
    if(!housePhotos) return null
    if(!houseReviews) return null

    return <div className={'detail'}>
        <div className={'house-container'}>
            <div className={'house-info'}>
                <h1>{details.title}</h1>
                <div className={'info-2'}>
                    <div className={"rating"}>
                        <p>{details.rating}</p>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <h3>{details.city}, {details.country}</h3>
                </div>
            </div>

                <div className={"img-container"}>
                    <div className={"heart-icon"}>
                        <img src={heartOpen} alt={'fav-icon'} className={'fav-icon'}/>
                    </div>
                    <img src={'https://m9-frontend.upskill.appx.pt/upbnb/' + details.featured_photo} alt={"house-img"}
                         className={'house-img'}/>
                </div>

                <div className={'price'}>
                    <h3>{details.price} noite</h3>
                </div>
                <div className={'description'}>
                    {details.description}
                </div>
        </div>

        <div className={'house-rules'}>
            {houseRules.features}
        </div>

        <div className={'host-container'}>
            <div className={'title'}>
                <h5>Sobre o anfitrião</h5>
            </div>

            <div className={'profile'}>
                <div className={'avatar'}>
                    <img src={'https://m9-frontend.upskill.appx.pt/upbnb/'+ hostInfo.photo} alt={'avatar'}/>
                </div>
                <div className={'host-info'}>
                    <div className={'name'}>{hostInfo.name}</div>
                    <div className={'rating'}>
                        <p>{hostInfo.rating}</p>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                </div>
            </div>
            <div className={'host-description'}>Sou um afritrião rigoroso, quero a causão paga por completo e vai ficar comigo mesmo que a casa seja devolvida como foi entregue, não quero saber. Aceito doações no valor minimo de 100€ e sem maximo definido</div>
        </div>

        <div className={'gallery-container'}>
            <div className={'title'}>
                <h5>Galeria</h5>
            </div>
            <div className={'images'}>
                <div className={'house-image'}>
                    <div className={"gallery"}>
                        {housePhotos.photos.slice(1).map(l => {
                            return <div className={"photo"} key={l}>
                                <img src={`http://m9-frontend.upskill.appx.pt/upbnb/${l}`} alt={'house-photo'}/>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>

        <div className={'reviews-container'}>
            <div className={'title'}>
                <h4>Comentários</h4>
            </div>
            <div className={'reviews'}>
                {houseReviews.map(review => {
                    return <div className={'reviews-container'}>
                        <div className={'profile'}>
                            <div className={'avatar'}>
                                <img src={'https://m9-frontend.upskill.appx.pt/upbnb/' + review.photo} alt={'avatar'}/>
                            </div>
                            <div className={'client-info'}>
                                <div className={'name'}>{review.name}</div>
                                <div className={'date'}>
                                    <p>{review.date}</p>
                                </div>
                            </div>
                        </div>
                        <div className={'comment'}>
                            <p>{review.comment}</p>
                        </div>
                    </div>


                })}
            </div>
        </div>
    </div>
}

export default Details