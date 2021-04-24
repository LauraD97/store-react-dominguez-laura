const url = "https://coding-challenge-api.aerolab.co";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjcwYmQ0ZjBlMzM1MDAwMTg1YjQ3NDMiLCJpYXQiOjE2MDEyMjQwMTV9.WUPv_DSAdl33JMzmUtbCwjzJ_99C8f4Y45xK9YFzIGE";

export const paths = {
    profile: {
      id: "profile",
      path: "/user/me",
      method: "GET",
    },
    products: {
      id: "products",
      path: "/products",
      method: "GET",
    },
    history: {
      id: "history",
      path: "/user/history",
      method: "GET",
    },
    redeem: {
      id: "redeem",
      path: "/redeem",
      method: "POST",
    },
    points: {
      id: "points",
      path: "/user/points",
      method: "POST",
    }
};

export async function fetchData({ data: { path, method }, body }) {
    let request = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  
    if (method === "POST") request = { ...request, body: JSON.stringify(body) };
  
    const response = await fetch(url + path, request);
    const data = await response.json();
    return data;
}

export const sortOptions= {
    lowest:'Lowest price',
    highest:'Highest price'
}
  
export const filters = {
    category: {
      id: 'Any category',
      options: []
    },
    price: {
      id: 'Any price',
      options: ['0 - 500', '501 - 1000', '1001 - 1500', '1501 - 2000', '2001 - 2500']
    }
}
  
export const pointOptions = [
    1000, 5000, 7500
]

export const itemsPerPage = 16;