import { useEffect } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import { functionJquery, getListCompare } from "../../components/component_vuong/Common";
import ProductCard from "../../components/Product/ProductCard";
import RatingDetails from "../../components/Product/RatingDetails";
import CompareItemCard from "../../components/component_vuong/compare/CompareItemCard";
import Search from "../../components/component_vuong/compare/Search";
import AddCompare from "../../components/component_vuong/compare/AddCompare";
import Hit from "../../components/component_vuong/compare/HitCompare";
import { useSearchBox } from "react-instantsearch-hooks-web";

function Compare() {
   const compareProduct = useSelector((state) => state.compare.entities);
   const listCompare = getListCompare(compareProduct);

   useEffect(() => {
      functionJquery();
   }, []);

   return (
      <>
         <Breadcrumb title={"Compare"} />

         <section className="section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="comparemodal-body">
                        <div className="table-wrapper table-responsive ratio_asos">
                           <table className="table table-striped-1">
                              <tbody>
                                 <tr className="table-product-details">
                                    <td></td>
                                    {listCompare.map((item, index) => (
                                       <CompareItemCard {...item} key={index} />
                                    ))}
                                 </tr>

                                 <tr className="table-cart-button">
                                    <td></td>
                                    {listCompare.map((item, key) => (
                                       <td key={key}>
                                          {item.id && (
                                             <a href="cart.html" className="btn btn-solid-blue">
                                                + Add to cart
                                             </a>
                                          )}
                                       </td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Customer Rating</td>
                                    {listCompare.map(({ average_rating, rating_count }, key) => (
                                       <td key={key}>
                                          {average_rating && <RatingDetails average_rating={average_rating} rating_count={rating_count} />}
                                       </td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>BRAND</td>
                                    {listCompare.map(({ attributes }, key) => (
                                       <td key={key}>{attributes && attributes[2].options[0]}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Generic Name</td>
                                    {listCompare.map(({ categories }, key) => (
                                       <td key={key}>{categories && categories[0].name}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Department</td>
                                    {listCompare.map(({ categories }, key) => (
                                       <td key={key}>{categories && categories[1].name}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Manufacturer</td>
                                    {listCompare.map(({ categories }, key) => (
                                       <td key={key}>{categories && "PAGE INDUSTRIES LIMITED"}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>color</td>
                                    {listCompare.map(({ attributes }, key) => (
                                       <td key={key}>{attributes && attributes[0].options.join(", ")}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Date First Available</td>
                                    {listCompare.map(({ date_created }, key) => (
                                       <td key={key}>{date_created && new Date(date_created).toLocaleDateString()}</td>
                                    ))}
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <SubscribeBox />
      </>
   );
}

export default Compare;
