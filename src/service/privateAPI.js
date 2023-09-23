import axios from "axios";

const privateAPI = axios.create({
  baseURL: 'https://node-server-team-proj.onrender.com/api/',
});

export const token = {
  set(token) {
    privateAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    privateAPI.defaults.headers.common.Authorization = "";
  },
  check(token) {
    if (!privateAPI.defaults.headers.common.Authorization) {
      privateAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  },
};

export const logout = async () => {
  try {
    const { data } = await privateAPI.post("/api/users/signout");
    return data;
  } finally {
    token.unset();
  }
};

export const refresh = async () => {
  try {
    if (privateAPI.defaults.headers.common.Authorization) {
      const { data } = await privateAPI.get("api/users/current");
      token.unset();
      if (data.token) {
        token.set(data.token);
      }
      return data;
    }
    return null;
  } catch (error) {
    token.unset();
    throw error;
  }
};

export const getExercisesCategories = async () => {
  const respose = await Promise.all([
    privateAPI.get("api/exercises/bodyparts"),
    privateAPI.get("api/exercises/muscles"),
    privateAPI.get("api/exercises/equipments"),
  ]);
  const [bodyparts, muscles, equipments] = respose.map((e) => e.data);
  const categories = { bodyparts, muscles, equipments };
  return categories;
};

export const getExerciseList = async (params) => {
  const { data } = await privateAPI.get("api/exercises", { params });
  return data;
};

export const getProductsCategories = async () => {
  const { data } = await privateAPI.get("api/products");
  return data;
};

export const getProductsList = async () => {
  const { data } = await privateAPI.get("api/products/admissible?limit=3000");
  return data;
};

export const getDiariesByDate = async (currentDate) => {
  const { data } = await privateAPI.get("api/diaries/daily/" + currentDate);
  return data;
};

export const productAddDiary = async (body) => {
  const { date, product, amount, eldata } = body;
  const { data } = await privateAPI.post("api/diaries/product/add", {
    date,
    product,
    amount,
  });
  return { ...data, newProduct: eldata };
};

export const exerciseAddDiary = async (body) => {
  const { date, exercise, time } = body;
  const { data } = await privateAPI.post("api/diaries/exercise/add", {
    date,
    exercise,
    time,
  });
  return { ...data, newExercise: body.data };
};

export const updateBody = async ({
  height,
  currentWeight,
  desiredWeight,
  birthday,
  blood,
  sex,
  levelActivity,
  name,
}) => {
  if (name) await privateAPI.post("api/users/current/edit", { name });
  const { data } = await privateAPI.post("api/users/body", {
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    levelActivity,
  });
  return data;
};

export const changeAvatar = async (body) => {
  const { data } = await privateAPI.post("api/users/current/edit", body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const deletedDiaryProduct = async (params) => {
  const { status, data } = await privateAPI.delete(
    `api/diaries/product/${params.productId}`,
    { data: params }
  );
  if (status === 200) {
    return { productId: params.productId, data };
  }
  return {};
};

export const deletedDiaryExercise = async (params) => {
  const { status, data } = await privateAPI.delete(
    `api/diaries/exercise/${params.exerciseId}`,
    { data: params }
  );
  if (status === 200) {
    return { exerciseId: params.exerciseId, data };
  }
  return {};
};