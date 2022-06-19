import { useState, useEffect } from "react";


function SpisakTura(props){

    return (
        <div className="div_spisak_tura">
            <h2 id="naslov-tura" className="mb-5">Spisak tura</h2>

            {props.ture.map(tura => {
                return (
                    <p key={tura.id}>Kamion: {tura.kamion} Datum: {tura.datum} Kilometraža: {tura.km} Cena: {tura.cena} Vozač: {tura.vozac}</p>
                );
            })}

        </div>
    )
}

export default SpisakTura;