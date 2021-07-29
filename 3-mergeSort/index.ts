const merge = (arr: number[], l: number, m: number, r: number) => {
  const lArr = arr.slice(l, m + 1);
  const rArr = arr.slice(m + 1, r + 1);

  let i = 0;
  let j = 0;
  let k = l;

  while (i < lArr.length && j < rArr.length) {
    if ((lArr[i] as number) <= (rArr[j] as number)) {
      arr[k] = lArr[i] as number;
      i++;
    } else {
      arr[k] = rArr[j] as number;
      j++;
    }
    k++;
  }

  while (i < lArr.length) {
    arr[k] = lArr[i] as number;
    i++;
    k++;
  }

  while (j < rArr.length) {
    arr[k] = rArr[j] as number;
    j++;
    k++;
  }
};

const mergeSort = (arr: number[], l: number, r: number) => {
  if (l >= r) return;
  const m = l + Math.floor((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
};

const unSorted = [13, 5, 2, 4, 3, 7, 1, 8, 10, 14, 4, 12, 6, 9, 11, 16, 15];

mergeSort(unSorted, 0, unSorted.length - 1);
console.log('unsorted', unSorted);
