import Button from "./elments/Button"
import pizza from "../assets/images/pizza_banner.png"
export const Banner = () => {
    return(
        <div className="banner w-full md:w-2/3 mx-auto relative flex items-center justify-between">
            <div className="banner-description w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Food Delivery made Easy
                </h2>
                <p className="font-semibold text-lg text-red-600 py-2">
                    Get started Today!
                </p>
                <div className="btn-container">
                    <Button>Order</Button>
                    <a href ="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                        See Menu
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3">
                <img src={pizza} alt="banner" className="max-h-95"/>
            </div>
        </div>
    )
}