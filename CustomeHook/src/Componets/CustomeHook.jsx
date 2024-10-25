// some time we are not satisfy with availabe Hook in that case we should go for custome hook 
// if we want make theire own hook like useState(),useEffect(),useMemo(),useRef(),useNavigate() hook than we should go for Custome hook
//like normal hook custome hook also start with use as prefix 
// it is just like function which perform some buisness logic but condition is that 
// we have write the name of function with use as prefix
// one bigest application of custome hook is that we use it more in data fetching
import {useState,useEffect} from "react"
import axios from "axios"
// datafetch hook : it is used to combine all the buisness logic into a signle unit which is comming from the backend, so that we can use any where according to our need 
const useTodos=()=>{
    const [product,setProduct]=useState([]);
     const [loading,setLoading]=useState(true);
    useEffect(()=>{
           
          axios.get("https://dummyjson.com/products")
          . then(res=>{
            setProduct(res.data.products[0]);
            setLoading(false);
          })
           
    },[])
    return {product,loading};
 }
export const CustomeHook = () => {

    
    const {product,loading}=useTodos();
      
     
     if(loading)
     {
        return <div>loading...</div>
     }
     
  return (
    <div>
       <h1>{product.title}</h1>
    </div>
  )
}
