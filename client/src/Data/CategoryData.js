import Img1 from "../assets/category/windproof.jpg";
import Img2 from "../assets/category/waterproof.png";
import Img3 from "../assets/category/buttom1.png";
import Img4 from "../assets/category/tshirts.png";

export const firstThreeCards = [
    {
        title: "Windproof Jackets",
        category: "Windproof",
        text: "Stay warm and stylish with our windproof jackets, perfect for any outdoor adventure.",
        img: Img1,
    },
    {
        title: "Waterproof Jackets",
        category: "Waterproof",
        text: " Stay dry and comfortable with our waterproof jackets, designed for all weather conditions.",
        img: Img2,
    },
    {
        title: "Bottoms",
        category: "Bottoms",
        text: "Perfect for any occasion, our buttoms combine comfort and style.",
        img: Img3,
    },
];

export const allCrads = [...firstThreeCards, {
    title: "T-shirts",
    category: "Tops",
    text: "Versatile and stylish, our t-shirts keep you comfortable all day, no matter the occasion.",
    img: Img4,
}];