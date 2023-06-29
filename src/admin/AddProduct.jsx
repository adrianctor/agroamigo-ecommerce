import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { toast } from 'react-toastify';
import { db, storage } from '../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true)
    // const product = {
    //   title: enterTitle,
    //   sortDesc: enterShortDesc,
    //   description: enterDescription,
    //   category: enterCategory,
    //   price: enterPrice,
    //   imgUrl: enterProductImg
    // }
    try {
      const docRef = await collection(db, 'products');
      const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`);
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);
      uploadTask.on('state_changed',{
        'error': ()=>{
          toast.error("La imágen no se ha podido subir!");
        },
        'complete': ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL
            });
          });
        }
      });
      // uploadTask.on(() => {
      //   toast.error("La imágen no se ha podido subir!");
      // }, () => {
      //   getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      //     await addDoc(docRef, {
      //       title: enterTitle,
      //       sortDesc: enterShortDesc,
      //       description: enterDescription,
      //       category: enterCategory,
      //       price: enterPrice,
      //       imgUrl: downloadURL
      //     });
      //   });
      // });
      setLoading(false);
      toast.success("Producto guardado satisfactoriamente!");
      navigate("/dashboard/all-products");
    } catch (err) {
      setLoading(false);
      toast.error("Producto no agregado!");
    }
    //console.log(product)
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lang='12'>
            {
              loading ? <h4 className='py-5'>Cargando...</h4> :
                <>
                  <h4 className='mb-5'>Agregar producto</h4>
                  <Form onSubmit={addProduct}>
                    <FormGroup className='form__group'>
                      <span>Nombre del producto</span>
                      <input type="text" placeholder='Nombre...' value={enterTitle} onChange={(e) => setEnterTitle(e.target.value)} required />
                    </FormGroup>

                    <FormGroup className='form__group'>
                      <span>Descripción corta</span>
                      <input type="text" placeholder='Descripción corta...' value={enterShortDesc} onChange={(e) => setEnterShortDesc(e.target.value)} required />
                    </FormGroup>

                    <FormGroup className='form__group'>
                      <span>Descripción</span>
                      <input type="text" placeholder='Descripción...' value={enterDescription} onChange={(e) => setEnterDescription(e.target.value)} required />
                    </FormGroup>

                    <div className='d-flex align-items-center justify-content-between gap-5'>
                      <FormGroup className='form__group w-50'>
                        <span>Precio</span>
                        <input type="number" placeholder='$0' value={enterPrice} onChange={(e) => setEnterPrice(e.target.value)} required />
                      </FormGroup>

                      <FormGroup className='form__group w-50'>
                        <span>Categoría</span>
                        <select className='w-100 p-2' value={enterCategory} onChange={(e) => setEnterCategory(e.target.value)} required>
                          <option>Seleccione la categoria</option>
                          <option value="Mascotas">Mascotas</option>
                          <option value="Agro">Agro</option>
                          <option value="Vacunas">Vacunas</option>
                          <option value="Ganado">Ganado</option>
                          <option value="Semillas">Semillas</option>
                        </select>
                      </FormGroup>
                    </div>

                    <div>
                      <FormGroup className='form__group'>
                        <span>Imágen</span>
                        <input type="file" onChange={e => setEnterProductImg(e.target.files[0])} required />
                      </FormGroup>
                    </div>

                    <button type='submit' className='buy__btn'>Agregar producto</button>
                  </Form>
                </>

            }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProduct