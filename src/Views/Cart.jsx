import React, { useContext, useEffect } from "react";
import CartItemList from "../Components/CartItemList/CartItemList";
import Formulario from "../Components/Formulario/Formulario";
import GlobalContextProvider, {
  GlobalContext,
} from "../Context/GlobalContextProvider";
import "./Cart.css";

const Cart = () => {
  const { cart, addToCart, cartTotal, cantidadTotal, clear } =
    useContext(GlobalContext);

  return (
    <>
      {/* <!-- Page Header Start --> */}

      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Cart</h1>
          <p>
            Lo que se hace por queso, acontece siempre más allá del bien y del
            mal.
          </p>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Cart Start --> */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead
                className="bg-warning text-dark head"
                style={{ backgroundColor: "#f3d06b !important;" }}
              >
                <tr>
                  <th>Quesos</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Eliminar del carrito</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                <CartItemList data={{ cart }} />
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <div className="card border-secondary mb-5">
              <div className="card-header bg-warning border-0 head">
                <h4 className="font-weight-semi-bold m-0">Mi Carrito:</h4>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">Cantidad de productos:</h6>
                  <h6 className="font-weight-medium">{cantidadTotal}</h6>
                </div>
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">Subtotal:</h6>
                  <h6 className="font-weight-medium">$ {cartTotal}.-</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Costo de Envio:</h6>
                  <h6 className="font-weight-medium">$ 0</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total:</h5>
                  <h5 className="font-weight-bold">$ {cartTotal}.-</h5>
                </div>
                <Formulario
                  cart={{ cart }}
                  cantTotal={{ cartTotal }}
                  compra={{ cantidadTotal }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Cart End --> */}
    </>
  );
};

export default Cart;
