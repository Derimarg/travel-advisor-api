import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "b9eb99eb42mshfc276f1c479e93bp1d4bb9jsn018b3bb37322",
  },
};

export const getPlacesData = async () => {
  try {
    // request
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
      console.log(error);
      
  }
};
