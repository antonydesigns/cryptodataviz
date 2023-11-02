export function join(
  toJoin = [],
  mainTable = [],
  toJoinPK = "",
  mainTableFK = "",
  select = ([], []) => {
    return {};
  }
) {
  // Create lookup
  let lookup = [];
  for (let i = 0; i < toJoin.length; i++) {
    let item = toJoin[i];
    lookup[item[toJoinPK]] = item;
  }
  // Output with selected columns
  let output = [];
  for (let j = 0; j < mainTable.length; j++) {
    let item = mainTable[j];
    // for the current maintable item, find the foreign key
    // use the FK on the lookup table to get the lookup item
    // for current maintable item
    let lookupItem = lookup[item[mainTableFK]];
    output.push(select(item, lookupItem));
  }
  return output;
}

export function stringToDate(input) {
  const dateString = input;
  const dateParts = dateString.split("/");

  // Extract month, day, and year
  const month = parseInt(dateParts[0]) - 1; // Month is 0-based in JavaScript, so subtract 1
  const day = parseInt(dateParts[1]);
  const year = parseInt(dateParts[2]);

  // Create a new Date object
  return new Date(year, month, day);
}
