import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const nofify = () => {
    toast("hi");

    toast.success('🦄 Wow so easy!', {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});
  };
  return (
    <div className="App">
      <button onClick={nofify}>Notification</button>
      
      <ToastContainer />
    </div>
  );
}

export default App;
