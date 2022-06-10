import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Product/ProductCard";
import { functionJquery, getListCompare } from "../Common";
import MostPopularCard from "../product-category/MostPopularCard";
import AddCompare from "./AddCompare";
import CompareItem from "./CompareItemCard";
import Link from "next/link";
import { removeAllProductCompare } from "../../../store/compare/compareSlice";
import CompareBottom from "./CompareBottomCard";
import { useRouter } from "next/router";

function InfoCompare() {
   const compareProduct = useSelector((state) => state.compare.entities);
   const listCompare = getListCompare(compareProduct);
   const dispatch = useDispatch();
   const router = useRouter();
   const elementCompareBottom = document.getElementById("compare-bottom");
   
   const handleCollapse = () => {
      elementCompareBottom?.setAttribute("hidden",true);
   };

   const handleRemoveAll = () => {
      dispatch(removeAllProductCompare());
      elementCompareBottom?.setAttribute("hidden",true);
   };

   useEffect(() => {
      functionJquery();
   }, [listCompare]);


   return (
      <div className="d-flex justify-content-center">
         <div className=" position-fixed top-50 " id="info-compare"></div>
         {router.pathname !== "/compare" && (
            <div className=" position-fixed bottom-0 container" id="compare-bottom" hidden >
               <div className="d-flex">
                  <div className=" border rounded ms-auto p-1 bg-light" role="button" onClick={handleCollapse}>
                     Collapse <i className="fas fa-chevron-down"></i>
                  </div>
               </div>
               <div className="bg-light  rounded d-lg-flex bottom-compare p-2">
                  <div className="row g-sm-4 g-4 row-cols-lg-4 row-cols-md-4 row-cols-4 custom-gy-5 product-style-2 ratio_asos product-list-section  w-100 ">
                     {listCompare.map((item, index) => (
                        <CompareBottom {...item} key={index} typeSmall />
                     ))}
                  </div>

                  <div className=" w-10  m-auto compare-bottom-btn ">
                     <Link href="/compare" passHref>
                        <button className="btn btn-warning p-2 mt-2">Compare now</button>
                     </Link>
                     <button className="btn" onClick={handleRemoveAll}>
                        Clear All
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default InfoCompare;
