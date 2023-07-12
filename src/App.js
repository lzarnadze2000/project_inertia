import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Search from './Pages/Search';
import NotFound from './Pages/NotFound';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import AppLayout from './layouts/AppLayout';
import BusinesReg from './components/registration/BusinesReg';
import Owner from './components/registration/Owner';
import DisplayCard from './components/DisplayCard';
import ResendCode from './Pages/ResendCode';
import { Book } from '@mui/icons-material';
 

function App() {
	return (
		<AppLayout>
			<Routes>
				
				<Route index element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='contact' element={<Contacts />} />
				<Route path='search' element={<Search />} />
				<Route path='signin' element={<SignIn />} />
				<Route path='signup' element={<SignUp />} />
				<Route path='*' element={<NotFound />} />
				<Route path="/business-registration" element={<BusinesReg/>} />
				<Route path="/owner-registration" element={<Owner/>} />
				<Route path="/card/:id" element={<DisplayCard />} />
<Route path='/resendCode' element={<ResendCode/>}/>
<Route path='/rez' element={<Book/>}/>	

</Routes>
		</AppLayout>
	);
}

export default App;
