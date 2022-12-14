const date = new Date();
const weekday = date.getDay();
const daysLeft = 5 - weekday;

const Weekend = () => {
  if (weekday === 0 || weekday === 6) {
    return <strong>🎉 Enjoy your weekend! 🥳 </strong>;
  } else if (weekday === 5) {
    return <strong> 🔜 The weekend starts tonight! 🔜</strong>;
  } else if (weekday === 4) {
    return <strong> Only {daysLeft} day left until weekend!</strong>;
  } else {
    return <strong>Only {daysLeft} days left until weekend!</strong>;
  }
};

export default Weekend;
