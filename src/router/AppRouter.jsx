import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import GoalsList from "../pages/GoalsList"
import GoalNew from "../pages/GoalNew"
import GoalDetails from "../pages/GoalDetails"
import Categories from "../pages/Categories"
import Settings from "../pages/Settings"
import NotFound from "../pages/NotFound"
export default function AppRouter(){
    return(

        <BrowserRouter>
        <Routes>
                <Route path="/" element= {<Dashboard/>}/>
                <Route path="/dashboard" element= {<Dashboard/>}/>
                <Route path="/categories" element= {<Categories/>}/>
                <Route path="/goal/details" element= {<GoalDetails/>}/>
                <Route path="/goal-new" element= {<GoalNew/>}/>
                <Route path="/goal-list" element={<GoalsList/>}/>
                <Route path="/*" element={<NotFound/>}/>
                <Route path="/setting" element={<Settings/>}/>
        </Routes>
        </BrowserRouter>
    )
}