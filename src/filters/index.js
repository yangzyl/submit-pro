import Vue from "vue";

Vue.filter("phoneNoSalt", value => {
  const len = value.length;
  let str = "";
  for (let i = 0; i < len - 7; i++) {
    str += "*";
  }
  return value.slice(0, 3) + str + value.slice(-4);
});

Vue.filter("plateNoSalt", value => {
  return value;
});

Vue.filter("identificationNoSalt", value => {
  const len = value.length;
  let str = "";
  for (let i = 0; i < len - 10; i++) {
    str += "*";
  }
  return value.slice(0, 6) + str + value.slice(-4);
});

Vue.filter("permissionNoSalt", value => {
  const len = value.length;
  let str = "";
  for (let i = 0; i < len - 4; i++) {
    str += "*";
  }
  return str + value.slice(-4);
});
Vue.filter('formatDate', value => {
  const shortVal = value.split(' ')[0];
  const pattern = /(\d{4})-(\d{2})-(\d{2})/;
  return shortVal.replace(pattern, '$1年$2月$3日');
});
