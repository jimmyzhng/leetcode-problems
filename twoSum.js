const nums = [1, 2, 3, 4, 5, 6];

const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (map.has(diff)) {
      return [i, map.get(diff)];
    }

    map.set(nums[i], i);
  }
};

console.log(twoSum(nums, 5));