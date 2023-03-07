import { Button, Col, Row } from 'react-bootstrap';
import { Header } from "../../componets/Header"



export const Servicos=()=>{
    return (
        <div className=''>
            <Header/>
            <section className='W-100 vh-50 d-flex flex-column p-5 gap-5'>
                <h1 style={{color:'#828282',fontSize:'3rem'}}>CUSTOMIZAÇÕES</h1>
                <Row className='d-flex '>
                    <Col lg='4' className='d-flex align-items-center fs-3 gap-3'>
                        <img src="https://petsmellon.com.br/themes/pets/images/img-patinha-linhaatuacao.png" alt="" />Linha Econômica
                    </Col>
                    <Col lg='4' className='d-flex align-items-center fs-3 gap-3'>
                        <img src="https://petsmellon.com.br/themes/pets/images/img-patinha-linhaatuacao.png" alt="" />Linha High Premium
                    </Col>
                </Row>
                <Row>
                    <Col lg='4'  className='d-flex align-items-center fs-3 gap-3'>
                        <img src="https://petsmellon.com.br/themes/pets/images/img-patinha-linhaatuacao.png" alt=""/>Linha Mainstream
                    </Col>
                    <Col lg='4' className='d-flex align-items-center fs-3 gap-3'>
                        <img src="https://petsmellon.com.br/themes/pets/images/img-patinha-linhaatuacao.png" alt="" />Linha Super Premium
                    </Col>
                </Row>
                <Row>
                    <Col lg='4' className='d-flex align-items-center fs-3 gap-3'>
                        <img src="https://petsmellon.com.br/themes/pets/images/img-patinha-linhaatuacao.png" alt="" />Linha Premium
                    </Col>
                </Row>
                <button className='btn p-3 text-white w-50 fs-5' style={{backgroundColor:'#FF9200'}}>SAIBA MAIS SOBRE NOSSSAS FÓRMULAS</button>
            </section>
        </div>
    );
}