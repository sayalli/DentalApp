import styled from "styled-components";

const PlanCards = () => {
  const features = [
    {
      icon: (
        <svg
          height={24}
          width={24}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
          />
        </svg>
      ),
      text: (
        <>
          <strong>20</strong> team members
        </>
      )
    },
    {
      icon: (
        <svg
          height={24}
          width={24}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
          />
        </svg>
      ),
      text: "Plan team meetings"
    },
    {
      icon: (
        <svg
          height={24}
          width={24}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
          />
        </svg>
      ),
      text: "File sharing"
    }
  ];

  return (
    <StyledWrapper>
      <div className="text-center">
        <h1 className="our-services">Our Plans</h1>
        {/* <h3>What We Provide</h3> */}
      </div>
      <div className="plan-container">
        {/* Basic Plan Card */}
        <div className="plan">
          <div className="inner">
            <span className="pricing">
              <span>
                $19 <small>/ m</small>
              </span>
            </span>
            <p className="title">Basic Plan</p>
            <p className="info">
              This plan is suitable for small teams and businesses just getting
              started.
            </p>
            <ul className="features">
              {features.map((feature, index) => (
                <li key={index}>
                  <span className="icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <div className="action">
              <a className="button" href="#">
                Choose plan
              </a>
            </div>
          </div>
        </div>

        {/* Standard Plan Card */}
        <div className="plan">
          <div className="inner">
            <span className="pricing">
              <span>
                $49 <small>/ m</small>
              </span>
            </span>
            <p className="title">Standard Plan</p>
            <p className="info">
              Ideal for growing teams that need more features and collaboration
              tools.
            </p>
            <ul className="features">
              {features.map((feature, index) => (
                <li key={index}>
                  <span className="icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <div className="action">
              <a className="button" href="#">
                Choose plan
              </a>
            </div>
          </div>
        </div>

        {/* Unlimited Plan Card */}
        <div className="plan">
          <div className="inner">
            <span className="pricing">
              <span>
                $99 <small>/ m</small>
              </span>
            </span>
            <p className="title">Unlimited Plan</p>
            <p className="info">
              The perfect plan for large teams with unlimited access to all
              features.
            </p>
            <ul className="features">
              {features.map((feature, index) => (
                <li key={index}>
                  <span className="icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <div className="action">
              <a className="button" href="#">
                Choose plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .plan-container {
    display: flex;
    justify-content: center; /* Ensures the cards are centered */
    gap: 10px; /* Reduced the gap */
    margin-top: 20px;
    flex-wrap: wrap;
    padding-bottom: 10rem;
  }

  .plan {
    border-radius: 16px;
    box-shadow: 0 30px 30px -25px rgba(0, 38, 255, 0.205);
    padding: 10px;
    background-color: #fff;
    color: #0e264f;
    max-width: 300px;
    flex: 1 1 280px; /* Ensures flexibility and centering */
  }

  .plan .inner {
    padding: 20px;
    padding-top: 40px;
    background-color: #fff;
    border-radius: 12px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;

export default PlanCards;
