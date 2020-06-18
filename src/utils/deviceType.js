const judgeDeviceType = (() => {
  var ua = window.navigator.userAgent.toLocaleLowerCase();
  var isIOS = /iphone|ipad|ipod/.test(ua);
  var isAndroid = /android/.test(ua);

  return {
    isIOS: isIOS,
    isAndroid: isAndroid
  };
})();

export default judgeDeviceType;
