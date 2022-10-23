const date = new Date();
const weekday = date.getDay();
const daysLeft = 5 - weekday;

const Weekend = () => {
  if (weekday === 0 || weekday === 6) {
    return <p>🎉 Enjoy your weekend! 🥳 </p>;
  } else if (weekday === 5) {
    return <p> 🔜 The weekend starts tonight! 🔜</p>;
  } else {
    return <p>Only {daysLeft} days left until weekend!</p>;
  }
};

export default Weekend;
