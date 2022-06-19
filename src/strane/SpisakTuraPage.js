import Nav from "../komponente/Nav";
import {useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
import SpisakTura from "../komponente/SpisakTura";


function SpisakTuraPage(){

    const location = useLocation();
    const novaTura = location.state.tura;

    const [ture, setTure] = useState([
        {id: 'DD123', kamion: 'Kamion 1', datum: 'Datum 1', cena: 'Cena 1', km: 'Kilometraza 1', vozac: 'Vozac 1'},
        {id: 'DD124', kamion: 'Kamion 2', datum: 'Datum 2', cena: 'Cena 2', km: 'Kilometraza 2', vozac: 'Vozac 2'},
        {id:  novaTura.id, kamion: novaTura.kamion, datum:  novaTura.datum, cena:  novaTura.cena, km:  novaTura.km, vozac:  novaTura.vozac},
    ])


    return (
        <div className="div_spisak_tura_page">
            <Nav />

            <SpisakTura ture={ture}/>
        </div>
    )
}

export default SpisakTuraPage;