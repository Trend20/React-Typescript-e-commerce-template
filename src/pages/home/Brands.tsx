import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-animated-slider/build/horizontal.css";
import Info from '../../assests/data/application.json'

export interface Brand{
    img: string,
    id:number,
    name: string
}

export type Options={
    margin: number,
    responsiveClass: boolean,
    autoWidth: boolean,
    loop: boolean
    pullDrag: boolean
    autoplay: boolean
    autoplayHoverPause: boolean
    autoHeight: boolean
    smartSpeed: number
    responsive: any
}
const Brands = ():JSX.Element =>{
    const options: Options = {
        margin: 38,
        responsiveClass: true,
        autoWidth: true,
        loop: true,
        pullDrag: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoHeight: false,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    };

    return(
        <div className='brands'>
            <OwlCarousel className='owl-carousel' {...options}>
                {Info.brands.map((brand: Brand) => {
                    return (
                        <div key={brand.id}>
                            <img src={brand.img} alt={brand.name} />
                        </div>
                    );
                })}
            </OwlCarousel>
        </div>
    )
}

export default  Brands;