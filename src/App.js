import { BrowserRouter, Route, Routes} from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyle"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Today from "./pages/Today"
import Habits from "./pages/Habits"
import History from "./pages/History"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro" element={<SignUp />}/>
        <Route path="/hoje" element={<Today />}/>
        <Route path="/habitos" element={<Habits />}/>
        <Route path="/historico" element={<History />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;