const searchDate = () => {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var secondes = today.getSeconds();
  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (secondes < 10) {
    secondes = "0" + secondes;
  }

  today = day + "/" + month + "/" + year + "-" + hours + ":" + minutes;

  return today;
};

export default searchDate;
