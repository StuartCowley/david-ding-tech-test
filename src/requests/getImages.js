import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=moon`)
      .then((res) => {
        const imageResults = res.data.collection.items;
        const parsedImages = imageResults.filter(
          (obj) => obj.data[0].media_type === "image"
        );
        const images = parsedImages.map((image) => image.links[0].href);
        // console.log(images);
        return images;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
