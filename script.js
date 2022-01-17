// expected output

// {
//   automation: {
// "create:own":["*"],
//  "read:own":["*"]
// },
//   automation_publish: {
//     "create:own": ["*"],
//   },
//   automation_email_template: {
//     "create:own": ["*"],
//   },
// }

const getModifiedJSON = (value) => {
  switch (value) {
    case "read":
      return ["read:own", ["*"]];
    case "write":
      return ["create:own", ["*"]];
    default:
      break;
  }
};

let data = {
  automation: ["read"],
  automation_publish: ["write", "read"],
  automation_email_template: ["write", "read"],
};

let resultJSON = {}; // empty object
const jsonEntries = Object.entries(data);

jsonEntries.map(([key, value]) => {
  let result = {};
  //iterate the value array
  value.map((val) => {
    const response = getModifiedJSON(val); // returns array for each iterations;
    result[response[0]] = response[1]; // assign values to result obj;
  });

  // for each iteration assign values to arrConvertion's key;
  resultJSON[key] = result;
});

console.log("output:", resultJSON);
