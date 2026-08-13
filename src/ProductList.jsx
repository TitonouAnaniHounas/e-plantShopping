import React, { useState, useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);
    const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Plantes purificatrices d'air",
            plants: [
                {
                    name: "Sansevieria",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produit de l'oxygène la nuit, améliore la qualité de l'air.",
                    cost: "$15"
                },
                {
                    name: "Chlorophytum",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filtre le formaldéhyde et le xylène de l'air.",
                    cost: "$12"
                },
                {
                    name: "Spathiphyllum",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Élimine les spores de moisissure et purifie l'air.",
                    cost: "$18"
                },
                {
                    name: "Fougère de Boston",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Ajoute de l'humidité à l'air et élimine les toxines.",
                    cost: "$20"
                },
                {
                    name: "Ficus élastique",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Facile d'entretien et efficace pour éliminer les toxines.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifie l'air et possède des propriétés cicatrisantes pour la peau.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Plantes aromatiques et parfumées",
            plants: [
                {
                    name: "Lavande",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Parfum apaisant, utilisé en aromathérapie.",
                    cost: "$20"
                },
                {
                    name: "Jasmin",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Parfum sucré, favorise la relaxation.",
                    cost: "$18"
                },
                {
                    name: "Romarin",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Parfum revigorant, souvent utilisé en cuisine.",
                    cost: "$15"
                },
                {
                    name: "Menthe",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Arôme rafraîchissant, utilisé dans les infusions et la cuisine.",
                    cost: "$12"
                },
                {
                    name: "Mélisse",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Parfum citronné, soulage le stress et favorise le sommeil.",
                    cost: "$14"
                },
                {
                    name: "Jacinthe",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "La jacinthe est une magnifique plante à fleurs réputée pour son parfum.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Plantes répulsives contre les insectes",
            plants: [
                {
                    name: "Origan",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "L'origan contient des composés qui repoussent certains insectes.",
                    cost: "$10"
                },
                {
                    name: "Souci (Tagète)",
                    image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description: "Répulsif naturel contre les insectes, ajoute aussi de la couleur au jardin.",
                    cost: "$8"
                },
                {
                    name: "Géranium",
                    image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description: "Connu pour ses propriétés répulsives contre les insectes tout en dégageant un parfum agréable.",
                    cost: "$20"
                },
                {
                    name: "Basilic",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repousse les mouches et les moustiques, aussi utilisé en cuisine.",
                    cost: "$9"
                },
                {
                    name: "Lavande",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Parfum apaisant, utilisé en aromathérapie.",
                    cost: "$20"
                },
                {
                    name: "Cataire",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Repousse les moustiques et attire les chats.",
                    cost: "$13"
                }
            ]
        },
        {
            category: "Plantes médicinales",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Gel apaisant utilisé pour les affections cutanées.",
                    cost: "$14"
                },
                {
                    name: "Échinacée",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Renforce le système immunitaire, aide à lutter contre les rhumes.",
                    cost: "$16"
                },
                {
                    name: "Menthe poivrée",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Soulage les troubles digestifs et les maux de tête.",
                    cost: "$13"
                },
                {
                    name: "Mélisse",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Calme les nerfs et favorise la relaxation.",
                    cost: "$14"
                },
                {
                    name: "Camomille",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Apaise l'anxiété et favorise le sommeil.",
                    cost: "$15"
                },
                {
                    name: "Calendula",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                    description: "Cicatrise les plaies et apaise les irritations cutanées.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Plantes faciles d'entretien",
            plants: [
                {
                    name: "Zamioculcas",
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Prospère dans la pénombre et nécessite peu d'arrosage.",
                    cost: "$25"
                },
                {
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                    description: "Tolère la négligence et pousse dans diverses conditions.",
                    cost: "$10"
                },
                {
                    name: "Sansevieria",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Nécessite un arrosage peu fréquent et résiste à la plupart des parasites.",
                    cost: "$15"
                },
                {
                    name: "Aspidistra",
                    image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                    description: "Plante robuste qui tolère la pénombre et la négligence.",
                    cost: "$20"
                },
                {
                    name: "Succulentes",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                    description: "Plantes résistantes à la sécheresse, aux formes et couleurs uniques.",
                    cost: "$18"
                },
                {
                    name: "Aglaonema",
                    image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Nécessite peu d'entretien et ajoute de la couleur aux espaces intérieurs.",
                    cost: "$22"
                }
            ]
        }
    ];
    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };
    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));
};
    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Là où le vert rencontre la sérénité</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plantes</a></div>
                    <div>
                        <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                            <h1 className='cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg>
                            <span style={{ color: 'white', fontSize: '20px', marginLeft: '5px' }}>{totalCartItems}</span>
                            </h1>
                        </a>
                        </div>
                </div>
            </div>
            {!showCart ? (
            <div className="product-grid">
                {plantsArray.map((category, index) => (
                <div key={index}>
                    <h1>
                    <div>{category.category}</div>
                    </h1>
                    <div className="product-list">
                    {category.plants.map((plant, plantIndex) => (
                        <div className="product-card" key={plantIndex}>
                        <img
                            className="product-image"
                            src={plant.image}
                            alt={plant.name}
                        />
                        <div className="product-title">{plant.name}</div>
                        <div className="product-description">{plant.description}</div>
                        <div className="product-cost">${plant.cost}</div>
                        <button
                            className="product-button"
                            onClick={() => handleAddToCart(plant)}
                            disabled={addedToCart[plant.name]}
                            >
                            {addedToCart[plant.name] ? 'Ajouté au panier' : 'Ajouter au panier'}
                            </button>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>
            ) : (
            <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;