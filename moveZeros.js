function moveZeros(nums) {
    let i = 0;
    // Loop through the array and If the current element is not a zero, move it to the front
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== 0) {
        nums[i] = nums[j];
        i++;
      }
    }
    // Fill the remaining positions with zeros
    while (i < nums.length) {
      nums[i] = 0;
      i++;
    }
    return nums;
  }
  