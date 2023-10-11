import axios from "axios";
const url = process.env.NEXT_APP_BASE_URL;
const shippingUrl = "https://fredommaster.pl/shop/wp-json/wc/v3";
const consumer_key = "ck_287f3f3155ad6df9b741abce1fcb830a1e2a6391";
const consumer_secret = "cs_2d6cec8fe27ee3cdacb7e843eabe2e14ec68c496";

export async function singleProductData(id) {
  try {
    const response = await axios.get(url + "/" + id, {
      params: {
        consumer_key: consumer_key,
        consumer_secret: consumer_secret,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export async function relatedProductIds(id) {
  try {
    const response = await axios.get(url + "?include=" + id, {
      params: {
        consumer_key: consumer_key,
        consumer_secret: consumer_secret,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export async function categoriesListNew() {
  const newUrl = "https://fredommaster.pl/shop/wp-json/custom/v1/categories";
  try {
    const response = await axios.get(newUrl);
    const data = response.data;
    return data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export function fetchProductList(currentCategory, page) {
  const pageNum = !page ? 1 : page;
  let params = {
    page: pageNum,
    per_page: 45,
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    stock_status: "instock",
  };

  if (!!currentCategory) {
    params["category"] = currentCategory;
  }
  // console.log(url, params);
  return axios
    .get(url, {
      params,
    })

    .then((res) => {
      return res;
    })
    .catch((erorr) => erorr);
}

export function fetchProductCurrentCatgoryData(currentCategory) {
  let params = {
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
  };

  // console.log(url + "/categories/" + currentCategory, params);
  return axios
    .get(url + "/categories/" + currentCategory, {
      params,
    })

    .then((res) => {
      return res;
    })
    .catch((erorr) => erorr);
}
