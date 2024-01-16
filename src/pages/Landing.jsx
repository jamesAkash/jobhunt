import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Personal <span>Job Tracking App</span>
          </h1>
          <p>
            Keep track of all your job applies, Never miss an oppurtunity.
            Interactive Job tracking capabilities where you can list all your
            pending,upcoming and shortlisted jobs with date, time and location.
          </p>
          <Link className="btn btn-hero" to="/register">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

// const Wrapper = styled.main`
//   nav {
//     width: var(--fluid-width);
//     max-width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items: center;
//   }

//   .page {
//     min-height: calc(100vh - var(--nav-height));
//     display: grid;
//     align-items: center;
//     margin-top: -3rem;
//   }

//   h1 {
//     font-weight: 700;
//     span {
//       color: var(--primary-500);
//     }
//   }

//   p {
//     color: var(--grey-600);
//   }

//   .main-img {
//     display: none;
//   }

//   @media (min-width: 992px) {
//     .page {
//       grid-template-columns: 1fr 1fr;
//       column-gap: 3rem;
//     }

//     .main-img {
//       display: block;
//     }
//   }
// `;

export default Landing;
