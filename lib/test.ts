const isMarried = true;
const taro = {
  age: 25,
  ...(isMarried ? { wifename: "hanako" } : {})
};

console.log(taro);

console.log(Object.assign({ age: 25 }, isMarried && { wifename: "hanako" }));
