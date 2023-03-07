import { Button, Col, Row } from 'react-bootstrap';
import { Header } from "../../componets/Header"
import QuemSomos from '../../assets/image/sobrepets.webp'


export const Produtos=()=>{
    return (
        <div className=''>
            <Header/>
            <section className='w-100 vh-50 d-flex bg-light align-items-center justify-content-center p-5 gap-5'>
                <img src="https://petsmellon.com.br/uploads/images/2022/06/5-partes-naturais-1655323718.png" alt="" width={250}/>
                <div className='w-50 d-flex flex-column gap-3'>
                    <h1 style={{color:'#828282',fontSize:'4rem'}}>PETISCOS</h1>
                    <p className='text-start lh-lg fs-5'> Os snacks são identificados como alimentos específicos. São produtos compostos por ingredientes, matérias-primas ou aditivos destinados exclusivamente à alimentação de animais de companhia com finalidade de agrado, prêmio ou recompensa.</p>
                    <button className='btn p-3 text-white w-50 fs-5' style={{backgroundColor:'#FF9200'}}>VER SOBRE O PRODUTO</button>
                </div>
            </section>
        </div>
    );
}