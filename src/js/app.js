// TODO: write your code here

export default function orderByProps(obj, arr) { // Проверка того, что obj валидный объект,
  //  а arr валидный массив не подразумевается
  const resArr = [];
  const myArr = [];
  const keysArr = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) { // Это условие я не тестировала,
      // т.к. оно просто проверяет является ли свойсто собственным,
      // поэтому покрытие по веткам не 100%
      myArr.push(key);
    }
  }
  myArr.sort();


  myArr.forEach((item) => { // заполняем массив ключами, которых нет в arr
    let bool = true;
    arr.forEach((i) => {
      if (item === i) {
        bool = false;
      }
    });

    if (bool) {
      keysArr.push(item);
    }

    bool = true;
  });

  keysArr.sort();

  for (let i = (arr.length - 1); i >= 0; i -= 1) {
    keysArr.unshift(arr[i]);
  }

  keysArr.forEach((item) => {
    if (Object.prototype.hasOwnProperty.call(obj, item)) {
      const myObj = { key: item, value: obj[item] };
      resArr.push(myObj);
    } else {
      console.log(`The object doesn't have a property ${item}`);
    }
  });


  return resArr;
}
