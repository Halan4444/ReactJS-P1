import './App.css';
// import Header from "./component/demo/Header";
// import HeaderRfc from "./component/demo/HeaderRFC";
// import BaiTapChiaLayout from "./component/BaiTapChiaLayout/BaiTapChiaLayout";
// import BaiTapThucHanhLayout from "./component/BaiTapThucHanhLayout/BaiTapThucHanhLayout";
import DataBinding from "./DataBinding/DataBinding";
import DataBindingRFC from "./DataBinding/DataBindingRFC";
import HandleEvent from "./HandleEvent/HandleEvent";
import RenderingCondition from "./RenderingConditions/RenderingCondition";
import StateDemo from "./State/StateDemo";
import Styling from "./Styling/Styling";
import BaiTapChonXe from "./BaiTapChonXe/BaiTapChonXe";
import RenderWithLoop from "./RenderWithLoop/RenderWithLoop";
import BaiTapChiaLayout from "./component/BaiTapChiaLayout/BaiTapChiaLayout";
import BaiTapRenderFilm from "./BaiTapRenderFilm/BaiTapRenderFilm";
import BaiTapThuKinh from "./BaiTapThuKinh/BaiTapThuKinh";

function App() {
  return (
    <div className="App">
    {/*<BaiTapThucHanhLayout/>*/}
    {/*  <DataBinding/>*/}
    {/*    <DataBindingRFC/>*/}
    {/*    <HandleEvent/>*/}
    {/*    <RenderingCondition/>*/}
    {/*    <StateDemo/>*/}
    {/*    <Styling/>*/}
    {/*    <BaiTapChonXe/>*/}
    {/*    <RenderWithLoop/>*/}
    {/*    <BaiTapRenderFilm/>*/}
        <BaiTapThuKinh/>
    </div>
  );
}

export default App;
