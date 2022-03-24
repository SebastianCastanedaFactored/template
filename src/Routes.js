import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

import Login from "./pages/login"
import Register from "./pages/register"
import NotFound from "./pages/404"
import Overview from './pages/overview'
import Home from "./pages/home"
import Forms from './pages/forms'
import Buttons from './pages/buttons'
import Cards from './pages/cards'
import Tables from './pages/tables'
import Alerts from './pages/alerts'
import Modals from './pages/modals'
import Notifications from './pages/notifications'
import Carousel from './pages/carousel'
import Tabs from './pages/tabs'
import Stepper from './pages/stepper'
import Accordions from './pages/accordions'
import Dropzone from './pages/dropzone'
import Progress from './pages/progress'
import Templates from './pages/templates'
import ChartJS from './pages/chartjs'
import VisX from './pages/visx'
import Recharts from './pages/recharts'
import Profile from './pages/profile'
import RichTextEditor from './pages/richTextEditor'

export default function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="404" element={<NotFound />} />
                <Route path="overview" element={<Overview />} />
                <Route path="home" element={<Home />} />
                <Route path="forms" element={<Forms />} />
                <Route path="wysiwyg" element={<RichTextEditor />} />
                <Route path="buttons" element={<Buttons />} />
                <Route path="cards" element={<Cards />} />
                <Route path="tables" element={<Tables />} />
                <Route path="alerts" element={<Alerts />} />
                <Route path="modals" element={<Modals />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="carousel" element={<Carousel />} />
                <Route path="tabs" element={<Tabs />} />
                <Route path="stepper" element={<Stepper />} />
                <Route path="accordions" element={<Accordions />} />
                <Route path="dropzone" element={<Dropzone />} />
                <Route path="progress" element={<Progress />} />
                <Route path="templates" element={<Templates />} />
                <Route path="chartjs" element={<ChartJS />} />
                <Route path="visx" element={<VisX />} />
                <Route path="recharts" element={<Recharts />} />
                <Route path="profile" element={<Profile />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
  </BrowserRouter>
    )
}
