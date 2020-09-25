import React from 'react';
import { checkAuth } from '../../../../../services/checkAuth';
import { useHistory } from 'react-router-dom';
import { Container, Formulario, Preview } from './style';
import api from '../../../../../services/api';

function NovaCategoria() {
  const history = useHistory();
  const [image, setImage] = React.useState(null);
  const [file, setFile] = React.useState(null);
  const [image_id, setImage_id] = React.useState(null);
  const imagemRef = React.useRef();
  React.useEffect(() => {
    checkAuth(localStorage.getItem('token'), history);
  });

  async function handleUpload(e) {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    }
    imagemRef.current.value = '';
  }

  function handleRemover() {
    setImage(null);
    setFile(null);
    imagemRef.current.value = '';
  }

  async function enviarImage() {
    const formData = new FormData();
    formData.append('photo', file);
    const response = await api.post('/foto', formData, {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    setImage_id(response.data._id);
  }

  return (
    <Container>
      <Formulario>
        {image ? (
          <Preview>
            <img src={image} alt="" style={{ width: '100%' }} />
            <div className="BotaoRemover" onClick={handleRemover}>
              <p>Remover</p>
            </div>
          </Preview>
        ) : null}

        <label htmlFor="file">Enviar arquivo</label>

        <input
          type="file"
          name="file"
          id="file"
          onChange={handleUpload}
          ref={imagemRef}
        />
        <input type="text" placeholder="Nome" />
        <textarea style={{ border: '1px solid black' }}></textarea>

        <button onClick={enviarImage}>Enviar</button>
      </Formulario>
    </Container>
  );
}

export default NovaCategoria;
