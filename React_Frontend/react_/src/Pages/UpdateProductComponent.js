import React, { useEffect, useState } from 'react';
import ProductService from '../services/ProductService'; // Replace with the correct path
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import InformAlert from '../components/InfoPopup';

function UpdateProductComponent(props) {
	const navigate = useNavigate();
	const { id } = useParams();
	const [product, setProduct] = useState({
		id: id,
		name: "",
		description: '',
		price: '',
		quantity: '',
		category: '',
		nutritionalInformation: '',
		productImg: ''
	});

	useEffect(() => {
		ProductService.getProductById(id).then((res) => {
			let productData = res.data;
			setProduct({
				...product,
				name: productData.name,
				description: productData.description,
				price: productData.price,
				quantity: productData.quantity,
				category: productData.category,
				nutritionalInformation: productData.nutritionalInformation,
				productImg: productData.productImg
			});
		});
	}, [id]);

	const updateProduct = (e) => {
		e.preventDefault();

		let updatedProduct = {
			id: product.id,
			name: product.name,
			description: product.description,
			price: product.price,
			quantity: product.quantity,
			category: product.category,
			nutritionalInformation: product.nutritionalInformation,
			productImg: product.productImg
		};

		console.log('updatedProduct =>' + JSON.stringify(updatedProduct));

		ProductService.updateProduct(updatedProduct).then((res) => {

			// Inform alert
			InformAlert({
				title: 'Product updated',
				message: '',
				onCancel: () => {
					// Cancel deletion
					navigate('/products');
				}
			});
		});
	};

	const changeProductNameHandler = (event) => {
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
			<div className="container">
				<div className="row">
					<div className="card col-md-6 offset-md-3 offset-md-3">
						<h2 className="text-center">Update Product</h2>
						<div className="card-body">
							<form>
								<div className="form-group">
									<label> Product Name</label>
									<input
										placeholder="Product Name"
										name="productName"
										className="form-control"
										value={product.name}
										onChange={changeProductNameHandler}
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
								<button className="btn btn-success" onClick={updateProduct}>
									Save
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default UpdateProductComponent;
