function findLongestEqualSequence(arr) {
  let longestSequence = [];
  let currentSequence = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentSequence.push(arr[i]);
    } else {
      if (currentSequence.length > longestSequence.length) {
        longestSequence = currentSequence;
      }
      currentSequence = [arr[i]];
    }
  }

  // Final check in case the longest sequence is at the end
  if (currentSequence.length > longestSequence.length) {
    longestSequence = currentSequence;
  }

  console.log(longestSequence.join(' '));
}
findLongestEqualSequence ([4, 4, 4, 4])
