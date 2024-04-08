
// Import styles
import ComingSoon from './ComingSoon';
import Faqs from './Faqs/Faqs';
import Header from './Header/Header';
import Message from './Message';
import Testimonial from './Testimonial/Testimonial';
import Featured from './FeaturedProperties/Featured'

const LandingPage = () => {
  return (
    <>
      <Header/>
      <Featured/>
      <Testimonial/>
      <Faqs/>
      <Message/>
      <ComingSoon/>
    </>
  );
};

export default LandingPage;
