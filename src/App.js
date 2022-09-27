import "./App.css";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import ProductApp from "./components/Products";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
function App() {
  useEffect(() => {
    const App = document.querySelector(".App");

    return () => {
      checkValidation();
    };
  }, []);

  const image = "https://cdn-icons-png.flaticon.com/512/1170/1170576.png";
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const name = user.displayName;
        const email = user.email;
        console.log(name, email);
        // ...
        const loadDom = async () => {
          const App = document.querySelector(".App");
          const errorDiv = document.createElement("div");
          App.appendChild(errorDiv);
          errorDiv.innerHTML = `Welcome There! ${name}`;
          errorDiv.id = "error";
          errorDiv.classList.remove("error");
          errorDiv.classList.add("success");
          localStorage.setItem("name", name);
        };
        loadDom();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);

        const loadDom = async () => {
          const App = document.querySelector(".App");
          const errorDiv = document.createElement("div");
          App.appendChild(errorDiv);
          errorDiv.innerHTML = `${errorMessage}`;
          errorDiv.id = "error";
          errorDiv.classList.add("error");
          localStorage.removeItem("name");
        };
        loadDom();
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const checkValidation = () => {
    const wrapper = document.getElementById("wrapper");
    const container = document.querySelector(".container");
    if (localStorage.getItem("name") === null) {
      console.log("not logged in");
      wrapper.classList.remove("loggedIn");
      container.classList.remove("loggedIn");
      return;
    }
    if (localStorage.getItem("name") !== null) {
      console.log("logged in");
      wrapper.classList.add("loggedIn");
      container.classList.add("loggedIn");
      return;
    }
  };
  return (
    <div className="App">
      <ProductApp signedUser={localStorage.getItem("name")} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="col-img">
              <img src={image} alt="logo" />
            </div>
            <h1>Welcome to Shopole</h1>
            <div className="descriptive_text">
              <p>
                Shopole is a platform for you to buy and sell products.
                <br />
                You can buy and sell products online using this platform.
              </p>
            </div>
          </div>
          <div className="col-13">
            <div className="button">
              <button className="googleAuth" onClick={signInWithGoogle}>
                <i className="fa-brands fa-google"></i>
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
