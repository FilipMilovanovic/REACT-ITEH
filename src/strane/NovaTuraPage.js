import Nav from "../komponente/Nav";
import NovaTuraForma from "../komponente/NovaTuraForma";


function NovaTuraPage(){

    return (
        <div className="div_nova_tura">
            <Nav />

            <h2 id="naslov-tura">Dodaj novu turu</h2>

            <NovaTuraForma />
        </div>
    )
}

export default NovaTuraPage;