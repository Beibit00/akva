import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBarComponent } from "./components/header";
import { Main } from "./components/homepage";
import { SignIn } from "./components/signin";
import { SignUp } from "./components/signup";
import { UserData } from "./components/userpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/main" element={<><AppBarComponent/><Main/></>} />
        <Route path="/" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/userpage" element={<><AppBarComponent/><UserData/></>}/>

          
          
          
        </Routes>

        
      </BrowserRouter>
    </div>
  );
}

export default App;
