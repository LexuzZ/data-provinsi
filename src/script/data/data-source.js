class DataSource {
  static searchClub() {
    return fetch("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.provinsi) {
          return Promise.resolve(responseJson.provinsi);
        } else {
          return Promise.reject("is not found!");
        }
      });
  }
}

export default DataSource;
