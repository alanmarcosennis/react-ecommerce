import './container.css';
import React, {useState, useEffect} from 'react';

import Title from '../Title/Title';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const muebles = [
    {id: 1, price: 70000, image: "https://silloneseuropa.com.ar/wp-content/uploads/2020/05/oxford1.jpg", category:"sillones",title: "sillon"},
    {id: 2, price: 100000, image: "https://tiendadealgarrobo.com/wp-content/uploads/2019/12/20191212_134642-scaled.jpg", category:"muebles",title:"mesaysillas"},
    {id: 3, price:90000, image:"https://www.dealgarrobo.com/img/ma/foto_159_110.jpg", category:"muebles",title:"muebletv"},
    {id: 4, price:60000, image:"https://http2.mlstatic.com/D_NQ_NP_617560-MLA50723199022_072022-O.webp", category:"sillones", title:"silloncama"},
    {id: 5, price:30000,image:"https://www.dealgarrobo.com/img/upload/imagen_small_96.jpg", category:"muebles",title:"mesaratona"}
];

export const ItemListContainer = () => {
     const [data, setData]= useState([]);


     const {categoryId} = useParams()

     useEffect (() => {
        const getData= new Promise(resolve=>{
            setTimeout(() => {
                resolve(muebles);
            }, 1000);
        })
        if (categoryId) {
            
            getData.then (res => setData(res.filter (mueble=>mueble.category === categoryId)));
            
        }else{
            getData.then(res=>setData(res))

        }
        
     }, [categoryId])
     
  
     
     return (
        <>
          <div className='itemlista'>
            <Title greeting='Hola! Bienvenido' />
            <ItemList data={data} />

        </div>
        </>
      
    );
};

export default ItemListContainer;