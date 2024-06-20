// generate an array of numbers within a specified range and step
const generateItemsInRange = (start, end, step) => {
    const range = [];
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
    return range;
  };
  
  // Function to randomly select items from a given range
  const randomlySelectItemsFromRange = (items_num, range) => {
    // Check if the number of items requested is greater than the range length
    if (items_num > range.length) {
      throw new Error("Number of items selected is greater than range length");
    }
  
    const randomItems = [];
    // Loop to select items randomly from the range
    for (let i = 0; i < items_num; i++) {
      // Generate a random index within the current range length
      const randomIndex = Math.floor(Math.random() * range.length);
      // Push the selected item to the randomItems array and remove it from the range
      randomItems.push(range.splice(randomIndex, 1)[0]);
    }
  
    return randomItems;
  };
  
  // Main function to generate random items from a specified range
  const get_random_items_from_range = (
    items = 1,
    start = 0,
    end = 1,
    step = 1
  ) => {
    // Generate the range of numbers based on start, end, and step
    const range = generateItemsInRange(start, end, step);
  
    // If more items are requested than available in the range, throw an error
    if (items > range.length) {
      throw new Error(`Out of bounds, only ${range.length} numbers are possible`);
    }
  
    // Select randomly 'items' number of items from the range
    return randomlySelectItemsFromRange(items, range);
  };
  
  // Export the main function for use in other modules
  module.exports = { get_random_items_from_range };
  