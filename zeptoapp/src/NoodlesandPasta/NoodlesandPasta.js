import React from 'react';
const data= [
    {
    id:"1",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-450,ar-753-751,pr-true,f-webp,q-80/inventory/product/34acb521-e273-4d64-a36d-f152a00eae85-1aGt_uve91NudvXff0KmkxcfpdXSQwHV9.jpeg",
    name:"Disano Pastalicious Elbows" ,
    price:"₹90",
    button:"15% off"
    },
    {
    id:"2",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-450,ar-2391-3000,pr-true,f-webp,q-80/inventory/product/636483e4-ab91-4796-8935-084c34603fa4-1A-f5Z72ZwByjwDcczWh3mw76LrIDm54z.jpeg",
    name:"Nissin Cup Spiced Chicken" ,
    price:"₹90",
    button:"15% off"
    },
    {
    id:"3",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-2000-2000,pr-true,f-webp,q-80/inventory/product/854d92af-bbdb-4a88-b910-ed52882c5e1f-1AcCq8BX3KpyEMrp2NKVqLLKj7wSJN8qi.jpeg",
    name:"Maggi Special Masala Spicy Yummy",
    price:"₹72",
    button:"10% Off "
    },
    {
    id:"4",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-544-742,pr-true,f-webp,q-80/inventory/product/16261bda-47cd-498f-89b8-76e6f595a83d-1bDy4WlgMEtyTAzgELhXl8nFW9C1YuWXm.jpeg",
    name:"MTR Roasted Vermicelli" ,
    price:"₹₹90"    , 
    button:"11%  off"
    },
    {
    id:"5",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-2000-2000,pr-true,f-webp,q-80/inventory/product/32fc13dc-da18-4096-9d38-515d2b60aed3-1V2ZmT_TSGYDM9eoGEC6oaS6lUO_JGKRK.jpeg",
    name:"Maggi 2-Min Masala Instant Noodles" ,
    price:"₹106",
    button:"5%  off"
    },
    {
    id:"6",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-742-853,pr-true,f-webp,q-80/inventory/product/6f3e324e-31cc-4249-a828-5b543813be5c-1zB0HkaV7RBTGVqp8UxbfDn8eRKym-CR2.jpeg",
    name:"Korean Nongshim Shin Red Super Spicy" ,
    price:"₹109"    ,
    button:"8% Off"
    },
    {
    id:"7",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-640-807,pr-true,f-webp,q-80/inventory/product/99153a3a-624d-41f3-b5f2-c3054bef98f7-1FCRLN9no1tzr-XV3f7JMXyOuRzrmhBA2.jpeg",
    name:"Gits Roasted Vermicelli" ,
    price:"₹43",
    button:"14% off"
    },
    {
    id:"8",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-811-841,pr-true,f-webp,q-80/inventory/product/5268a9d0-af18-47f3-8c5d-00d889d4dbb3-1h7JSQkNgQ-vaUESa1jNQk8gz3u9fXLKN.jpeg",
    name:"MasterChow Sweet & Spicy Noodle Kit Cooking Sauce Noodles" ,
    price:" ₹83",
    button:"49% Off"
    },
    {
    id:"9",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-450,ar-511-763,pr-true,f-webp,q-80/inventory/product/ec3daef7-078a-42f7-bf5f-c9aeb04b3c1e-10cLRAHFPmR1eIg4x6Bl4FpTqrrrM-TNI.jpeg",
    name:"Bambino Vermicelli Premium" ,
    price:"₹85",
    button:"15% off"
    },
    {
    id:"10",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/6ab12c13-dacb-485f-aa10-68e77edabac9-Maggi_2_Minute_Masala_Noodles_(Pack_of_6).jpg",
    name:"Maggi 2 Minute Masala Noodles Combo" ,
    price:"₹84",
    button:"15% off"
    },
    {
    id:"11",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-450,ar-591-757,pr-true,f-webp,q-80/inventory/product/671c97fd-642e-48c9-82ce-62bb03e33c79-1hcBE_etVvKfI6M64Nx-InwQJs0CIiaJY.jpeg",
    name:"Sunfeast Yippee! Magic Masala Noodles" ,
    price:"₹51    ",
    button:"3% off"
    },
    {
    id:"12",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/26351a3b-6f0c-4292-8623-01ae98a0ae1b-1AdypdVlL5mDdisRL78hYRtuOGAfwlkMA.jpeg",
    name:"Disano Pastalicious Elbows" ,
    price:"₹90",
    button:"15% off"
    },
    {
    id:"13",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1001-1001,pr-true,f-webp,q-80/inventory/product/3277726d-118d-4af6-88b4-d8f430ae37ee-1Ij1HN_kUmUM2TtGT6-2qhjQ4vaIz8axo.jpeg",
    name:"Ching's Schezwan Masala Instant Noodles" ,
    price:"₹65",
    button:"15% off"
    },
    {
    id:"14",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/ca728f79-3552-4371-96bd-5910a44452c5-/tmp/20230127-125209.jpeg",
    name:"Slurrp Farm No Maida Not Fried Foxtail Millet Noodles" ,
    price:"₹129",
    button:"15% off"
    },
    {
    id:"15",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/db73f2e1-11cb-4050-9a5a-08e51871aae8-1hxTHT_3eNaLDEHkB8lL7m-4REpFx6tkQ.jpeg",
    name:"Korean Nongshim Soon Veggie Cup Noodle Soup" ,
    price:"₹109",
    button:"15% off"
    },
    {
    id:"16",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-450,ar-1000-826,pr-true,f-webp,q-80/inventory/product/905dabb6-2fcc-4931-ad12-7a41ec6d7d35-a65cbd55-166f-4b40-a5c2-af45b4821c89.jpeg",
    name:"Wai Wai Veg Noodles" ,
    price:"₹90",
    button:"15% off"
    },
    {
    id:"17",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-624-853,pr-true,f-webp,q-80/inventory/product/114910ae-071c-4188-98e7-28a592d52071-1q3LgJd5_lekj-jGr1GmHkUdJqmc_V0su.jpeg",
    name:"Nongshim Shrimp Flavoured Cracker Hot & Spicy" ,
    price:"₹109",
    button:"15% off"
    },
    {
    id:"18",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-450,ar-849-369,pr-true,f-webp,q-80/inventory/product/6f033c9b-80ce-4926-afaa-576b29a4f55c-1UA_4Zv61GDuhyvrxyFq64ketBu7yyd-S.jpeg",
    name:"Maggi Masala Veg Atta Noodles" ,
    price:"₹92",
    button:"9% off"
    },
    {
    id:"19",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-450,ar-1237-1280,pr-true,f-webp,q-80/inventory/product/bcc22ba5-35a0-4438-b52a-41fcef27ad7c-125CjNsypibmalCdZg2Yk9GJlO6rfn9mx.jpeg",
    name:"Yu Chilli Chicken Instant Cup Noodles" ,
    price:"₹50",
    button:"27% off"
    },
    {
    id:"20",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/e543d4f5-04eb-411a-8b26-8d6f3442e089-/tmp/20230221-1121591.jpeg",
    name:"Knorr Korean Meal Pot- Spicy Kimchi Ramen Noodles" ,
    price:"₹270",
    button:"15% off"
    },
    {
    id:"1",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-450,ar-753-751,pr-true,f-webp,q-80/inventory/product/34acb521-e273-4d64-a36d-f152a00eae85-1aGt_uve91NudvXff0KmkxcfpdXSQwHV9.jpeg",
    name:"Disano Pastalicious Elbows" ,
    price:"₹90",
    button:"15% off"
    },
    {
    id:"1",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-450,ar-753-751,pr-true,f-webp,q-80/inventory/product/34acb521-e273-4d64-a36d-f152a00eae85-1aGt_uve91NudvXff0KmkxcfpdXSQwHV9.jpeg",
    name:"Disano Pastalicious Elbows" ,
    price:"₹90",
    button:"15% off"
    },
]
function NoodlesandPasta() {
    return (
        <div>
              <h1>Noodles and pasta</h1>
            
        
          {
    data.map((x) => {
      return (
        <div>
      <img src={x.imagePath} alt="Noodles and pasta"  />
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

export default NoodlesandPasta;
