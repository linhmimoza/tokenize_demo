import moment from "moment";

export default {
  checkEmail: email => {
    if (email && email.trim() === "") return true;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  },
  checkCardNumber: number => {
    const regex = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
    return regex.test(number);
  },
  checkExpDate: date => {
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (regex.test(date)) {
      return moment(date, "MM-YY") > moment(new Date());
    }
    return false;
  },
  checkRequired: (value) => {
    return value && value.trim().length > 0;
  },
  checkPassword: password => {
    return password && password.trim().length >= 8;
  }
};
