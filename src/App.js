import './App.css';
// import Header from "./component/demo/Header";
// import HeaderRfc from "./component/demo/HeaderRFC";
// import BaiTapChiaLayout from "./component/BaiTapChiaLayout/BaiTapChiaLayout";
// import BaiTapThucHanhLayout from "./component/BaiTapThucHanhLayout/BaiTapThucHanhLayout";
import DataBinding from "./DataBinding/DataBinding";
import DataBindingRFC from "./DataBinding/DataBindingRFC";

function App() {
  return (
    <div className="App">
    {/*<BaiTapThucHanhLayout/>*/}
      <DataBinding/>
        <DataBindingRFC/>
    </div>
  );
}

export default App;
