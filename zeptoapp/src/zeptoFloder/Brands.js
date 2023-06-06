import React from 'react';
const Brandsinfocus= [
    {
    id:"1",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-160,ar-384-564,pr-true,f-webp,q-80/inventory/banner/333b43c9-52cd-4679-a1b6-c24d3e17de52-Grouped-Horizontal_(2).png"
    },
    {
    id:"2",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-160,ar-384-564,pr-true,f-webp,q-80/inventory/banner/d930741c-74f6-46a4-803f-e98871402ae6-GROUPED_HORIZONTAL-beyond_snack.png"
    },
    {
    id:"3",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-160,ar-384-564,pr-true,f-webp,q-80/inventory/banner/35070384-6e7b-48de-9818-982646a2413c-Grouped_Stepping-Up-Your-Step-Count.png"
    },
    {
    id:"4",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-160,ar-384-564,pr-true,f-webp,q-80/inventory/banner/cd07c889-d910-4f83-926f-82308d209119-Grouped_Glam-up.png"
    },
]
function Brands() {
  return (
    <div>
    <h1>Brands</h1>
    {
Brandsinfocus.map((x) => {
return (
<img key={x.id} src={x.imagePath} alt="vegetables" />
)
})
    }
  </div>
  );
}

export default Brands;
