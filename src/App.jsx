import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import TermsPage from './components/TermsPage';
import ConditionPage from './components/ConditionPage';
import HelpSupportPage from './components/HelpSupportPage';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

      <div className="relative z-10">       
          <Navbar />
        <div id='home'>
          <Homepage />
        </div>
        <div id='terms'>
          <TermsPage />
        </div>
        <div id='condition'>
          <ConditionPage />
        </div>
        <div id='help'>
          <HelpSupportPage />
        </div>
        <div id='feedback'>
          <Feedback />
        </div>
          <Footer />
      </div>
    </div>
  )
}