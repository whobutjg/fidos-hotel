// import Footer from '../universalComps/Footer';
import appLogo from '../images/appstorelogo.png';
import fbLogo from '../images/fblogo2.png';
import puppyGang from '../images/puppygang.png';

const Homepage = (props) => {
  // let redirect = props.loggedIn ? null : <Redirect to='/pets' />;
  return (
    <>
      {/* {redirect} */}
      <div className='homepage'>
        <div className='home-background'>
          <div className='main-section'>
            <h1 className='text-white text-7xl font-bold font-weight-800'>
              Fido's Hotel
            </h1>
            <p className='italic text-white text-2xl font-bold font-weight-400'>
              The Ultimate Luxury Stay For Your Bestfriend
            </p>
          </div>

          <div className='logos'>
            <div className='apple-logo'>
              <img src={appLogo} alt='applestorelogo' />
            </div>
            <div className='fb-logo'>
              <img src={fbLogo} alt='facebooklogo' />
            </div>
          </div>
          <div className='fidos-partners'>
            <p className='text-2xl text-white font-bold' id='fido-partners'>
              FIDO'S HOTEL PARTNERS
              <img src={puppyGang} alt='puppygang' id='puppygangpic' />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
