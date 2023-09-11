function formattedTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

  const formattedTime = `${formattedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;
  return formattedTime;
}


export {formattedTime}