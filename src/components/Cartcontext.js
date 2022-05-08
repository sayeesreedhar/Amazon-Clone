import { useState,useContext, createContext ,Component} from "react";

import React from 'react'
export const Cartcontext=createContext();
class CartcontextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item:[],
            size:0,
            increment:(value)=>{
                let itemList=this.state.item;
                itemList.push(value);
                this.setState({item:itemList});
                this.setState({size:this.state.item.length});console.log(itemList);
            },
            /*decrement:(value)=>{
                let itemList=this.state.item;
                itemList=itemList.filter((cur)=>{if(cur.uid!=value.uid)return cur});
                this.setState({item:itemList});
                this.setState({size:this.state.item.length-1});console.log(itemList);
            }*/
            decrement:(value)=>{
                let itemList=this.state.item;
                itemList=itemList.filter((cur)=>{if(cur.pid!=value.pid)return cur});
                this.setState({item:itemList});
                this.setState({size:this.state.item.length-1});console.log(itemList);
            }
          }
    }
    
    render() { 
        return ( <Cartcontext.Provider value={{...this.state,...this.increment,...this.decrement}}>{this.props.children}</Cartcontext.Provider> );
    }
}
 
export default CartcontextProvider ;