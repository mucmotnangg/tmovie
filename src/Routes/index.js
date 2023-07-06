import HomePage from "../Pages/HomePage"
import DetailMovie from "../Pages/DetailMovie"
import PlayMovie from "../Pages/PlayMovie"
import AllItemsPage from "../Pages/AllItemsPage"

const PublicRoutes = [
    {path:"/",component: HomePage},
    {path:"movie/detail/:id",component: DetailMovie},
    {path:"tv/detail/:id",component: DetailMovie},
    {path:"movie/play/:id",component: PlayMovie},
    {path:"movie/all/:id/:type",component:AllItemsPage},
    {path:"tv/all/:id/:type",component:AllItemsPage},
    {path:"searching/:search",component:AllItemsPage}
]

export {PublicRoutes}