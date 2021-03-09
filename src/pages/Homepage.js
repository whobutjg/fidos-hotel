// import Footer from '../universalComps/Footer';
import appLogo from "../images/appstorelogo.png";
import fbLogo from "../images/fblogo2.png";


const Homepage = () => {
  return (
    <>
    <div className="homepage">
      <div className="main-section">
        <h1 className="text-white text-7xl font-bold font-weight-800">
          Fido's Hotel
        </h1>
        <p className="italic text-white text-2xl font-bold font-weight-400">
          The Ultimate Luxury Stay For Your Bestfriend
        </p>
      </div>

      <div className="logos align-middle flex-row">
        <div className="fb-logo">
          <img src={fbLogo} alt="facebooklogo" />
        </div>
        <div className="apple-logo">
        <img src={appLogo} alt="applestorelogo" />
        </div>
      </div>
      <div className="footer">{/* <Footer /> */}</div>
    </div>
    </>
  );
};

export default Homepage;
