import {storage} from '../store/store';
import {cartStorage} from '../store/store';

let createCart = ():string => {

    let get=(id:string):Element=>{
        return document.querySelector(id)
    }
    let arrayAddElemToCart:any=storage.store.filter((elem)=>{
        if(elem.addToCart)
        return elem
    });
    let addElemeToCart:any=arrayAddElemToCart.find((elem:any,index:number)=>{
        if(index==arrayAddElemToCart.length-1)
        return elem
    })
   
        let cart:string=`
        <div class='cart-small ${cartStorage.smallcartStatus?'active':''}'>
        <div class='cart-small__header'>
            <div>Just added to your cart</div>
            <div class="cart-small__header-close">X</div>
        </div>
        <div class='cart-small__product'>
        <div class='cart-small__product-info'>
        ${arrayAddElemToCart.length==0?`<div class='empty-cart'>Your cart is currently empty</div>`:
        `<div class='product-image'><img src='${addElemeToCart.img}'></div>
        <div class='product-quantity'>Qty:${addElemeToCart.inStore+1-(addElemeToCart.inStore)}</div>
        <div class='product-price'>${addElemeToCart.price}</div>       
        </div>`
        }
        </div>
        <div class='cart-small__button-view-cart'>
            <input type="button" value="View Cart${arrayAddElemToCart.length!=0?`(${arrayAddElemToCart.length})`:''}" class='view-cart'>
        </div>
        <div class='cart-small__button-continue-shopping'>
            <div class='continue-shopping'>Continue shoping</div>
        </div>
        </div>
        </div>
        <div class='cart-main ${cartStorage.maincartStatus?'active':""}'>
        <div class='cart-main__close'><div>X</div></div>
        <div class='cart-main__info'>
        <div>Your cart</div>
        <div>Continue shoping</div>
        </div>
        <div class="cart-main__products">
        ${arrayAddElemToCart.length==0?`<div class='empty-cart'>Your cart is currently empty</div>`:
        `<table>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            </tr>
        ${arrayAddElemToCart.map((elem:any)=>{
            return `
            <tr>
            <td class='cart-main__products-img'><img src='${elem.img}'></td>
            <td>
            <div>${elem.brand}</div>
            <div class='remove-product'>Remove</div>
            </td>
            <td><div>${elem.price}</div></td>
            <td><input class='change-product-quantity' type='number' step="1" min='0' max='${elem.quantity}'value='${elem.quantity-elem.inStore}'></td>
            <td>$${(elem.price*(elem.quantity-elem.inStore)).toFixed(2)}</td>
            </tr>
            `
        }).join('')}
        </table>
        `}
        </div>
        <div class='cart-main__subtotal'><div>Subtotal</div></div>
        </div>
        </div>
        `
        return cart
}
createCart()
export default createCart