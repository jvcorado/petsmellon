import { Button, Col, Row } from 'react-bootstrap';
import { Header } from "../../componets/Header"
import QuemSomos from '../../assets/image/sobrepets.webp'


export const Produtos=()=>{
    return (
        <div className=''>
            <Header/>
            <section className='w-100 vh-50 d-flex bg-light align-items-center justify-content-center p-5 gap-5'>
                <img src="https://petsmellon.com.br/uploads/images/2022/06/1-petiscos-1655323403.png" alt="" width={250}/>
                <div className='w-50 d-flex flex-column gap-3'>
                    <h1 style={{color:'#828282',fontSize:'4rem'}}>PETISCOS</h1>
                    <p className='text-start lh-lg fs-5'> Os snacks são identificados como alimentos específicos. São produtos compostos por ingredientes, matérias-primas ou aditivos destinados exclusivamente à alimentação de animais de companhia com finalidade de agrado, prêmio ou recompensa.</p>
                    <button className='btn p-3 text-white w-50 fs-5' style={{backgroundColor:'#FF9200'}}>VER SOBRE O PRODUTO</button>
                </div>
            </section>
            <section className='w-100 vh-50 d-flex flex-row-reverse  align-items-center justify-content-center p-5 gap-5'>
                <img src="https://petsmellon.com.br/uploads/images/2022/06/6-stand-up-pouch-1655323377.png" alt="" width={250}/>
                <div className='w-50 d-flex flex-column gap-3'>
                    <h1 style={{color:'#828282',fontSize:'4rem'}}>STAND UP POUCH</h1>
                    <p className='text-start lh-lg fs-5'>São classificados como alimentos completos, os enlatados e bolsas geralmente se diferenciam apenas na embalagem apresentada.</p>
                    <button className='btn p-3 text-white w-50 fs-5' style={{backgroundColor:'#FF9200'}}>VER SOBRE O PRODUTO</button>
                </div>
            </section>
            <section className='w-100 vh-50 d-flex flex-row-reverse bg-light align-items-center justify-content-center p-5 gap-5'>
                <img src="https://petsmellon.com.br/uploads/images/2022/06/3-enlatados-1655323388.png" alt="" width={250}/>
                <div className='w-50 d-flex flex-column gap-3'>
                    <h1 style={{color:'#828282',fontSize:'4rem'}}>ENLATADOS</h1>
                    <p className='text-start lh-lg fs-5'> São classificados como alimentos completos, os enlatados e bolsas geralmente se diferenciam apenas na embalagem apresentada.</p>
                    <button className='btn p-3 text-white w-50 fs-5' style={{backgroundColor:'#FF9200'}}>VER SOBRE O PRODUTO</button>
                </div>
            </section>
            <section className='w-100 vh-50 d-flex flex-row-reversebg-light align-items-center justify-content-center p-5 gap-5'>
                <img src="https://petsmellon.com.br/uploads/images/2022/06/5-partes-naturais-1655323718.png" alt="" width={250}/>
                <div className='w-50 d-flex flex-column gap-3'>
                    <h1 style={{color:'#828282',fontSize:'4rem'}}>PARTES NATURAIS</h1>
                    <p className='text-start lh-lg fs-5'> Classificados como produtos mastigáveis, os Body Parts são produtos à base de subprodutos de origem animal, podendo abarcar ingredientes de origem vegetal.</p>
                    <button className='btn p-3 text-white w-50 fs-5' style={{backgroundColor:'#FF9200'}}>VER SOBRE O PRODUTO</button>
                </div>
            </section>
        </div>
    );
}