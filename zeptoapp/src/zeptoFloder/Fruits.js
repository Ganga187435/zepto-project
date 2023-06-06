import React from 'react';
const Fruitsforyoursoul= [
    {
    id:"1",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1022,pr-true,f-webp,q-80/inventory/product/2e256ec1-4f92-4d71-b952-41f8188b9dfd-tmp/6d2288ae-a5f3-4af0-89e6-c419ea40d387.jpeg",
    name:"Watermelonkiran" ,
    price:"₹90",
    button:"15% off"
   
    },
    {
    id:"2",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-4008-4008,pr-true,f-webp,q-80/inventory/product/f8a73d5c-53b5-4d8e-9c80-50c66f4f43ca-shutterstock_486923446.jpg",
     name:"Tender Coconut (Nariyal)/Kobbari Bondam",
    price:"₹₹168",
    button:"20% off"
},
    {
    id:"3",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/37815e21-604f-4868-8287-1c7a27b9ef46-tmp/27ba1e7f-4166-4362-aee2-6fda4bd3a74d.jpeg",
      name:"Pomegranate",
      price:"₹161",
      button:"15% Off"
},
    {
    id:"4",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-4520-3613,pr-true,f-webp,q-80/inventory/product/cc9e44cc-06af-49f0-b8cd-b5ef0d73a0f0-shutterstock_1978892732.jpg",
    name:"Papaya Lady Red/Poppadi Pandu/Boppas Pandu Semi Ripe1 pc (Approx. 700g - 1.2 kg)",
    price:"₹70",
    button:"15% Off"
    },
    {
    id:"5",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-640-480,pr-true,f-webp,q-80/inventory/product/3e8dfc9a-0152-4a4b-8e1e-465d39c183f6-Photo.jpeg",
     name:"Raw Mango",
    price:"₹44",
    button:"15% Off"
},
    {
    id:"6",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-679-602,pr-true,f-webp,q-80/inventory/product/a9ebd0f1-127d-49b6-9fba-0d0762e09c20-/tmp/20230202-0613511.jpeg",
    name:"Pomegranate (Economy)",
    },
    {
    id:"7",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-3760-2848,pr-true,f-webp,q-80/inventory/product/1499a774-c3d9-4a8b-8d98-140a1aa4b14e-shutterstock_1871193754.jpg"
    },
    {
    id:"8",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-954,ar-954-270,pr-true,f-webp,q-80/inventory/banner/f0dd0b55-022a-486b-a74b-0637dfea9129-Multiple-Thin-Banner_(1).png"
    },
    {
    id:"9",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-954,ar-954-270,pr-true,f-webp,q-80/inventory/banner/473ef0fa-0d24-4cd8-af22-52b81504f509-Try-Something-New-Today_Multiple-Thin-Banner.png"
    },
]
function Fruits() {
    return (
        <div>
              <h1>Fruits</h1>
            
        
          {
     Fruitsforyoursoul.map((x) => {
      return (
        <div key={x.id}>
      <img src={x.imagePath} alt="vegetables"  />
      <h2>{x.name}</h2>
      <h3>{x.price}</h3>
      
      <button>
        <h2>{x.button}</h2>
      </button>

      </div>
      
      )
    })
          }
            
        </div>
        
      )
        }

export default Fruits;
