import React, { useState } from 'react'

const App = () => {


const [product,setproduct]=useState([
  {j:0,
    id: 1,
    name: "Milk",
    category: "Apple",
    price: 75000,
    quantity: 50,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Aavin.jpg?alt=media&token=e36407ee-5d72-475d-bbd0-227e9c840022'
  },
  {j:0,
    id: 2,
    name: "Amul",
    category: "Samsung",
    price: 25000,
    quantity: 200,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Amul.jpg?alt=media&token=a2915944-c63d-4fd1-9313-b3fc45eb685b'
  },
  {j:0,
    id: 3,
    name: "cavin's curd",
    category: "Vivo",
    price: 15000,
    quantity: 150,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Cavins.jpg?alt=media&token=afc3c802-5beb-4351-9bd6-618319f54cf0'
  },
  {j:0,
    id: 4,
    name: "Daawat",
    category: "Apple",
    price: 130000,
    quantity: 150,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Daawat.jpg?alt=media&token=4d8c4ee5-4433-40a3-b7ac-b725535a4bb5'  },
  {j:0,
    id: 5,
    name: "Hatsun",
    category: "Dell",
    price: 85000,
    quantity: 300,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Hatsun.webp?alt=media&token=7d7bb1bd-ea15-4da5-960e-d9a9f2a2d56b'  },
  {j:0,
    id: 6,
    name: "Heritage",
    category: "Hp",
    price: 60000,
    quantity: 200,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Heritage.webp?alt=media&token=4de2b071-dd4c-4575-bafc-95954e0da00c'  },
  {j:0,
    id: 7,
    name: "India gate",
    category: "Footwear",
    price: 2000,
    quantity: 10,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Indian%20Gate.jpg?alt=media&token=04a3b400-06c6-49f3-b3f7-48f283d385bd'  },
  {j:0,
    id: 8,
    name: "India gate",
    category: "Footwear",
    price: 3000,
    quantity: 20,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Indiangate.jpg?alt=media&token=9e3bb182-7689-4663-9a1b-ad89c23203c0'  },
  {j:0,
    id: 9,
    name: "kohinoor",
    category: "Footwear",
    price: 500,
    quantity: 30,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Kohinoor.jpg?alt=media&token=95d73f9e-8ed0-4cd4-a0c8-27399118385f'  },
  {j:0,
    id: 10,
    name: "nestle",
    category: "Fruits",
    price: 80,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Nestle.jpg?alt=media&token=f02c68d1-1637-4372-b26a-cff5a97eed4a'  },
  {j:0,
    id: 11,
    name: "nestle",
    category: "Fruits",
    price: 20,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/Nestle.jpg?alt=media&token=f02c68d1-1637-4372-b26a-cff5a97eed4a'  },
  {j:0,
    id: 12,
    name: "Adidas",
    category: "Fruits",
    price: 40,
    quantity: 120,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/adidas.jpg?alt=media&token=dd256c13-e339-4119-a94b-9d649600da3e'  },
  {j:0,
    id: 13,
    name: "iphone",
    category: "Vegetables",
    price: 50,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/apple.jpeg?alt=media&token=103f5804-e1e2-4c37-bb43-6671a4804daa'  },
  {j:0,
    id: 14,
    name: "Apple",
    category: "Vegetables",
    price: 30,
    quantity: 110,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/apple.jpg?alt=media&token=d5778af5-05f5-4f10-a2e5-3d06fd09c71a'  },
  {j:0,
    id: 15,
    name: "Macbook",
    category: "Vegetables",
    price: 40,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/apple_lap.jpeg?alt=media&token=89388cfe-3844-4174-8c60-434402bb0bb9'  },
  {j:0,
    id: 16,
    name: "Banana",
    category: "Brush",
    price: 20,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/banana.jpg?alt=media&token=def7accb-7c71-42a3-b279-3781aa9ee479'
  },
  {j:0,
    id: 17,
    name: "Shoe",
    category: "Brush",
    price: 25,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/bata.png?alt=media&token=f62876f9-ad78-47a2-a1da-fa8be8bc0aa8'
  },
  {j:0,
    id: 18,
    name: "closeup",
    category: "Hairoil",
    price: 250,
    quantity: 50,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/closeup.jpeg?alt=media&token=0287c67e-57c5-4886-b653-9312099841a5'
  },
  {j:0,
    id: 19,
    name: "colgate",
    category: "Hairoil",
    price: 200,
    quantity: 30,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/colgate.jpeg?alt=media&token=f862fd7a-1da0-4c15-ba6b-0b87f96136d8'
  },
  {j:0,
    id: 20,
    name: "colgate brush",
    category: "Hairoil",
    price: 350,
    quantity: 150,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/colgate.png?alt=media&token=186e7dc5-b245-4e7b-83a6-54beb478222b'
  },
  {j:0,
    id: 21,
    name: "Dell",
    category: "Toothpaste",
    price: 70,
    quantity: 150,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/dell.jpeg?alt=media&token=b76571ec-cb66-48f9-b6ae-87f4aec62178'
  },
  {j:0,
    id: 22,
    name: "Dairy milk",
    category: "Toothpaste",
    price: 80,
    quantity: 100,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/diarymilk.jpeg?alt=media&token=8acb654b-c06a-4a9d-a921-7f8c664def87'
  },
  {j:0,
    id: 23,
    name: "Fortune",
    category: "Toothpaste",
    price: 100,
    quantity: 70,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/fortune.jpeg?alt=media&token=8ab7bdfc-f380-4471-9043-22c3d4ebadc1'
  },
  {j:0,
    id: 24,
    name: "Fortune",
    category: "Biscuits",
    price: 10,
    quantity: 20,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/fortune.jpeg?alt=media&token=8ab7bdfc-f380-4471-9043-22c3d4ebadc1'
  },
  {j:0,
    id: 25,
    name: "gold winner",
    category: "Biscuits",
    price: 20,
    quantity: 30,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/goldwinner.jpeg?alt=media&token=23c90aa8-441f-4ae8-bb3b-cd2dc665a64c'
  },
  {j:0,
    id: 26,
    name: "HP laptop",
    category: "Biscuits",
    price: 30,
    quantity: 20,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/hp.jpeg?alt=media&token=d7975782-7e9d-4884-b58f-12451886c462'
  },
  {j:0,
    id: 27,
    name: "indulekha",
    category: "Cooking Oil",
    price: 100,
    quantity: 20,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/indulekha.jpeg?alt=media&token=396e3886-2e7d-491b-bf89-703ca0dace2a'
  },
  {j:0,
    id: 28,
    name: "kitkat",
    category: "Cooking Oil",
    price: 100,
    quantity: 25,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/kitkat.jpeg?alt=media&token=0f927701-2a46-40f8-a006-16b52177ca8f'
  },
  {j:0,
    id: 29,
    name: "marie gold",
    category: "Cooking Oil",
    price: 130,
    quantity: 20,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/marie_gold.jpeg?alt=media&token=72b93262-d8c2-4113-9421-d27478967f65'
  },
  {j:0,
    id: 30,
    name: "milk bikis",
    category: "Chocolates",
    price: 40,
    quantity: 50,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/milkbikies.jpeg?alt=media&token=53c3b9b0-5125-4e1f-a4ef-629911a09264'
  },
  {j:0,
    id: 31,
    name: "Munch",
    category: "Chocolates",
    price: 20,
    quantity: 80,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/munch.jpeg?alt=media&token=4359d46e-56cf-4135-9da5-0b2fa92d4586'
  },
  {j:0,
    id: 32,
    name: "Nike",
    category: "Chocolates",
    price: 20,
    quantity: 60,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/nike.jpg?alt=media&token=062363cb-08bf-4354-a38d-83508fb8933b'
  },
  {j:0,
    id: 33,
    name: "onion",
    category: "Rice",
    price: 250,
    quantity: 25,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/onion.jpg?alt=media&token=be76733f-c46b-4e5c-8367-eebc7b4565ff'
  },
  {j:0,
    id: 34,
    name: "orange",
    category: "Rice",
    price: 200,
    quantity: 20,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/orange.jpg?alt=media&token=4f3d8fe4-67c8-4ad6-88b9-e87f3df9cb52'
  },
  {j:0,
    id: 35,
    name: "oreo",
    category: "Rice",
    price: 300,
    quantity: 30,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/oreo.jpg?alt=media&token=712304fc-6c1f-4ca5-875f-e23e5df1e404'
  },
  {j:0,
    id: 36,
    name: "potato",
    category: "Curd",
    price: 30,
    quantity: 50,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/potato.jpg?alt=media&token=53781db7-403e-4e68-8ba5-b5891638ef0a'
  },
  {j:0,
    id: 37,
    name: "samsung",
    category: "Curd",
    price: 30,
    quantity: 60,
   image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/samsung.jpg?alt=media&token=fcf8c30b-4032-4478-98cb-fc3495dfaf28'
  },
  { j:0,
    id: 38,
    name: "sensodyne brush",
    category: "Milk",
    price: 25,
    quantity: 75,
    image:'https://firebasestorage.googleapis.com/v0/b/products-78867.appspot.com/o/sensodyne.jpeg?alt=media&token=06cf39d8-faaf-4e8a-af44-ea15d4bfd0da'
  }
])

const [p,setp] = useState(0)

const handleincrease=((i)=>{
  setp(p+1)
  let array=product
  if(array[i].quantity>0){
  array[i].j=array[i].j+1
  array[i].quantity=array[i].quantity-1
  setproduct(array)
  if(searchTerm){
    let array=l
    if(array[i].quantity>0){
    array[i].j=array[i].j+1
    array[i].quantity=array[i].quantity-1
    setl(array)
  }
  }
}})
const handledecrease=((i)=>{
 
  setp(p+1)
  let array=product
  if(array[i].j>0){
  array[i].j=array[i].j-1
  array[i].quantity=array[i].quantity+1
  setproduct(array)

  }
  if(searchTerm){
    let array=l
  if(array[i].j>0){
  array[i].j=array[i].j-1
  array[i].quantity=array[i].quantity+1
  setl(array)

  }
  }
 
})
const [searchTerm,setSearchTerm]=useState('')

const handlechange=((e)=>{
  setSearchTerm(e.target.value)
  handlefetch()
})
const [l,setl]=useState('')
const handlefetch=(()=>{
  const array=product.filter((single)=>single.name.toLowerCase().includes(searchTerm.toLowerCase()))
  setl(array)
})

  return (
    <>
    <h1 style={styles.header}>Supermarket products search</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          value={searchTerm}
          onChange={((e)=>handlechange(e))}
          placeholder="Enter category..."
          style={styles.input}
        />
      </div>
      {searchTerm?<div style={styles.productsContainer}>
        {l.map((product,i) => (
          <div key={product.id} style={styles.productCard} className='product'>
            <img src={product.image} alt={product.name} style={styles.image} />
            <div className='name'>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productCategory}>{product.category}</p>
            <p style={styles.productPrice}>${product.price}</p>
            <p style={styles.productquantity}>Quantity: {product.quantity==0 ?<p style={{color:'red'}}>out of stock</p> : product.quantity}</p>
         <div className='button'>
          <button onClick={(()=>handleincrease(i))}>+</button>
          <button>{product.j}</button>
          <button onClick={(()=>handledecrease(i))}>-</button>
         </div>
            </div>
          </div>
        ))}
      </div>: <div style={styles.productsContainer}>
        {product.map((product,i) => (
          <div key={product.id} style={styles.productCard} className='product'>
            <img src={product.image} alt={product.name} style={styles.image} />
            <div className='name'>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productCategory}>{product.category}</p>
            <p style={styles.productPrice}>${product.price}</p>
            <p style={styles.productquantity}>Quantity: {product.quantity==0 ?<p style={{color:'red'}}>out of stock</p> : product.quantity}</p>
         <div className='button'>
          <button onClick={(()=>handleincrease(i))}>+</button>
          <button>{product.j}</button>
          <button onClick={(()=>handledecrease(i))}>-</button>
         </div>
            </div>
          </div>
        ))}
      </div>}
     
      </>
  )
}
// src/CategorySearch.js

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px',
    width: '300px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  productsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '10px',
    padding: '15px',
    textAlign: 'center',
    width: '200px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  productCategory: {
    color: '#666',
  },
  productPrice: {
    color: '#007bff',
    fontSize: '16px',
  },
};




export default App