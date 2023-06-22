
const filterReducer = (state, action) => {
  switch (action.type){
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((currEle)=>currEle.price);
      let maxPrice = Math.max(...priceArr);
      //console.log(maxPrice);
    return{
        ...state,
        filter_products:[...action.payload],
        all_products:[...action.payload],
        filters : {...state.filters, maxPrice, price:maxPrice}
    };
    case "SET_GRID_VIEW":
      return{
        ...state,
        grid_view:true,
      }
      case "SET_LIST_VIEW":
        return{
          ...state,
          grid_view:false,
        }
      case "GET_SORT_VALUE":
        // let userSortValue = document.getElementById('sort');
        // let getValue = userSortValue.options[userSortValue.selectedIndex].value;
        return{
          ...state,
          // sorting_value : getValue,
          sorting_value:action.payload,
        }
      case "SORTING_PRODUCTS":
        let newSortData;
        const{filter_products, sorting_value} = state;
        let temp = [...filter_products];
        const compareFunction = (a,b)=>{
          if(sorting_value ==="lowest")
          return a.price-b.price;
          if(sorting_value==="highest")
          return b.price-a.price;
          if(sorting_value==="a-z")
          return a.name.localeCompare(b.name);
          if(sorting_value==="z-a")
          return b.name.localeCompare(a.name);
        }
        newSortData = temp.sort(compareFunction);
        return{
          ...state,
          filter_products : newSortData,
        }

    case "SET_FILTER_VALUE":
      const{name, value} = action.payload;
      return{
        ...state,
        filters : {
          ...state.filters,
          [name]:value,
        }
      }

    case "FILTERED_PRODUCTS":
      let {all_products}  = state;
      let tempdata = [...all_products];
      const{text, category, company, colors, price} = state.filters;

      if(text)
      {
        tempdata = tempdata.filter((currEle)=>{
          return currEle.name.toLowerCase().includes(text);
        })
      }
      if(category)
      {
        if(category==="ALL")
        tempdata = tempdata;
        else
        {
        tempdata = tempdata.filter((currEle)=>{
          return currEle.category===category;
        })
      }
      if(company)
      {
        if(company==="ALL")
        tempdata=tempdata;
        else{
          tempdata = tempdata.filter((currEle)=>{
            return currEle.company===company;
          })
        }
      }
      if(colors)
      {
        if(colors==="ALL")
        tempdata=tempdata;
        else{
          tempdata = tempdata.filter((currEle)=>{
            return currEle.colors.includes(colors);
          })
        }
      }
      if(price)
      {
        tempdata = tempdata.filter((currEle)=>{
          return currEle.price<=price;
        })
      }
      
      }
      return{
        ...state,
        filter_products: tempdata,
      }

      case "CLEAR_ALL_FILTERS":
        return{
          ...state,
          filters: {
            ...state.filters,
            text:"",
            category : 'ALL',
            company :'ALL',
            colors:'ALL',
            maxPrice:0,
            price:state.filters.maxPrice,
            minPrice:state.filters.maxPrice,
          }
        }
    default:
        return state;
  }
};

export default filterReducer;