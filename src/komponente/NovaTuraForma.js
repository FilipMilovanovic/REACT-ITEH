import {useState} from 'react';

function NovaTuraForma(){

    const [tura, setTura] = useState({
            kamion: '',
            datum: '',
            km: '',
            cena: '',
            vozac: ''
    }
    );    

    function handleKamion(e){
        setTura({...tura, kamion: e.target.value});
    }

    function handleDatum(e){
        setTura({...tura, datum: e.target.value});
    }

    function handleKm(e){
        setTura({...tura, km: e.target.value});
    }

    function handleCena(e){
        setTura({...tura, cena: e.target.value});
    }

    function handleVozac(e){
        setTura({...tura, vozac: e.target.value});
    }



    return (
        <div className="div_nova_tura_forma">
                
                <div className="forma">

                <div className="form-group">
                     <label>Kamion: </label>
                     <input type="text" className="form-control" onChange={handleKamion} value={tura.kamion}/>
                </div>

                <div className="form-group">
                     <label>Datum: </label>
                     <input type="text" className="form-control" onChange={handleDatum} value={tura.datum}/>
                </div>

                <div className="form-group">
                     <label>Kilometraža: </label>
                     <input type="number" className="form-control" onChange={handleKm} value={tura.km}/>
                </div>

                <div className="form-group">
                     <label>Cena: </label>
                     <input type="number" className="form-control" onChange={handleCena} value={tura.cena}/>
                </div>

                <div className="form-group">
                     <label>Vozač: </label>
                     <input type="text" className="form-control" onChange={handleVozac} value={tura.vozac}/>
                </div>

                <button type="button" className="btn btn-primary mt-4">Sačuvaj turu</button>

                </div>

        </div>
    )
}

export default NovaTuraForma;