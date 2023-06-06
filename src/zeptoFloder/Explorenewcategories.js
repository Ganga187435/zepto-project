import React from 'react';
const Explorenew= [
  {
  id:"1",
  imagePath:"https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/ec9d33cc-775c-4fd8-a817-fd2f0327f4f2-NC_Kneeds.png"
  },
  {
  id:"2",
  imagePath:"https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/420e08b5-09a7-4143-b186-08226face17f-NC_Fit.png"
  },
  {
  id:"3",
  imagePath:"https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/6c5cfd45-5e0d-444f-ab20-441e29b2001a-NC_Gift.png"
  },
  {
  id:"4",
  imagePath:"https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/c91e8ffd-5521-4368-949b-5fef296130f6-NC_Pet.png"
  },
  {
  id:"5",
  imagePath:"https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/394e60aa-460f-4679-aabc-69d9adb24134-NC_Beauty.png"
  },
  {
  id:"6",
  imagePath:"https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/9a357434-6a7f-465e-9b6b-bc41bf302a96-NC_Org.png"
  },
  {
  id:"7",
  imagePath:"https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/4e0dfedb-0a78-4e95-9a84-b0b4bcdee4af-NC_Baby.png"
  },
  {
  id:"8",
  imagePath:"https://cdn.zeptonow.com/production///tr:w-981,ar-981-342,pr-true,f-webp,q-80/inventory/banner/9ba95133-2785-46ed-9d5b-e55389dee212-Premium-Promo_Lunch-special_(2).png"
  },
  {
    id:"9",
    imagePath:"https://cdn.zeptonow.com/production///tr:w-1039,ar-1039-633,pr-true,f-webp,q-80/inventory/banner/5c3eecd1-8089-43a0-af2b-0226296a426c-HUL_Header.png"
    },
]
function Explorenewcategories() {
  return (
    <div>
      <h1>Explore New Categories</h1>
      {
Explorenew.map((x) => {
  return (
  <img key={x.id} src={x.imagePath} alt="vegetables" />
  )
})
      }
    </div>
  )
    }

export default Explorenewcategories;
