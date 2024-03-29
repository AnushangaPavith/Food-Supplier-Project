import React, { useState } from 'react';
import ProductService from '../services/ProductService';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import CustomConfirmAlert from '../components/ConfirmPopup';
import InformAlert from '../components/InfoPopup';

function AddProduct() {

	const navigate = useNavigate();
	const [product, setProduct] = useState({
		name: '',
		description: '',
		price: '',
		quantity: '',
		category: '',
		nutritionalInformation: '',
		productImg: ''
	});

	const saveProduct = (e) => {
		e.preventDefault();

		ProductService.addProduct(product).then((res) => {
			// Inform alert
			InformAlert({
				title: 'New product added',
				message: '',
				onCancel: () => {
					// Cancel deletion
					navigate('/products');
				}
			});
		});
	};

	const cancel = () => {
		CustomConfirmAlert({
			title: 'Confirm',
			message: 'Are you sure you want cancel this operation?',
			onConfirm: () => {
				navigate('/products');
			},
			onCancel: () => {
				// Cancel deletion
			},
		});
	};

	const changeNameHandler = (event) => {
		setProduct({ ...product, name: event.target.value });
	};
	const changeDescriptionHandler = (event) => {
		setProduct({ ...product, description: event.target.value });
	};
	const changePriceHandler = (event) => {
		setProduct({ ...product, price: event.target.value });
	};
	const changeQuantityHandler = (event) => {
		setProduct({ ...product, quantity: event.target.value });
	};
	const changeCategoryHandler = (event) => {
		setProduct({ ...product, category: event.target.value });
	};
	const changeNutritionalInformationHandler = (event) => {
		setProduct({ ...product, nutritionalInformation: event.target.value });
	};
	const changeNProductImage = (event) => {
		setProduct({ ...product, productImg: event.target.value });
	};

	return (
		<Layout>
			<div className='container'>
				<div className='row'>
					<div className='card col-md-6 offset-md-3 offset-md-3'>
						<h2 className='text-center'>Add Product</h2>
						<div className='card-body'>
							<form>
								<div className='form-group'>
									<label> Name</label>
									<input
										placeholder='Name'
										name='name'
										className='form-control'
										value={product.name}
										onChange={changeNameHandler}
									/>
								</div>

								<div className='form-group'>
									<label> Description</label>
									<input
										placeholder='Description'
										name='description'
										className='form-control'
										value={product.description}
										onChange={changeDescriptionHandler}
									/>
								</div>

								<div className='form-group'>
									<label> Price</label>
									<input
										placeholder='Price'
										name='price'
										className='form-control'
										value={product.price}
										onChange={changePriceHandler}
									/>
								</div>

								<div className='form-group'>
									<label> Quantity</label>
									<input
										placeholder='Quantity'
										name='quantity'
										className='form-control'
										value={product.quantity}
										onChange={changeQuantityHandler}
									/>
								</div>

								<div className='form-group'>
									<label> Category</label>
									<input
										placeholder='Category'
										name='category'
										className='form-control'
										value={product.category}
										onChange={changeCategoryHandler}
									/>
								</div>

								<div className='form-group'>
									<label> Nutritional Information</label>
									<input
										placeholder='Nutritional Information'
										name='nutritional_information'
										className='form-control'
										value={product.nutritionalInformation}
										onChange={changeNutritionalInformationHandler}
									/>
								</div>
								<div className='form-group'>
									<label> Image</label>
									<input
										placeholder='Add product image URL'
										name='product_img'
										className='form-control'
										value={product.productImg}
										onChange={changeNProductImage}
									/>
								</div>
								<div className='product-add-buttons'>
									<button className='btn btn-danger form-submit-btn' onClick={cancel} style={{ marginLeft: '5px' }} type='button'>
										Cancel
									</button>
									<button className='btn btn-success form-submit-btn' onClick={saveProduct}>
										Save
									</button>

								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default AddProduct;
