import axios from "axios";
const url = process.env.WORDPRESS_BASE_URL + "/wp-json/wc/v3/products";
const shippingUrl = "https://fredommaster.pl/shop/wp-json/wc/v3";
const consumer_key = process.env.NEXT_APP_CONSUMER_DATA_KEY;
const consumer_secret = process.env.NEXT_APP_CONSUMER_DATA_SECRET;

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

export async function getProfileData(authToken) {
  const wordpressAPIEndpoint = "https://fredommaster.pl/shop";
  try {
    const response = await axios.get(
      `${wordpressAPIEndpoint}/wp-json/usercustomer/v1/current_user_data`,

      {
        next: { revalidate: 0 },
        headers: {
          Authorization: `Bearer ${authToken}`, // Используйте нужный формат заголовка авторизации
        },
      }
    );

    if (response.status === 200) {
      // Данные профиля доступны в response.data
      return response;
    } else {
      throw new Error("Не удалось получить данные профиля пользователя.");
    }
  } catch (error) {
    throw error;
  }
}

export async function pages() {
  const getPosts = await fetch(
    // `https://fredommaster.pl/shop/wp-json/custom/v1/pages/`
    `https://fredommaster.pl/shop/wp-json/custom-nav/v3/menu`, {
    method: "POST"
  }
  );
  const getPostsJ = await getPosts.json();

  return getPostsJ;
}
