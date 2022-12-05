import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { DataScroller } from "primereact/datascroller";
import { Button } from "primereact/button";
import { ProductService } from "../../service/ProductService";
import "./ProductList.scss";
import ModalContainer from "../ModalContainer/modal-container.component";
import AddProduct from "../../components/Add-Product/AddProduct";
import { useOnClickOutside } from "../../components/Utils/helpers";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showCardDropDownModal, setShowCardDropDownModal] = useState(false);
  const productService = new ProductService();
  const CardDropDownModalRef = useRef();


  useEffect(() => {
    productService.getAll().then((data) => setProducts(data));
  }, []);



  const hideCardDropDown = useCallback(({ target }) => {
    if (target.closest(".link")) return;
    setShowCardDropDownModal(false);
  }, []);

  

  useOnClickOutside(CardDropDownModalRef, hideCardDropDown);

  const itemTemplate = (data) => {
    return (
      <div className="product-item">
        <img
          src={`/assets/${data.image}`}
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          alt={data.name}
        />
        <div className="product-detail">
          <div className="product-name">{data.name}</div>
          <div className="product-description">{data.description}</div>
          <i className="pi pi-tag product-category-icon"></i>
          <span className="product-category">{data.category}</span>
        </div>
        <div className="product-action">
          <span className="product-price">${data.price}</span>
          <Button
            icon="pi pi-shopping-cart"
            label="Add to Cart"
            disabled={data.inventoryStatus === "OUTOFSTOCK"}
            onClick={() => {
              /*setShowCardDropDownModal(!showCardDropDownModal);*/
            }}
          ></Button>
          {/* <span
            className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}
          >
            {data.inventoryStatus}
          </span> */}
        </div>
      </div>
    );
  };

  return (
    <div className="datascroller-demo">
      <div className="card">
        <DataScroller
          value={products}
          itemTemplate={itemTemplate}
          rows={5}
          buffer={0.4}
          header="List of Products"
        />
      </div>
      <ModalContainer
        show={showCardDropDownModal}
        modalRef={CardDropDownModalRef}
        component={<AddProduct products={products} />}
        className={"modal-container cardDropDown"}
      />
    </div>
  );
};

export default ProductList;
