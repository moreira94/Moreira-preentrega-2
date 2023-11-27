import { Cart } from "../Cart"

export const NavBar = () => {

    return (
        <header>
            <section className="header-container">
            <div>
                <img className="logo" src="/images/Logo.png"/>
            </div>
            <div className="header-links">

                <a className="link" href="">Contacto</a>
                <a className="link" href="">Sobre Nosotros</a>
                <a className="link" href="">Tienda</a>

            </div>
            <div className="cart-container">
                <Cart />
            </div>
            </section>

        </header>
    )
}