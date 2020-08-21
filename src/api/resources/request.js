export default function Request(apiHandler) {
    return {
      sendUser(data) {
        return apiHandler.post('create/user', data);
      }
    };
  }