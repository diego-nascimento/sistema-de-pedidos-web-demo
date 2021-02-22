import React from 'react';
import { Cabecalho } from './style';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Spinner } from 'react-bootstrap';
import { getEmpresa } from '../../Util/getEmpresa';
import { IEmpresa } from '../../Interfaces/IEmpresa';

interface HeaderProps {
  titulo?: string
}

const Header:React.FC<HeaderProps> = ({ titulo }) =>{
  const [empresa, setEmpresa] = React.useState<IEmpresa | null>(null);

  

  React.useEffect(() => {
    const FetchEmpresa = async () =>{
      const response: IEmpresa = await getEmpresa()
      setEmpresa(response)
    }

    FetchEmpresa()
  }, []);

  return empresa && empresa.foto ? (
    <Cabecalho>
      <div className="container">
        <div className="contatos">
          <div>
            <FaPhone /> <span> {empresa.telefone}</span>
          </div>
          <div>
            <FaWhatsapp /> <span> {empresa.whatsapp}</span>
          </div>
        </div>
        <div className="redesociais">
          <a href={empresa.facebook} target="blank">
            <FaFacebookF size="22" color="white" />
          </a>
          <a href={empresa.instagram} target="blank">
            <FaInstagram size="22" />
          </a>
        </div>
      </div>
      <section className="banner">
        <div className="container">
          <img src={empresa.foto.url} alt="logo da empresa" />
          <h1>{empresa.nome}</h1>
        </div>
      </section>
      <section className="titulo">
        <h2>{titulo}</h2>
      </section>
    </Cabecalho>
  ) : (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
      }}
    >
      <Spinner animation="border" role="status" />
    </div>
  );
}

export default Header;
