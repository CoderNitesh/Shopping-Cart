import styled from "styled-components";
import { IconButton } from "@material-ui/core";


export const MainWrapper = styled.div`
    margin: 55px;
`

export const ErrorDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 2rem;
`

// nested styling
export const ProductWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    heigth: 100%;
    

    img{
        padding: 10px;
        max-height: 250px;
        border-radius: 20px 20px 0 0;
        object-fit: contain;
    }

    div{
        font-family: Arial;
        padding: 1rem;
        height: 100%;
    }

    button{
        border-radius: 0 0 20px 20px;
    }
`


// style to material icons
export const CartIconWrapper = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
`


export const CartWrapper = styled.aside`
    font-family: Arial;
    width: 500px;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    
    h2{
        text-align: center;
    }

    button{
        margin: 1rem 0rem;
    }
`

export const CartItemWrapper = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin: 10px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

    div{
        padding: 10px 0px;
        display: flex;
        align-items: start;
        flex-direction: column;
        width: 100%;
        p{
            margin: 8px 0px;
            padding: 0px 5px 0px 0px;
        }
        div{
            width: 100%;
            display: flex;
            padding: 0px;
            flex-direction: row;
            justify-content: ;

            button{
                margin-right: 15px;
            }
        }
    }
    
    img{
        width: 90px;
        padding: 20px;
        height: 90px;
        object-fit: contain;
        border-radius: 50%;
    }
`  