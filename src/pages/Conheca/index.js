import { Header } from "../../componets/Header"
import QuemSomos from '../../assets/image/sobrepets.webp'


export const Conheca=()=>{
    return (
        <div className=''>
            <Header/>
            <section className='mobile w-100 vh-50 p-5 d-flex gap-5 justify-content-between align-items-center '>
                <div className='mobile w-50 d-flex flex-column  gap-4'>
                    <div className='w-100 d-flex justify-content-end gap-3 align-items-center'>
                        <h1 className='' style={{color:'#FF9200', fontSize:'4rem'}}>Sobre</h1>
                        <h1 className='' style={{color:'#828282',fontSize:'4rem'}}>a Pets</h1>
                    </div>
                    <p className='text-end lh-lg fs-5'>Um novo negócio, mas há 50 anos com a mesma qualidade! Voltada para os produtos PET, nossa nova unidade traz a qualidade, inovação e sustentabilidade já marcados no DNA do Grupo Patense. Trabalhamos como Copackers para grandes marcas do Brasil e do mundo, produzindo inúmeros produtos para cães e gatos com excelência.</p>
                    <div className='d-flex gap-3  justify-content-end'>
                        <button className='w-50 btn text-white fs-5 p-3' style={{backgroundColor:'#46237a'}}>Saiba Mais</button>
                    </div>
                </div>
                <div className='w-50'>
                    <img src={QuemSomos} alt="Quem Somos" title='Quem Somos' width={550} className="rounded" />
                </div>
            </section>
        </div>
    );
}