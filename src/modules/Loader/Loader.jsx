
import "./css/Loader.css";
const Loader = () => {
  return <>
    <div className="container-loader">
      <div className="loader-center">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <div>
          <p className="fs-bold fs-4 text-white">Por favor espere</p>
        </div>
      </div>
    </div>
  </>
}

export default Loader;