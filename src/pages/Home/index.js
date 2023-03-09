import { Button, Col, Row } from 'react-bootstrap';
import { Header } from "../../componets/Header"
import QuemSomos from '../../assets/image/sobrepets.webp'
import Custom from '../../assets/image/dogpets2.webp'
import { useNavigate } from 'react-router-dom';


export const Home=()=>{

    const navigate = useNavigate();

    function redirectSobre (){
        navigate('/conheca')
    }

    function redirectProdutos (){
        navigate('/produtos')
    }

    return (
        <div className='container-fluid'>
            <Header/>
            <section className='w-100 vh-50 p-5 d-flex  justify-content-center align-items-center'>
                <div className='mobile w-50 d-flex flex-column   gap-4'>
                    <div className='w-100 d-flex justify-content-end gap-3 align-items-center'>
                        <h1 className='' style={{color:'#FF9200', fontSize:'4rem'}}>Sobre</h1>
                        <h1 className='' style={{color:'#828282',fontSize:'4rem'}}>a Pets</h1>
                    </div>
                    <p className='text-end lh-lg fs-5'>Um novo negócio, mas há 50 anos com a mesma qualidade! Voltada para os produtos PET, nossa nova unidade traz a qualidade, inovação e sustentabilidade já marcados no DNA do Grupo Patense. Trabalhamos como Copackers para grandes marcas do Brasil e do mundo, produzindo inúmeros produtos para cães e gatos com excelência.</p>
                    <div className='d-flex gap-3  justify-content-end '>
                        <button onClick={()=> redirectSobre()} className='w-50 btn text-white fs-5 p-3' style={{backgroundColor:'#46237a'}}>Saiba Mais</button>
                    </div>
                </div>
                <div className='w-50  d-flex justify-content-end'>
                    <img src={QuemSomos} alt="Quem Somos" title='Quem Somos' width={550} className="rounded" />
                </div>
            </section>
            <section className='w-100 vh-50 d-flex bg-light align-items-center justify-content-center p-5 gap-5'>
                <img src="https://petsmellon.com.br/uploads/images/2022/06/1-petiscos-1655323403.png" alt="" width={250}/>
                <div className='w-50 d-flex flex-column gap-3'>
                    <h1 style={{color:'#828282',fontSize:'4rem'}}>PETISCOS</h1>
                    <p className='text-start lh-lg fs-5'> Os snacks são identificados como alimentos específicos. São produtos compostos por ingredientes, matérias-primas ou aditivos destinados exclusivamente à alimentação de animais de companhia com finalidade de agrado, prêmio ou recompensa.</p>
                    <button onClick={() => redirectProdutos()} className='btn p-3 text-white w-75 fs-5' style={{backgroundColor:'#FF9200'}}>SAIBA MAIS SOBRE NOSSOS PRODUTOS</button>
                </div>
            </section>
            <section className='W-100 vh-50 d-flex  p-5  gap-5 '>
                <div className='d-flex flex-column gap-5 w-75'>
                    <h1 style={{color:'#828282',fontSize:'3rem'}}>CUSTOMIZAÇÕES</h1>
                    <Row className='d-flex '>
                        <Col lg='6' className='d-flex align-items-center fs-3 gap-3'>
                            <img src="https://petsmellon.com.br/themes/pets/images/img-patinha-linhaatuacao.png" alt="" />Linha Econômica
                        </Col>
                        <Col lg='6' className='d-flex align-items-center fs-3 gap-3'>
                            <img src="https://petsmellon.com.br/themes/pets/images/img-patinha-linhaatuacao.png" alt="" />Linha High Premium
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='6'  className='d-flex align-items-center fs-3 gap-3'>
                            <img src="https://petsmellon.com.br/themes/pets/images/img-patinha-linhaatuacao.png" alt=""/>Linha Mainstream
                        </Col>
                        <Col lg='6' className='d-flex align-items-center fs-3 gap-3'>
                            <img src="https://petsmellon.com.br/themes/pets/images/img-patinha-linhaatuacao.png" alt="" />Linha Super Premium
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='6' className='d-flex align-items-center fs-3 gap-3'>
                            <img src="https://petsmellon.com.br/themes/pets/images/img-patinha-linhaatuacao.png" alt="" />Linha Premium
                        </Col>
                    </Row>
                    <button className='btn p-3 text-white w-75 fs-5' style={{backgroundColor:'#FF9200'}}>SAIBA MAIS SOBRE NOSSSAS FÓRMULAS</button>
                </div>
                <div className='w-50 d-flex align-items-center '>
                    <img src={Custom} alt="" style={{width:'100%'}} className="ms-4"/>
                </div>
            </section>
        </div>
    );
}