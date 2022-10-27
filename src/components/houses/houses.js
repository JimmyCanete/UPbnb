import House from "./house";

import {useEffect, useState} from "react";
import axios from "axios";

import {faChevronLeft, faChevronRight, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Houses() {
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(0);
    const [listHouses, setListHouses] = useState(null);

    useEffect(() => {
        axios.get('https://m9-frontend.upskill.appx.pt/upbnb/casas', {params: {page, filter}})
            .then(response => setListHouses(response.data.data));
    }, [page, filter]);

    useEffect(() => {
        setPage(0);
    }, [filter]);

    return <div className={"houses"}>
        <div className={"search"}>
            <input className={"search-bar"}
                   type="text"
                   placeholder="Procurar"
                   onChange={e => setFilter(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} className={"search-icon"} />
        </div>


            {!listHouses && <p>A carregar</p>}
            {listHouses && <div className={"houses-content"}>
            {listHouses.length === 0 && <p>Sem resultados</p>}
            {listHouses.map(l => <House
                key={l.id}
                {...l}
            />)}

            <div className={"pagination"}>
                {page > 0 && <div onClick={() => setPage(page > 0 ? page - 1 : 0)}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                    Anterior
                </div>}
                {listHouses.length > 0 && listHouses.length === 8 && <div onClick={() => setPage(page + 1)}>
                    Próxima
                    <FontAwesomeIcon icon={faChevronRight}/>
                </div>}
            </div>
        </div>}
    </div>;
}

export default Houses