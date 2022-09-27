import "./Products.css";
import { useEffect } from "react";
const ProductsPage = (props) => {
  let touchCount = 0;
  // fetch json file from file system
  useEffect(() => {
    const products_Div = document.querySelector(".products_Div");
    const wrapper = document.querySelector("#wrapper");
    return () => {
      //   const productsDiv = document.querySelector("products_Div");
      loadServer();
      checkServer();
    };
  }, []);

  const loadServer = async () => {
    const products_Div = document.querySelector(".products_Div");
    const createDiv = document.createElement("div");
    const wrapper = document.querySelector("#wrapper");
    createDiv.className = "products_items";
    products_Div.appendChild(createDiv);
    // fetch api from server
    const response = await fetch(
      "https://627a926073bad506858bdbe8.mockapi.io/Products/v1/card"
    );
    const data = await response.json();
    console.log(data[0]);
    createDiv.innerHTML = `<div class="products_wrapper" dataName=${data[0][0].name}>
            <div class="products_img">
              <img src=${data[0][0].image} alt="" />
            </div>
            <div class="products_info">
              <h3>${data[0][0].name}</h3>
            </div>
            <div class="products_description">
              <p>${data[0][0].description}</p>
            </div>
            <div class="products_price">
              <p>$${data[0][0].price}</p>
            </div>
          </div>
          <div class="products_wrapper" dataName=${data[0][1].name}>
            <div class="products_img">
              <img src=${data[0][1].image} alt="" />
            </div>
            <div class="products_info">
              <h3>${data[0][1].name}</h3>
            </div>
            <div class="products_description">
              <p>${data[0][1].description}</p>
            </div>
            <div class="products_price">
              <p>$${data[0][1].price}</p>
            </div>
          </div>
          <div class="products_wrapper" dataName=${data[0][2].name}>
            <div class="products_img">
              <img src=${data[0][2].image} alt="" />
            </div>
            <div class="products_info">
              <h3>${data[0][2].name}</h3>
            </div>
            <div class="products_description">
              <p>${data[0][2].description}</p>
            </div>
            <div class="products_price">
              <p>$${data[0][2].price}</p>
            </div>
          </div>
          <div class="products_wrapper" dataName=${data[0][3].name}>
            <div class="products_img">
              <img src=${data[0][3].image} alt="" />
            </div>
            <div class="products_info">
              <h3>${data[0][3].name}</h3>
            </div>
            <div class="products_description">
              <p>${data[0][3].description}</p>
            </div>
            <div class="products_price">
              <p>$${data[0][3].price}</p>
            </div>
          </div>
          <div class="products_wrapper" dataName=${data[0][4].name}>
            <div class="products_img">
              <img src=${data[0][4].image} alt="" />
            </div>
            <div class="products_info">
              <h3>${data[0][4].name}</h3>
            </div>
            <div class="products_description">
              <p>${data[0][4].description}</p>
            </div>
            <div class="products_price">
              <p>$${data[0][4].price}</p>
            </div>
          </div>
          <div class="products_wrapper" dataName=${data[0][5].name}>
            <div class="products_img">
              <img src=${data[0][5].image} alt="" />
            </div>
            <div class="products_info">
              <h3>${data[0][5].name}</h3>
            </div>
            <div class="products_description">
              <p>${data[0][5].description}</p>
            </div>
            <div class="products_price">
              <p>$${data[0][5].price}</p>
            </div>
          </div>
          <div class="products_wrapper" dataName=${data[0][6].name}>
            <div class="products_img">
              <img src=${data[0][6].image} alt="" />
            </div>
            <div class="products_info">
              <h3>${data[0][6].name}</h3>
            </div>
            <div class="products_description">
              <p>${data[0][6].description}</p>
            </div>
            <div class="products_price">
              <p>$${data[0][6].price}</p>
            </div>
          </div>
          <div class="products_wrapper" dataName=${data[0][7].name}>
            <div class="products_img">
              <img src=${data[0][7].image} alt="" />
            </div>
            <div class="products_info">
              <h3>${data[0][7].name}</h3>
            </div>
            <div class="products_description">
              <p>${data[0][7].description}</p>
            </div>
            <div class="products_price">
              <p>$${data[0][7].price}</p>
            </div>
          </div>
          <div class="products_wrapper" dataName=${data[0][8].name}>
            <div class="products_img">
              <img src=${data[0][8].image} alt="" />
            </div>
            <div class="products_info">
              <h3>${data[0][8].name}</h3>
            </div>
            <div class="products_description">
              <p>${data[0][8].description}</p>
            </div>
            <div class="products_price">
              <p>$${data[0][8].price}</p>
            </div>
          </div>
          <div class="products_wrapper" dataName=${data[0][9].name}>
            <div class="products_img">
              <img src=${data[0][9].image} alt="" />
            </div>
            <div class="products_info">
              <h3>${data[0][9].name}</h3>
            </div>
            <div class="products_description">
              <p>${data[0][9].description}</p>
            </div>
            <div class="products_price">
              <p>$${data[0][9].price}</p>
            </div>
          </div>
          <div class="products_wrapper" dataName=${data[0][10].name}>
            <div class="products_img">
              <img src=${data[0][10].image} alt="" />
            </div>
            <div class="products_info">
              <h3>${data[0][10].name}</h3>
            </div>
            <div class="products_description">
              <p>${data[0][10].description}</p>
            </div>
            <div class="products_price">
              <p>$${data[0][10].price}</p>
            </div>
          </div>
          <div class="products_wrapper" dataName=${data[0][11].name}>
            <div class="products_img">
              <img src=${data[0][11].image} alt="" />
            </div>
            <div class="products_info">
              <h3>${data[0][11].name}</h3>
            </div>
            <div class="products_description">
              <p>${data[0][11].description}</p>
            </div>
            <div class="products_price">
              <p>$${data[0][11].price}</p>
            </div>
          </div>
          <div class="products_wrapper" dataName=${data[0][12].name}>
            <div class="products_img">
              <img src=${data[0][12].image} alt="" />
            </div>
            <div class="products_info">
              <h3>${data[0][12].name}</h3>
            </div>
            <div class="products_description">
              <p>${data[0][12].description}</p>
            </div>
            <div class="products_price">
              <p>$${data[0][12].price}</p>
            </div>
          </div>`;

    if (response.status === 200) {
      console.log("success response from server");
    } else {
      console.log("error");
    }

    const getClicks = () => {
      const products_wrapper = document.querySelectorAll(".products_wrapper");
      const DataBox = document.createElement("div");
      wrapper.appendChild(DataBox);
      DataBox.className = "DataBox";
      products_wrapper.forEach((product) => {
        product.addEventListener("click", (event) => {
          const product_id = product.getAttribute("dataName");
          console.log(event.target);

          DataBox.innerHTML = `<div class="DataBox dataBx">${event.target.innerHTML}</div>`;
          //   window.location.href = `/product.html?id=${product_id}`;
          document
            .querySelector(".dataBx")
            .addEventListener("click", (event) => {
              touchCount++;
              if (touchCount === 2) {
                DataBox.innerHTML = ``;
                console.log(touchCount);
                touchCount = 0;
              }
            });
        });
      });
      console.log("clicked");
    };
    getClicks();
  };
  const checkServer = async () => {
    window.addEventListener("online", () => console.log("Became online"));
    window.addEventListener("offline", () => console.log("Became offline"));
    console.log(
      "Initially " + (window.navigator.onLine ? "on" : "off") + "line"
    );
    if (window.navigator.onLine) {
      console.log("online");
    } else {
      console.log("offline");
      const products_Div = document.querySelector(".products_Div");
      const createDiv = document.createElement("div");
      createDiv.className = "products_items";
      products_Div.appendChild(createDiv);
      createDiv.innerHTML = `<div class='error'>${"failed to load data Try Again!!"}</div>`;
    }
  };
  const Logout = async () => {
    await localStorage.removeItem("name");
  };
  // ...
  return (
    <div id="wrapper">
      <h1>Shopole</h1>
      <div className="products-container">
        <div className="header">
          <h2>Welcome {props.signedUser}</h2>
        </div>
        <div className="sub-header">
          <p>Feel free to browse our products.</p>
        </div>
        <div className="products_Div">
          {/* <div className="products_wrapper">
            <div className="products_img">
              <img src="" alt="" />
            </div>
            <div className="products_info">
              <h3>Product Name</h3>
            </div>
            <div className="products_description">
              <p>Product Description</p>
            </div>
            <div className="products_price">
              <p>Price: $</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="logoutBtn">
        <button onClick={Logout}>
          <i className="fa-regular fa-arrow-up-left-from-circle"></i>
        </button>
      </div>
    </div>
  );
};
export default ProductsPage;
