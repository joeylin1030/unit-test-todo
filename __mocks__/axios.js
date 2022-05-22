const toToList = {
  success: true,
  data: ["早上工作", "中午吃飯", "晚上睡覺"],
};

export const get = (url) => {
  if (url === "toToList.json") {
    return new Promise((resolve, reject) => {
      if (toToList.success) {
        resolve(toToList);
      } else {
        reject(new Error());
      }
    });
  }
};
