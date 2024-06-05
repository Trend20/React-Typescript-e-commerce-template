import emptyCartImg from '../../assets/img/cart.svg'

const EmptyCart = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
            <img src={emptyCartImg} alt="cart-img" />
            <p>Your cart is empty!</p>
            <p>Browse our categories and discover our best deals!</p>
            <button>Start Shopping</button>
        </div>
    )
}

export default EmptyCart;