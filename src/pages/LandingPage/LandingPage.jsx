
// Import styles
import ComingSoon from './ComingSoon';
import Faqs from './Faqs/Faqs';
import Header from './Header/Header';
import Message from './Message';
import Testimonial from './Testimonial/Testimonial';
import Featured from './FeaturedProperties/Featured'
import Benefits from './Benefits/Benefits'
import ReusableModal from '../../UI/ReusableModal/ReusableModal';
import FilterModal from '../../components/MoreFilterModal/FilterModal';

const LandingPage = ({openSignup, closeModal, openFilter, filterModal}) => {
  return (
    <>
      {openSignup && <ReusableModal closeModal={closeModal}/>}
      {openFilter && <ReusableModal closeModal={closeModal} 
        content={<FilterModal closeModal={closeModal}/>}/>
      }
      <Header filterModal={filterModal}/>
      <Featured/>
      <Benefits/>
      <Testimonial/>
      <Faqs/>
      <Message/>
      <ComingSoon/>
    </>
  );
};

export default LandingPage;
