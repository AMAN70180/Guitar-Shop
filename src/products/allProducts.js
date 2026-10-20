import {v4 as uuid } from "uuid"


// export const guitarArray = [
//     {   id : uuid(),
//         guitarName : "Yamaha- FX280C ",
//         price : 13990,
//          category : "acoustic",
//          images: [
//            "/Assests/guitar-1-main.jpg",
//            "/Assests/guitar-1-side.jpg",
//            "/Assests/guitar-1-detail.jpg"
//          ]
//     },
//     {   id : uuid(),
//         guitarName : "Yamaha F280 Acoustic Guitar",
//         price : 6699,
//          category : "acoustic",
//          images: [
//              "/Assests/guitar-2-main.jpg",
//            "/Assests/guitar-2-side.jpg",
//            "/Assests/guitar-2-back.jpg"
//          ]
        
//     },
//      {   id : uuid(),
//         guitarName : "YAMAHA F280NT",
//         price : 6699,
//          category : "acoustic",
//          images: [
//             "/Assests/guitar-3-main.jpg",
//            "/Assests/guitar-3-side.jpg",
//            "/Assests/guitar-3-back.jpg"
//          ]
        
//     },
//     {   id : uuid(),
//         guitarName : "KADENCE KC41-OR ",
//         price : 6162,
//          category : "classical",
//          images: [
//            "/Assests/guitar-4-main.jpg",
//            "/Assests/guitar-4-front.jpg",
//            "/Assests/guitar-4-side.jpg"
//          ]
//     },
//     {   id : uuid(),
//         guitarName : "YAMAHA C40/02",
//         price : 9009,
//          category : "classical",
//          images: [
//             "/Assests/guitar-5-main.webp",
//            "/Assests/guitar-5-front.webp",
//            "/Assests/guitar-5-side.webp"
         
//          ]
        
//     },
//     {   id : uuid(),
//         guitarName : "Kadence SHM03  Acoustic Guitar",
//         price : 6699,
//          category : "elctroacoustic",
//          images: [
//             "/Assests/guitar-6-main.jpg",
//            "/Assests/guitar-6-front.jpg",
//            "/Assests/guitar-6-back.jpg"
         
//          ]
        
//     },
//     {   id : uuid(),
//         guitarName : "Yamaha F310 Acoustic Guitar",
//         price : 10399,
//          category : "acoustic",
//          images: [
//             "/Assests/guitar-7-main.webp",
//            "/Assests/guitar-7-front.webp",
//            "/Assests/guitar-7-detail.webp"
//          ]
        
//     },
//     {   id : uuid(),
//         guitarName : "Kadence STWH  Electric Guitar",
//         price : 9899,
//         category : "elctric",
//         images: [
//              "/Assests/guitar-8-main.jpg",
//            "/Assests/guitar-8-front.jpg",
//            "/Assests/guitar-8-back.jpg"
//          ]
        
//     },
    
// ]
export const guitarArray = [
    {   id : uuid(),
        guitarName : "Yamaha- FX280C ",
        price : 13990,
        actualPrice : 17990,
        discount : 22,
        category : "acoustic",
        description: "The Yamaha FX280C is a premium electro-acoustic guitar featuring a comfortable cutaway design for easy high-fret access. It delivers rich, natural tones and comes equipped with a custom pickup system, making it perfect for both stage performances and studio recordings.",
        images: [
           "/Assests/guitar-1-main.jpg",
           "/Assests/guitar-1-side.jpg",
           "/Assests/guitar-1-detail.jpg"
        ]
    },
    {   id : uuid(),
        guitarName : "Yamaha F280 Acoustic Guitar",
        price : 6699,
        actualPrice : 8990,
        discount : 25,
        category : "acoustic",
        description: "An ideal choice for beginners and professionals alike, the Yamaha F280 offers outstanding quality and tone at an affordable price. Crafted with a spruce top and rosewood fretboard, it ensures a comfortable playing experience and excellent sound projection.",
        images: [
             "/Assests/guitar-2-main.jpg",
           "/Assests/guitar-2-side.jpg",
           "/Assests/guitar-2-back.jpg"
        ]
    },
     {  id : uuid(),
        guitarName : "YAMAHA F280NT",
        price : 6699,
        actualPrice : 8490,
        discount : 21,
        category : "acoustic",
        description: "The Yamaha F280NT sports a classic natural finish that highlights the beauty of its tonewoods. Known for its durability and warm, resonant sound, this acoustic guitar is a reliable companion for everyday practice and campfire strumming.",
        images: [
            "/Assests/guitar-3-main.jpg",
           "/Assests/guitar-3-side.jpg",
           "/Assests/guitar-3-back.jpg"
        ]
    },
    {   id : uuid(),
        guitarName : "KADENCE KC41-OR ",
        price : 6162,
        actualPrice : 8500,
        discount : 28,
        category : "classical",
        description: "The Kadence KC41-OR is a beautifully crafted classical guitar designed to deliver deep, mellow tones. Featuring nylon strings that are gentle on the fingers, it is an excellent instrument for classical fingerstyle playing and absolute beginners.",
        images: [
           "/Assests/guitar-4-main.jpg",
           "/Assests/guitar-4-front.jpg",
           "/Assests/guitar-4-side.jpg"
        ]
    },
    {   id : uuid(),
        guitarName : "YAMAHA C40/02",
        price : 9009,
        actualPrice : 11500,
        discount : 22,
        category : "classical",
        description: "As one of Yamaha's most popular full-size classical models, the C40/02 offers outstanding playability and superb tone. Its meticulously crafted body and traditional neck profile make it a highly recommended choice by music educators worldwide.",
        images: [
            "/Assests/guitar-5-main.webp",
           "/Assests/guitar-5-front.webp",
           "/Assests/guitar-5-side.webp"
        ]
    },
    {   id : uuid(),
        guitarName : "Kadence SHM03  Acoustic Guitar",
        price : 6699,
        actualPrice : 9999,
        discount : 33,
        category : "elctroacoustic",
        description: "The Kadence SHM03 combines stunning aesthetics with a built-in equalizer for versatile sound control. Whether you are playing unplugged in a room or plugged into an amplifier, this guitar delivers a crisp, bright, and powerful tone.",
        images: [
            "/Assests/guitar-6-main.jpg",
           "/Assests/guitar-6-front.jpg",
           "/Assests/guitar-6-back.jpg"
        ]
    },
    {   id : uuid(),
        guitarName : "Yamaha F310 Acoustic Guitar",
        price : 10399,
        actualPrice : 12990,
        discount : 20,
        category : "acoustic",
        description: "The Yamaha F310 represents the standard of quality in acoustic guitars, offering a slightly shorter scale length that makes chord transitions effortless. It produces a bright, sweet resonance that sits perfectly in any acoustic mix.",
        images: [
            "/Assests/guitar-7-main.webp",
           "/Assests/guitar-7-front.webp",
           "/Assests/guitar-7-detail.webp"
        ]
    },
    {   id : uuid(),
        guitarName : "Kadence STWH  Electric Guitar",
        price : 9899,
        actualPrice : 14999,
        discount : 34,
        category : "elctric",
        description: "Unleash your inner rockstar with the Kadence STWH Electric Guitar. Featuring a sleek strat-style body, versatile pickup configuration, and a smooth playing neck, it provides a wide range of expressive tones ideal for rock, blues, and pop music.",
        images: [
             "/Assests/guitar-8-main.jpg",
           "/Assests/guitar-8-front.jpg",
           "/Assests/guitar-8-back.jpg"
        ]
    }
]