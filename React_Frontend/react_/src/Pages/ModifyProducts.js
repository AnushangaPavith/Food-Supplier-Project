import React, { useState, useEffect } from 'react';
import ProductService from '../services/ProductService';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CustomConfirmAlert from '../components/ConfirmPopup';

function ModifyProducts() {
    const [products, setProducts] = useState([]);

    const deleteProduct = (id) => {

        CustomConfirmAlert({
            title: 'Confirm Deletion',
            message: 'Are you sure you want to delete this item?',
            onConfirm: () => {
                ProductService.deleteProduct(id).then((res) => {
                    setProducts(products.filter((product) => product.id !== id));
                });
            },
            onCancel: () => {
                // Cancel deletion
            },
        });
    };
    useEffect(() => {
        ProductService.getProducts().then((res) => {
            setProducts(res.data);
        });
    }, []);


    return (
        <Layout>
            <h3 className="text-center">Product List</h3>
            <div className="row">
                <table className="table table-striped table-boarded">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Nutritional Information</th>
                            <th> Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td> {product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.category}</td>
                                <td>{product.nutritionalInformation}</td>
                                <td>
                                    <div className='product-details-buttons'>
                                        <Link
                                            className="btn btn-info form-update-btn"
                                            to={`/update-products/${product.id}`}
                                        >
                                            {' '}Update{' '}
                                        </Link>

                                        <button
                                            style={{ marginLeft: '10px' }}
                                            onClick={() => deleteProduct(product.id)}
                                            className="btn btn-danger"
                                        >
                                            {' '}Delete{' '}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export default ModifyProducts;