import HomePage from '../../src/client/HomePage'
import EventPage from '../../src/client/EventPage'
import MerchPage from '../../src/client/MerchPage'
import ArtistPage from '../../src/client/ArtistPage'
import AboutPage from '../../src/client/AboutPage'
import ContactPage from '../../src/client/ContactPage'

const PublicRouteList = [
    {path:'/', exact:true, name:'HomePage', component: HomePage},
    {path:'/event', exact:true, name:'EventPage', component: EventPage },
    {path:'/artist', exact:true, name:'ArtistPage', component: ArtistPage},
    {path:'/merch', exact:true, name:'MerchPage', component: MerchPage},
    {path:'/about', exact:true, name:'AboutPage', component: AboutPage},
    {path:'/contact', exact:true, name:'HomePage', component: ContactPage},
];

export default PublicRouteList;