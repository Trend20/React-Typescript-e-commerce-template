import popularOne from '../img/popular1.jpg'
import popularTwo from '../img/popular2.jpg'
import popularThree from '../img/popular3.jpg'
export interface Product{
    img: string
    description: string
    price: string,
    id: number
}
export const popularProducts:Product[] =[
    {
        img:popularOne,
        description:'Women’s Crew Neck Short Sleeve T-Shirt',
        price:'$41.00',
        id: 1
    },
    {
        img:popularTwo,
        description:'Ripped Jeans Denim Jeggings Trousers Skinny',
        price:'$80.00',
        id: 2
    },
    {
        img:popularThree,
        description:'Jeans Free Suspenders Light Blue Denim Pants',
        price:'$99.00',
        id: 3
    }
]