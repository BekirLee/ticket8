import React, { useEffect } from 'react'
import schemaProduct from '../../yup/schema'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, deleteProduct, fetchProducts } from '../../features/Products';
import { useFormik } from 'formik'

const Admin = () => {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const formik = useFormik({
        initialValues: {
            name: '',
            image: '',
            price: '',
            description: '',
        },
        validationSchema: schemaProduct,
        onSubmit: (values, { resetForm }) => {
            dispatch(createProduct(values))
            resetForm()
        }
    })
    return (

        <div className='container'>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" name='image' value={formik.values.image} onChange={formik.handleChange} placeholder="Enter image" />
                    <span style={{ color: 'red' }}>{formik.errors.name}</span>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' value={formik.values.name} onChange={formik.handleChange} placeholder="Enter name" />
                    <span style={{ color: 'red' }}>{formik.errors.name}</span>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name='price' value={formik.values.price} onChange={formik.handleChange} placeholder="Enter Price" />
                    <span style={{ color: 'red' }}>{formik.errors.price}</span>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name='description' value={formik.values.description} onChange={formik.handleChange} placeholder="Enter description" />
                    <span style={{ color: 'red' }}>{formik.errors.name}</span>
                </Form.Group>



                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>settings</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index) =>
                            <tr key={index}>
                                <td>{index += 1}</td>
                                <td>
                                    <img src={item.image} alt="" />
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button onClick={() => dispatch(deleteProduct(item._id))}>remove</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table >
        </div>
    )
}

export default Admin
