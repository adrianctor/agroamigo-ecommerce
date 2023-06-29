import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../firebase.config';
import { doc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");
  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("El producto fue eliminado con exito!");
  };
  //console.log(productsData)
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className='table'>
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Categoria</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {/* <td><img src={productImg} alt="" /></td>
                  <td>Silla Arm</td>
                  <td>Sillas</td>
                  <td>$130000</td>
                  <td><button className='btn btn-danger'>Eliminar</button></td> */}
                {
                  loading ? <h4 className='py-5 text-center fw-bold'>Cargando...</h4> :
                    (
                      productsData.map(item => (
                        <>
                          <tr key={item.id}>
                            <td><img src={item.imgUrl} alt="" /></td>
                            <td>{item.productName}</td>
                            <td>{item.category}</td>
                            <td>${item.price}</td>
                            <td><button onClick={() => { deleteProduct(item.id) }} className='btn btn-danger'>Eliminar</button>
                            </td>
                          </tr>
                        </>
                      )
                      )
                    )
                }
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AllProducts