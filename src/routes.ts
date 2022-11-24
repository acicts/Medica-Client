import About from './routes/About.svelte';
import Contact from './routes/Contact.svelte';
import Help from './routes/Help.svelte';
import Home from './routes/Home.svelte';
import Medicine from './routes/Medicine.svelte';
import Pharmacy from './routes/Pharmacy.svelte';

export default {
	'/': Home,
	'/about': About,
	'/help': Help,
	'/contact': Contact,
	'/medicine/:id': Medicine,
	'/pharmacy/:id': Pharmacy,
};
