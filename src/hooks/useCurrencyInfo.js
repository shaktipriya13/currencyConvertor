

//we want to call the api as soon as the app loads..so we use useEffect

import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    // our custom hook takes argument : currency
    // this hook is going to return some data
    const [data, setData] = useState({})//an empty object is passed 
    // jo amount input krenge is stored in useState so that it don't change on every rerender.Every time a component re-renders, all normal variables are re-initialized. But useState keeps the data persistently until changed.
    // useEffect ke karan rerender hoga (options change krne wakt)..but from(currnecy value) nhi change hoga

    // useEffect depends on currency .as the value of currency changes the fetch call is again invoked
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)//wrtie currency in caps
            .then((res) => res.json())//string converted to json object
            .then((res) => setData(res.rates))//the returned json object has to be hold in some variable...but it could not be held in a regular variable else the UI will never get updated
        console.log(data);

    }, [currency])
    console.log(data);
    return data;// currencyData will now have the API result
}

export default useCurrencyInfo;//we are exporting the entire fxn
