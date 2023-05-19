const Notification = (props) => {
  //  Write your code here.
  const { className, children, icon } = props;

  return (
    <div className={className}>
      <img className="image-logo" src={icon} />
      <p>{children}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Notifications</h1>
    <Notification
      className="information"
      children="Information Message"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="success"
      children="Success Message"
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="warning"
      children="Warning Message"
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="error"
      children="Error Message"
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
