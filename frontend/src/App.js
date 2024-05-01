import {BrowserRouter, Routes, Route} from "react-router-dom";
import MemberList from "./components/MemberList";
import AddMember from "./components/AddMember";
import EditMember from "./components/EditMember";

function App() {
  return (
    <div className='container'>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<MemberList/>} />
          <Route path="/add" element={<AddMember/>} />
          <Route path="/edit/:id" element={<EditMember/>} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
