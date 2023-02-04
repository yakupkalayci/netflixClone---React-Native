export const movieListDataParser = (data) => Object.keys(data).map((key) => ({
      key,
      ...data[key]
    }));
