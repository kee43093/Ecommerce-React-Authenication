// import products from '../../products.json';
import React from '../../../node_modules/react';
// import Header from './components/Header/Header';
import "./products.css";



class Products extends React.Component {
   state = {
       items:[],
       search : ''
   }
   
   
   displayProducts = () => {
       fetch('/api/users/products')
       .then(res => res.json())
        .then(product => this.setState({items: product},
            ))
        
        
        
    }
    
    componentDidMount(){
        this.displayProducts();
    }

    // handleSearch = (e) => {
    //     this.setState({
    //         search: e.target.value})
        
    //     if(!e.target.value){
    //         this.displayProducts();
    //         return
    //     }
        
    //     fetch(`/api/products/type/${e.target.value}`)
    //     .then(res => res.json())
    //     .then(data =>this.setState({items: data}, console.log(data)), err=> console.log(err))
           
        
    // }


   
    render(){
    return (
            <>
        
            <section className="search">
                <label className="search__title">Search Albums For</label>
                <input className="search__input" type="text" placeholder="Title" onChange={this.handleSearch} value={this.state.search} ></input>
            </section>
        
        
            <div className= "main_grid">
        
                {this.state.items.map((item, index) => {
                console.log(item)
                console.log(index)
                return (
                    
                    <div key={index} className= {item.image_id}>
                        <a href={item.hyperlink} target= "_blank">
                            <div className="overlay">
                                <p className="price">{item.original_price}</p>
                                <p className="name">{item.ProductName}</p> 
                            </div>
                        </a>
                    </div>
                
                    )})
                }
            
            </div>

            </>
        
             
    )

 }
}

export default Products;




// this.state.map((index, item) => {
            //     console.log(item)
            //     console.log(index)
            // })