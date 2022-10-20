const CurrentDate = () => {
  const datum = new Date();
  return (
    <div>
      <p className="date">
        Today is {datum.toLocaleDateString("en-GB", { dateStyle: "full" })}
      </p>
    </div>
  );
};

export default CurrentDate;
