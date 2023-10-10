import { createContext, useState } from "react";
import { PopularProductDatas } from "../myWriteSiteDatas/Datas";

export const GlobalContext = createContext();

export const ContextFunc = ({ children }) => {
    const [state, setState] = useState({
        datas: PopularProductDatas,
        basket: JSON.parse(localStorage.getItem("basket")) ?? [],
    });

    // baskete homdaki carti elave etmek funksiyasi
    const addToCart = (product) => {
        setState({
            ...state,
            basket: state.basket.find((Item) => Item.id === product.id)
                ? state.basket.map((Item) =>
                      Item.id === product.id
                          ? { ...Item, count: Item.count + 1 }
                          : Item
                  )
                : [...state.basket, { ...product, count: 1 }],
        });
        localStorage.setItem("basket", JSON.stringify(state.basket));
    };

    //  basketde atilan yeni basketin icindeolan praductun sayina artirma funksiyasi
    const increase = (id) => {
        setState({
            ...state,
            basket: state.basket.map((cartItem) =>
                cartItem.id === id
                    ? { ...cartItem, count: cartItem.count + 1 }
                    : cartItem
            ),
        });
        localStorage.setItem("basket", JSON.stringify(state.basket));
    };

    //  basketde atilan yeni basketin icindeolan praductun sayina azaldilmasi funksiyasi

    const decrease = (id) => {
        setState({
            ...state,
            basket: state.basket.map((cartItem) =>
                cartItem.id === id
                    ? {
                          ...cartItem,
                          count: cartItem.count > 1 ? cartItem.count - 1 : 1,
                      }
                    : cartItem
            ),
        });
        localStorage.setItem("basket", JSON.stringify(state.basket));
    };

    //   onClikde silme funcsionu
    const removeProduct = (id) => {
        setState({
            ...state,
            basket: state.basket.filter((cartItem) => cartItem.id !== id),
        });
        localStorage.setItem("basket", JSON.stringify(state.basket));
    }


    //   productun sayi basket(sebet)
    const totalProductCount = state.basket.reduce(
        (total, product) => (total = total + product.count),
        0
    );

    // sebetdeki praductlarin cemi qiymeti
    const totalPraduct = state.basket.reduce(
        (total, praduct) =>
            (total = total + praduct.popPiscountedPrice * praduct.count),
        0
    );

    return (
        <GlobalContext.Provider
            value={{
                state,
                addToCart,
                increase,
                decrease,
                removeProduct,
                totalProductCount,
                totalPraduct,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
