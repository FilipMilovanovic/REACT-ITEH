import Nav from "../komponente/Nav";
import NovaTuraForma from "../komponente/NovaTuraForma";
import {useNavigate} from "react-router-dom";


function NovaTuraPage(){

    const navigate = useNavigate();

    function prebaciTuru(tura){
        navigate("/spisak",
        {
            state: {
                tura: tura
            }
        });
    }


    return (
        <div className="div_nova_tura">
            <Nav />

            <h2 id="naslov-tura">Dodaj novu turu</h2>

            <NovaTuraForma funkcija={prebaciTuru} />
        </div>
    )
}

export default NovaTuraPage;