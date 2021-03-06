import { GET_CHART_INFO, GET_PROFILE_INFO } from "../types";
const baseURL = 'https://www.alphavantage.co/query';
const API_KEY = '09SWB5UVOIWR7MJA';

export const getChartInfo = (stockTicker, outputsize = 'compact') => async dispatch => {

  let financialChartXValuesFunction = [];
  let financialChartCloseValuesFunction = [];
  let financialChartOpenValuesFunction = [];
  let financialChartHighValuesFunction = [];
  let financialChartLowValuesFunction = [];

  return await fetch(
      `${baseURL}?function=TIME_SERIES_DAILY&symbol=${stockTicker}&outputsize=${outputsize}&apikey=${API_KEY}`
    )
      .then((response) => {
        if(!response.ok) {
          console.log(response.status);
          //TODO: Proper error handling
        }
        return response.json();
      })
      .then((data)=> {
        for (let key in data['Time Series (Daily)']) {
            financialChartXValuesFunction.push(key);
            financialChartCloseValuesFunction.push(data['Time Series (Daily)'][key]['4. close']);
            financialChartOpenValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
            financialChartHighValuesFunction.push(data['Time Series (Daily)'][key]['2. high']);
            financialChartLowValuesFunction.push(data['Time Series (Daily)'][key]['3. low']);
        }

    const chartInfo = {
        symbol: stockTicker,
        financialChartXValues: financialChartXValuesFunction,
        financialChartCloseValues: financialChartCloseValuesFunction,
        financialChartOpenValues: financialChartOpenValuesFunction,
        financialChartHighValues: financialChartHighValuesFunction,
        financialChartLowValues: financialChartLowValuesFunction,
    };

    dispatch({
      type: GET_CHART_INFO,
      payload: chartInfo
    })
  })
}

export const getCompanyOverview = (stockTicker) => async dispatch => {
  return fetch(
    `${baseURL}?function=OVERVIEW&symbol=${stockTicker}&apikey=${API_KEY}`
  )
    .then((response) => {
      if(!response.ok) {
        console.log(response.status);
        //TODO: Proper error handling
      }
      return response.json();
    })
    .then((data)=> {

      dispatch({
        type: GET_PROFILE_INFO,
        payload: data,
      })
  })
}