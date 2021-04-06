const { areaOfCircle } = require('./lib')
const { isStartWithUppercase } = require('./lib')

const CIRCLE_TEST_DATA = [
  {
    message: 'Test for area of circle with positive value',
    radius: 3,
    area: 28.274333882308138,
  },
  {
    message: 'Test for area of circle with negative value',
    radius: -2,
    area: 0,
  },
  {
    message: 'Test for area of circle with undefined value',
    radius: undefined,
    area: 0,
  },
  {
    message: 'Test for area of circle with null value',
    radius: null,
    area: 0,
  },
  {
    message: 'Test for area of circle with string value',
    radius: 'abc',
    area: 0,
  },
  {
    message: 'Test for area of circle with array type value',
    radius: [1, 2, 3],
    area: 0,
  },
  {
    message: 'Test for area of circle with object type value',
    radius: {a: 1},
    area: 0,
  }
]


const TEST_CAMMEL_STRING_DATA = [
  {
    message: 'Test for string startsWith Capital letter',
    string: 'New',
    result: true
  },
  {
    message: 'Test for string does not startsWith Capital letter',
    string: 'new',
    result: false,
  },
  {
    message: 'Test for string have capital letter but does not startsWith Capital letter',
    string: 'nEW',
    result: false,
  },
  {
    message: 'Test for undefined value',
    string: undefined,
    result: false,
  },
  {
    message: 'Test for null value',
    string: null,
    result: false,
  },
  {
    message: 'Test for number type value',
    string: 122,
    result: false,
  },
  {
    message: 'Test for array type value',
    string: [1,2,3],
    result: false,
  },
  {
    message: 'Test for object type value',
    string: {a: 1},
    result: false,
  }
]



CIRCLE_TEST_DATA.map(data => {
  console.log(data.message);
  if(areaOfCircle(data.radius) === data.area) {
    console.log("** Passed **");
  } else {
    console.warn(" Failed !! ");
  }
})


TEST_CAMMEL_STRING_DATA.map(data => {
  console.log(data.message);
  if(isStartWithUppercase(data.string) === data.result) {
    console.log("**  Passed **");
  } else {
    console.warn(" Failed !!");
  }
})