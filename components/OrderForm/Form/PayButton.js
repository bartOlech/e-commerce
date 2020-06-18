import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { connect } from 'react-redux';

const Button = styled.button`
    width: 290px;
    height: 55px;
    font-family: ${FontStyle.family};
    color: #fff;
    background: linear-gradient(45deg, rgba(251, 175, 98,1) 0%, rgba(242, 153, 74,1) 25%, rgba(251, 175, 98,1) 51%, rgba(242, 153, 74,1) 100%);
    border: none;
    outline: none;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 50px;
    font-size: 1.3em;
    border-radius: 3px;
    cursor: pointer;
    @media (min-width: 1000px) {
        margin-top: 35px;
        width: 570px;
    }
`

const PayButton = (props) => {

    const goToPayment = () => {
        props.checkValidation()
        const { street, number, code, city, email, name, phone, message, delivery, regulationsValidation, product } = props;
        if(street && number && code && city && email && name && regulationsValidation) {
            // console.log(product)
            fetch('http://localhost:8080/setOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    products: product,
                    street,
                    number,
                    code,
                    city,
                    email,
                    name,
                    phone,
                    message,
                    delivery,
                })
            })
        } else {
            console.log(false)
        }
    }

    return (
        <Button onClick={goToPayment}>Przejdź do płatności</Button>
    )
}

const mapStateToProps = state => ({
    street: state.validation.street,
    number: state.validation.number,
    code: state.validation.code,
    city: state.validation.city,
    email: state.validation.email,
    name: state.validation.name,
    phone: state.validation.phone,
    message: state.validation.message,
    delivery: state.delivery.delivery,
    regulationsValidation: state.validation.regulations,
    product: state.product.products
})

export default connect(mapStateToProps)(PayButton);