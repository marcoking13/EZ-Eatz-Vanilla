const routes = require("./routeSample.js");

var total = 0;
const FoodTrucks =  [{
  ownerID:"jfu3fb3u9f2ufh2408fj24hr42089fnceorm0d32uj0p324",
  objectID:"319ei310328eu30ejsnm0i32ds320dj230d",
  name:"Freeze-Dry",
  logo:"./assets/images/sm.png",
  background:"./assets/images/samplebanner2.jpg",
  display:"./assets/images/smoothie.jpg",
  type:["dessert","all-american"],
  address:{
    street:"4 E University Dr",
    city:"Tempe",
    state:"AZ",
    zip: 85281
  },
  routes:routes,
  priceAverage:total,
  menu:[{
    catagory:"Sandwiches",
    id:"nveovneronevnoejvnejvnjmcmcmcmcmm",
    food:[{
      item:"King Size Sandwich",
      id:"nvovbn3ovnojevn",
      ingredients:[{name:"ice cream sandwich",display:false}],
      calories:300,
      price:9.53,
      description:"A giant ice cream sandwich"
    },
    {
      item:"Oreo Sandwich",
      id:"nvovbn3ovnojevncnrocekjlewljkcl",
     ingredients:[{name:"oreo sandwich",display:false}],
      calories:450,
      price:10.41,
      description:"A oreo ice cream sandwich"
    },
    {
      item:"Toll House Sandwich",
      id:"39393939392eie39488494839849348983943948398490228t43798",
      ingredients:[{name:"toll house sandwich",display:false}],

      calories:1000,
      price:4.50,
      description:"Classic ice cream sandwich"
    }]
},
{
  catagory:"Homemade",
    id:"nveovneronevnoejvnejvnjmcmcmcmcvnwwumbmbmivnifeuvn",
  food:[{
    item:"Vanilla Ice Cream",
    id:"fo3wifj290rejd1mco-1nojevn",
    ingredients:[{name:"vanilla ice cream",display:false}],
    calories:400,
    price:2.99,
    description:"A scoop of vanilla ice cream"
  },
  {
    item:"Strawberry Ice Cream",
    id:"meckmedqkkqelmceklcmdo1dx",
    ingredients:[{name:"strawberry ice cream",display:false}],
    calories:450,
    price:2.99,
    description:"A scoop of strawberry ice cream"
  },
  {
    item:"Rocky Road Ice Cream",
    id:"nconcncnc0330393939r48398394348943894389",
    ingredients:[{name:"chocolate ice cream",display:false},{name:"marshmallow",display:true},{name:"twix bars",display:true}],
    calories:400,
    price:4.99,
    description:"A scoop of rocky road ice cream"
  }]
},
{
  catagory:"Crazy-Creations",
    id:"nveovneronevnoejvnejvnjmcmcmcmcmmvvvv",
  food:[{
    item:"End of the World Cookie",
    id:"nvovbn3ovnojevfcmwofdcmwiocmwoicwocamn222",
    ingredients:[{name:"chocolate ice cream",display:false},{name:"strawberries",display:true},{name:"fudge",display:true}],
    calories:2000,
    price:11.53,
    description:"A 2 pound ice cream cookie we recommend it"
  },
  {
    item:"Flamingo Cake",
    id:"mkcmeklmcklmqkmlcmq1111",
    ingredients:[{name:"strawberry ice cream",display:false},{name:"lemon",display:true},{name:"mango",display:true}],
    calories:550,
    price:2.41,
    description:"Affordable and fancy cake"
  },
  {
    item:"Fried Ice Cream",
    id:"rhy7f92j9fhj209fduj013ed9j01ss02982928",
   ingredients:[{name:"chocolate ice cream",display:false},{name:"fudge",display:true}],

    calories:800,
    price:4.50,
    description:"Fried ice  cream"
  }]
}],

images:["image2.png","image3.png","image4.png"],
 sides:[
   {
   name:"skittles",
   price:.50
 },
 {
 name:"fudge",
 price:.40
},
{
name:"m&m",
price:.30
},
{
name:"oreos",
price:.60
},
{
name:"sprinkles",
price:.50
},
{
name:"marshmallow",
price:.50
}




]
},
{
  ownerID:"mveonv49eeee8hj3vm930fc2m0",
  objectID:"er54g7g484g5g4gm2f09rjf09cncff948fn4920",
  name:"Pita Jungle",
  routes:routes,
  logo:"./assets/images/pita.png",
  background:"./assets/images/samplebanner.jpg",
  display:"./assets/images/pitajungle.jpg",
  type:["all-american","greek"],
  priceAverage:total,
  menu:[{
    catagory:"Wraps",
      id:"cmoicrewcvnew92290923923",
    food:[

    {
      item:"Gyro",
      id:"skm1pdm12309e120esjm1209e102",

      ingredients:[{
        name:"mixed greens",
        display:true
      },
      {
        name:"greek pita",
        display:false
      },
      {
        name:"gyro meat",
        display:true
      },
      {
        name:"tahini",
        display:false
      },
      {
        name:"mushroom",
        display:true
      },
      {
        name:"jalapeno",
        display:true
      }
    ],
      calories:870,
      price:4.50,
      description:"A classic gyro"
    }]
},
{
  catagory:"Pizzas",
    id:"mcocimcnceicnnnnnnn",
  food:[{
    item:"Lavosh Pizza",
    id:"xkwnccwococne",
    ingredients:[{
      name:"tomato",
      display:true
    },
    {
      name:"olives",
      display:true
    },
    {
      name:"feta",
      display:true
    },
    {
      name:"mushroom",
      display:true
    },
    {
      name:"spinach",
      display:true
    },
    {
      name:"lavash bread",
      display:false
    }
  ],

    calories:400,
    price:2.99,
    description:"A lavosh Pizza"
  },
  {
    item:"Garlic Mushroom Pizza",
    id:"021wo220w2o0e2o202",
    ingredients:[{
      name:"tomato",
      display:true
    },
    {
      name:"garlic",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"mushroom",
      display:true
    },
    {
      name:"lavash bread",
      display:false
    }
  ],

    calories:450,
    price:5.99,
    description:"A lavosh mushroom pizza"
  },
  {
    item:"Pesto Pizza",
    id:"ek102eke1209e201",
    ingredients:[{
      name:"pesto",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"chicken",
      display:true
    },
    {
      name:"mushrooms",
      display:true
    },
    {
      name:"spinach",
      display:true
    },
    {
      name:"lavash bread",
      display:false
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic pesto pizza"
  }]
},
{
  catagory:"Hummus",
  id:"nojdmi0ednemide",
  food:[{
    item:"Avocado Hummus",
    id:"nd39d3d8end2o9d2nodj29",
    ingredients:[{
      name:"olive oil",
      display:false
    },
    {
      name:"garnish",
      display:true
    },
    {
      name:"garbanzo beans",
      display:false
    },
    {
      name:"tahini",
      display:false
    },
    {
      name:"garlic",
      display:false
    },
    {
      name:"lemon juice",
      display:true
    }
  ],

    calories:500,
    price:5.53,
    description:"Avocado infused hummus"
  },
  {
    item:"Red Bell Pepper Hummus",
    id:"nc2enfdun298d29dj2398jdm2",
    ingredients:[{
      name:"olive oil",
      display:false
    },
    {
      name:"garnish",
      display:true
    },
    {
      name:"garbanzo beans",
      display:false
    },
    {
      name:"tahini",
      display:false
    },
    {
      name:"garlic",
      display:false
    },
    {
      name:"red bell pepper",
      display:false
    },
    {
      name:"lemon juice",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Red bell pepper infused hummus"
  },
  {
    item:"Cilantro Hummus",
    id:"cdmi30dn32dn3d23o",
    ingredients:[{
      name:"olive oil",
      display:false
    },
    {
      name:"garnish",
      display:true
    },
    {
      name:"garbanzo beans",
      display:false
    },
    {
      name:"tahini",
      display:false
    },
    {
      name:"garlic",
      display:false
    },
    {
      name:"cilantro",
      display:false
    },
    {
      name:"pico de gallo",
    diplay:true
    },
    {
      name:"lemon juice",
      display:true
    }
  ],
    calories:500,
    price:4.50,
    description:"Cilantro infused hummus"
  }]
},
{
  catagory:"Specials",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Wood-fired Salmon",
    id:"nd39d3d8end2o44449d2nodj29",
    ingredients:[{
      name:"garlic",
      display:true
    },
    {
      name:"mashed potatoes",
      display:true
    },
    {
      name:"salmon",
      display:true
    },
    {
      name:"wilted spinach",
      display:true
    },
    {
      name:"pita",
      display:true
    },
    {
      name:"lemon juice",
      display:true
    }
  ],

    calories:400,
    price:9.99,
    description:"Wood fired salmon with mashed potatoes"
  },
  {
    item:"Garbanzo Bowl",
    id:"2932939nddneudn932",
    ingredients:[{
      name:"garbanzo beans",
      display:true
    },
    {
      name:"kimchi",
      display:true
    },
    {
      name:"avocado",
      display:true
    },
    {
      name:"spinach",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"tomato",
      display:true
    }
  ],

    calories:800,
    price:12.99,
    description:"Garbanzo bowl with kimchi"
  },
  {
    item:"Chicken del Sol",
    id:"nc2enfd399393un298d29dj2398jdm2",
    ingredients:[{
      name:"chicken",
      display:true
    },
    {
      name:"tomato sauce",
      display:false
    },
    {
      name:"pita crisp",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"red bell pepper",
      display:true
    },
    {
      name:"lemon juice",
      display:false
    }
  ],
    calories:600,
    price:8.50,
    description:"Tomato basil soup with chicken;comes with a pita crisp"
  },
  {
    item:"Avocado Tostada",
    id:"cvnjjdn3d23o3939393993",
    ingredients:[{
      name:"avocado",
      display:true
    },
    {
      name:"corn torilla",
      display:true
    },
    {
      name:"tahini",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"avocado hummus",
      display:true
    },
    {
      name:"cilantro",
      display:true
    },
    {
      name:"pico de gallo",
    diplay:true
    }
  ],
    calories:330,
    price:3.50,
    description:"Avocado tostada with avocado hummus"
  }]
},
{
  catagory:"Drinks",
  id:"2390nojdmi0ednemid339934894389489894303r4382939e2882",
  food:[{
    item:"Coca-Cola",
    id:"2923923ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"392930203dj923jdcncnbvnf-2-",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Coca-Cola",
    id:"203298fdj82d2djjcnneocno2e",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    id:"29ei3290832928210301002022",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Dr Pepper",
    id:"29ei32908329238210010222dc",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010cmkc",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010cpmrmp",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{

  street:"4005 N Scottsdale Rd",
  city:"Scottsdale",
  state:"AZ",
  zip: 85251
},
 sides:[{
   name:"hummus",
   type:null,
   price:.99
 },
 {
   name:"cucumber",
   type:null,
   price:.4
 },
 {
   name:"tomato",
   type:null,
   price:.4
 },
 {
   name:"pico de gallo",
   type:null,
   price:.2
 },
 {
   name:"pita",
   type:["greek","regular","wheat"],
   price:.4
 }]
},
{
  ownerID:"39384rh393939393939393939393939393939348hdj8m",
  objectID:"102293ednfuvb4tuig4tuivbt4uivb4utfnu4k92kfdc4900ecm",
  name:"Burger Joint",
  routes:routes,
  logo:"./assets/images/burgerjoint.png",
  background:"./assets/images/burgerjointbanner.jpg",
  display:"./assets/images/burger33.jpg",
  type:["all-american","burgers"],
  priceAverage:total,
  menu:[{
    catagory:"Burgers",
      id:"cmoicrewcvnew92290923923",
    food:[

    {
      item:"Double Burger Meal",
      id:"2ewjsdxme2dcxk203x298292298",

      ingredients:[{
        name:"toasted bun",
        display:true
      },
      {
        name:"ground meat",
        display:true
      },
      {
        name:"cheese",
        display:true
      },
      {
        name:"greens",
        display:false
      },
      {
        name:"side of fries",
        display:true
      },
      {
        name:"side of secret sauce",
        display:true
      }
    ],
      calories:870,
      price:6.50,
      description:"A classic burger with a side of fries"
    }]
},
{
  catagory:"Sliders",
    id:"-20239049fjjj--",
  food:[{
    item:"6 burger slider",
    id:"33456789dmxewicm",
    ingredients:[{
      name:"toasted bun",
      display:true
    },
    {
      name:"ground beef",
      display:true
    },
    {
      name:"cheese",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"secret sauce",
      display:true
    },
    {
      name:"side of fries",
      display:true
    }
  ],

    calories:600,
    price:2.99,
    description:"6 slider burgers with a side of fries"
  },
  {
    item:"buffalo wings",
    id:"2029e0i3290r203",
    ingredients:[{
      name:"buffalo wings",
      display:false
    },
    {
      name:"side of A01 sauce",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our fresh seasoned buffalo wings"
  },
  {
    item:"Greek Salad",
    id:"aa2442020393939838jgjgjg",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"feta",
      display:true
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic greek salad"
  }]
},
{
  catagory:"Pizzas",
  id:"nojdmi0ednemide",
  food:[{
    item:"Classic Cheese",
    id:"19292929229384567438920394857",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    id:"jnnvnvnreivvnvnvnvnrvnvrrvnj22",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"r3j29fj2f92m9mc9m29",
    item:"Chicken Pizza",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    id:"29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"29ei32908329282100102",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Coca-Cola",
    id:"29ei32908329282100103",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    id:"29ei32908329282103010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Dr Pepper",
    id:"29ei32908329238210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{
  zip:85054,
  street:"7111 E Mayo Blvd",
  city:"Phoenix",
  state:"AZ"

},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"12345678webgfhurfi3ufin43uifb4ivn4uivgbdj328jd389omss",
  objectID:"sjkdxm33103vub3i4vbu4f 34uif5474578455785478457845784578542dn992d201ks1",
  name:"Acai Shop",
  routes:routes,
  logo:"./assets/images/acaishop.png",
  background:"./assets/images/acaishopbanner.jpg",
  display:"./assets/images/acai02.jpg",
  type:["all-american","burgers"],
  priceAverage:total,
  menu:[{
    catagory:"Burgers",
      id:"cmoicrewcvnew92290923923",
    food:[

    {
      item:"Double Burger Meal",
      id:"2ewjsdxme2dcxk203x298292298",

      ingredients:[{
        name:"toasted bun",
        display:true
      },
      {
        name:"ground meat",
        display:true
      },
      {
        name:"cheese",
        display:true
      },
      {
        name:"greens",
        display:false
      },
      {
        name:"side of fries",
        display:true
      },
      {
        name:"side of secret sauce",
        display:true
      }
    ],
      calories:870,
      price:6.50,
      description:"A classic burger with a side of fries"
    }]
},
{
  catagory:"Sliders",
    id:"-20239049fjjj--",
  food:[{
    item:"6 burger slider",
    id:"33456789dmxewicm",
    ingredients:[{
      name:"toasted bun",
      display:true
    },
    {
      name:"ground beef",
      display:true
    },
    {
      name:"cheese",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"secret sauce",
      display:true
    },
    {
      name:"side of fries",
      display:true
    }
  ],

    calories:600,
    price:2.99,
    description:"6 slider burgers with a side of fries"
  },
  {
    item:"buffalo wings",
    id:"2029e0i3290r203",
    ingredients:[{
      name:"buffalo wings",
      display:false
    },
    {
      name:"side of A01 sauce",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our fresh seasoned buffalo wings"
  },
  {
    item:"Greek Salad",
    id:"aa2442020393939838jgjgjg",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"feta",
      display:true
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic greek salad"
  }]
},
{
  catagory:"Pizzas",
  id:"nojdmi0ednemide",
  food:[{
    item:"Classic Cheese",
    id:"19292929229384567438920394857",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    id:"jnnvnvnreivvnvnvnvnrvnvrrvnj22",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"r3j29fj2f92m9mc9m29",
    item:"Chicken Pizza",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    id:"29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"29ei32908329282100102",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Coca-Cola",
    id:"29ei32908329282100103",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    id:"29ei32908329282103010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Dr Pepper",
    id:"29ei32908329238210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{

  street:"7354 E Shea Blvd",
  city:"Scottsdale",
  state:"AZ",
  zip: 85260
},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"39384rh4854854th45gh54gh4u9g5hjufecnovtbnuivhw9jfi3rgn94uhn39gi4hdj8m",
  objectID:"102293edkfnhubv4tuif4huth45th7tg548gt54h78t592kfdc4900ecm",
  name:"The Rotating Chicken",
  routes:routes,
  logo:"./assets/images/rotatingchicken.png",
  background:"./assets/images/rotatingchickenbanner.jpg",
  display:"./assets/images/chicken2029.jpg",
  type:["all-american","burgers"],
  priceAverage:total,
  menu:[{
    catagory:"Burgers",
      id:"cmoicrewcvnew92290923923",
    food:[

    {
      item:"Double Burger Meal",
      id:"2ewjsdxme2dcxk203x298292298",

      ingredients:[{
        name:"toasted bun",
        display:true
      },
      {
        name:"ground meat",
        display:true
      },
      {
        name:"cheese",
        display:true
      },
      {
        name:"greens",
        display:false
      },
      {
        name:"side of fries",
        display:true
      },
      {
        name:"side of secret sauce",
        display:true
      }
    ],
      calories:870,
      price:6.50,
      description:"A classic burger with a side of fries"
    }]
},
{
  catagory:"Sliders",
    id:"-20239049fjjj--",
  food:[{
    item:"6 burger slider",
    id:"33456789dmxewicm",
    ingredients:[{
      name:"toasted bun",
      display:true
    },
    {
      name:"ground beef",
      display:true
    },
    {
      name:"cheese",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"secret sauce",
      display:true
    },
    {
      name:"side of fries",
      display:true
    }
  ],

    calories:600,
    price:2.99,
    description:"6 slider burgers with a side of fries"
  },
  {
    item:"buffalo wings",
    id:"2029e0i3290r203",
    ingredients:[{
      name:"buffalo wings",
      display:false
    },
    {
      name:"side of A01 sauce",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our fresh seasoned buffalo wings"
  },
  {
    item:"Greek Salad",
    id:"aa2442020393939838jgjgjg",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"feta",
      display:true
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic greek salad"
  }]
},
{
  catagory:"Pizzas",
  id:"nojdmi0ednemide",
  food:[{
    item:"Classic Cheese",
    id:"19292929229384567438920394857",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    id:"jnnvnvnreivvnvnvnvnrvnvrrvnj22",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"r3j29fj2f92m9mc9m29",
    item:"Chicken Pizza",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    id:"29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"29ei32908329282100102",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Coca-Cola",
    id:"29ei32908329282100103",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    id:"29ei32908329282103010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Dr Pepper",
    id:"29ei32908329238210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{

  street:"7354 E Shea Blvd",
  city:"Scottsdale",
  state:"AZ",
  zip: 85260
},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"xn1mi9fdm2ntuibt4ugn4tjign4tjibnt9jfcm20q1sj120392029",
  objectID:"210e91320irnvrgunov45uibt4nuivbnt4uibnt4ui3280ei129ei30i09ei1ddxcx",
  name:"Salad Go",
  routes:routes,
  logo:"./assets/images/saladgo.png",
  background:"./assets/images/saladgobanner.jpg",
  display:"./assets/images/salad999.jpg",
  type:["all-american","burgers"],
  priceAverage:total,
  menu:[{
    catagory:"Burgers",
      id:"cmoicrewcvnew92290923923",
    food:[

    {
      item:"Double Burger Meal",
      id:"2ewjsdxme2dcxk203x298292298",

      ingredients:[{
        name:"toasted bun",
        display:true
      },
      {
        name:"ground meat",
        display:true
      },
      {
        name:"cheese",
        display:true
      },
      {
        name:"greens",
        display:false
      },
      {
        name:"side of fries",
        display:true
      },
      {
        name:"side of secret sauce",
        display:true
      }
    ],
      calories:870,
      price:6.50,
      description:"A classic burger with a side of fries"
    }]
},
{
  catagory:"Sliders",
    id:"-20239049fjjj--",
  food:[{
    item:"6 burger slider",
    id:"33456789dmxewicm",
    ingredients:[{
      name:"toasted bun",
      display:true
    },
    {
      name:"ground beef",
      display:true
    },
    {
      name:"cheese",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"secret sauce",
      display:true
    },
    {
      name:"side of fries",
      display:true
    }
  ],

    calories:600,
    price:2.99,
    description:"6 slider burgers with a side of fries"
  },
  {
    item:"buffalo wings",
    id:"2029e0i3290r203",
    ingredients:[{
      name:"buffalo wings",
      display:false
    },
    {
      name:"side of A01 sauce",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our fresh seasoned buffalo wings"
  },
  {
    item:"Greek Salad",
    id:"aa2442020393939838jgjgjg",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"feta",
      display:true
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic greek salad"
  }]
},
{
  catagory:"Pizzas",
  id:"nojdmi0ednemide",
  food:[{
    item:"Classic Cheese",
    id:"19292929229384567438920394857",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    id:"jnnvnvnreivvnvnvnvnrvnvrrvnj22",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"r3j29fj2f92m9mc9m29",
    item:"Chicken Pizza",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    id:"29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"29ei32908329282100102",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Coca-Cola",
    id:"29ei32908329282100103",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    id:"29ei32908329282103010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Dr Pepper",
    id:"29ei32908329238210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{
  street:"1290 S Normal Ave",
  city:"Tempe",
  state:"AZ",
  zip: 85260
},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"39384rfhu34h45tfh478th89rht78ty7t8t548tg4578gh48hdj8m",
  objectID:"10229ifgn4utgn49ug5u9h54ug54hgub5t4hg93h98ht49gh5gh3493edk92kfdc4900ecm",
  name:"Steak Truck",
  routes:routes,
  logo:"./assets/images/firegrill.png",
  background:"./assets/images/steaktruckbanner.jpg",
  display:"./assets/images/steak498.jpg",
  type:["all-american","burgers"],
  priceAverage:total,
  menu:[{
    catagory:"Burgers",
      id:"cmoicrewcvnew92290923923",
    food:[

    {
      item:"Double Burger Meal",
      id:"2ewjsdxme2dcxk203x298292298",

      ingredients:[{
        name:"toasted bun",
        display:true
      },
      {
        name:"ground meat",
        display:true
      },
      {
        name:"cheese",
        display:true
      },
      {
        name:"greens",
        display:false
      },
      {
        name:"side of fries",
        display:true
      },
      {
        name:"side of secret sauce",
        display:true
      }
    ],
      calories:870,
      price:6.50,
      description:"A classic burger with a side of fries"
    }]
},
{
  catagory:"Sliders",
    id:"-20239049fjjj--",
  food:[{
    item:"6 burger slider",
    id:"33456789dmxewicm",
    ingredients:[{
      name:"toasted bun",
      display:true
    },
    {
      name:"ground beef",
      display:true
    },
    {
      name:"cheese",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"secret sauce",
      display:true
    },
    {
      name:"side of fries",
      display:true
    }
  ],

    calories:600,
    price:2.99,
    description:"6 slider burgers with a side of fries"
  },
  {
    item:"buffalo wings",
    id:"2029e0i3290r203",
    ingredients:[{
      name:"buffalo wings",
      display:false
    },
    {
      name:"side of A01 sauce",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our fresh seasoned buffalo wings"
  },
  {
    item:"Greek Salad",
    id:"aa2442020393939838jgjgjg",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"feta",
      display:true
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic greek salad"
  }]
},
{
  catagory:"Pizzas",
  id:"nojdmi0ednemide",
  food:[{
    item:"Classic Cheese",
    id:"19292929229384567438920394857",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    id:"jnnvnvnreivvnvnvnvnrvnvrrvnj22",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"r3j29fj2f92m9mc9m29",
    item:"Chicken Pizza",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    id:"29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"29ei32908329282100102",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Coca-Cola",
    id:"29ei32908329282100103",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    id:"29ei32908329282103010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Dr Pepper",
    id:"29ei32908329238210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{
  zip:85251,
  street:"7333 E Indian Plaza",
  city:"Scottsdale",
  state:"AZ"
},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"39384rh4rfngu4igbi81w1cexjouqcchsk290d2edj8m",
  objectID:"y543u8dn3uirvbr3vgui3ng34ubg3gf329dxdn2i1ocd2ocmwco100eal",
  name:"China Bowl",
  routes:routes,
  logo:"./assets/images/chinabowl.png",
  background:"./assets/images/chinabowlbanner.jpg",
  display:"./assets/images/china9292.jpg",
  type:["all-american","burgers","chinese"],
  priceAverage:total,
  menu:[{
    catagory:"Appetizer",
      id:"33d2cmoicrmomk39ej2903dj901djewcvnew92290923923",
    food:[
      {
        item:"Rice Bowl",
        id:"3345jciekjijmiomoinceiu6789dmxewicm",
        ingredients:[{
          name:"brown rice",
          display:true
        },
        {
          name:"garnish",
          display:true
        }
      ],
      calories:300,
      price:2.99,
        description:"Wonton Soup"
      },
    {
      item:"Tariaki Chicken",
      id:"2ew32i3290ei3j32cmiovc32dcsdxme2dcxk203x298292298",

      ingredients:[{
        name:"brown rice",
        display:true
      },
      {
        name:"seasoned chicken",
        display:true
      },
      {
        name:"sauce",
        display:true
      }
    ],
      calories:870,
      price:6.50,
      description:"A bowl of fresh chicken and rice"
    }]
},
{
  catagory:"Entrees",
    id:"-2023904cmoicncemowocknc1ei9fjjj--",
  food:[{
    name:"Wonton Salad",
    id:"fj308jv39iqnq3u9tvbverwmncnucqvnrutpg293nqfcvneifjvcenroii",
    ingredients:[
    {name:"olives",display:true},
    {name:"greens",display:true},
    {name:"lemon dressing",display:true},
    {name:"wonton",display:true}],
    calories:600,
    price:4.99,
    description:"Wonton Salad"
  },
  {
    name:"Wonton Soup",
    id:"fj308jv39iqnq3u9tvbvnucqvnrutpg293nqfcvneifjveeeecenroicndwoixqoxmmoxqmocmqcmoi",
    ingredients:[
    {name:"wontons",display:true}
  ],
    calories:300,
    price:4.99,
    description:"Wonton Soup"
  },
  {
    item:"China Special",
    id:"2029e0i3mecpqcm290r203",
    ingredients:[{
      name:"chicken",
      display:true
    },
    {
      name:"homemade soy sauce",
      display:true
    },
    {
      name:"brown rice",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our special dish from the chef"
  }
]},
{
  catagory:"Drinks",
  id:"nojdmi0edncmwkecnkemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    id:"29ei329083292821ecewwec0010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"29ewcmkwecni32908329282100102",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Coca-Cola",
    id:"29ei329cnewic08329282100103",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    id:"29ei3290832cwec9282103010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Dr Pepper",
    id:"29ei32908ceww329238210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei329083cece2928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832cecdewcwdxew928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{
  street:"3123 N Scottsdale Rd",
  city:"Scottsdale",
  state:"AZ",
  zip: 85260
},
 sides:[{
   name:"wontons",
   type:null,
   price:2.99
 },
 {
   name:"rice",
   type:null,
   price:2.99
 },
 {
   name:"soy sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"39384rh48hdj8m000sss",
  objectID:"102293edk92kfdc4900ecm2020209",
  name:"Johnny Rocket",
  routes:routes,
  logo:"./assets/images/johnnyrocket.png",
  background:"./assets/images/johnnyrocketbanner.jpg",
  display:"./assets/images/america33.jpg",
  type:["all-american","burgers","healthy","dessert"],
  priceAverage:total,
  menu:[{
    catagory:"Burgers",
      id:"cmoicrewcvnew92290923923",
    food:[

    {
      item:"Double Burger Meal",
      id:"2ewjsdxme2dcxk203x298292298",

      ingredients:[{
        name:"toasted bun",
        display:true
      },
      {
        name:"ground meat",
        display:true
      },
      {
        name:"cheese",
        display:true
      },
      {
        name:"greens",
        display:false
      },
      {
        name:"side of fries",
        display:true
      },
      {
        name:"side of secret sauce",
        display:true
      }
    ],
      calories:870,
      price:6.50,
      description:"A classic burger with a side of fries"
    }]
},
{
  catagory:"Sliders",
    id:"-20239049fjjj--",
  food:[{
    item:"6 burger slider",
    id:"33456789dmxewicm",
    ingredients:[{
      name:"toasted bun",
      display:true
    },
    {
      name:"ground beef",
      display:true
    },
    {
      name:"cheese",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"secret sauce",
      display:true
    },
    {
      name:"side of fries",
      display:true
    }
  ],

    calories:600,
    price:2.99,
    description:"6 slider burgers with a side of fries"
  },
  {
    item:"buffalo wings",
    id:"2029e0i3290r203",
    ingredients:[{
      name:"buffalo wings",
      display:false
    },
    {
      name:"side of A01 sauce",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our fresh seasoned buffalo wings"
  },
  {
    item:"Greek Salad",
    id:"aa2442020393939838jgjgjg",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"feta",
      display:true
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic greek salad"
  }]
},
{
  catagory:"Pizzas",
  id:"nojdmi0ednemide",
  food:[{
    item:"Classic Cheese",
    id:"19292929229384567438920394857",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    id:"jnnvnvnreivvnvnvnvnrvnvrrvnj22",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"r3j29fj2f92m9mc9m29",
    item:"Chicken Pizza",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    id:"29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"29ei32908329282100102",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Coca-Cola",
    id:"29ei32908329282100103",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    id:"29ei32908329282103010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Dr Pepper",
    id:"29ei32908329238210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{
  street:"7354 E Shea Blvd",
  city:"Scottsdale",
  state:"AZ",
  zip: 85260
},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"39384rh48nfrvurivgrn8gh54n9g579ghhdj8mfj230f08",
  objectID:"102293edntuivb4fvgn45gu4n39vfng54ug8b34bgk92kfdc4900ecmceroinveiu",
  name:"The Stand",
  routes:routes,
  logo:"./assets/images/thestand.png",
  background:"./assets/images/thestandbanner.jpg",
  display:"./assets/images/burger339.jpg",
  type:["all-american","burgers","dessert","healthy","chinese"],
  priceAverage:total,
  menu:[{
    catagory:"Burgers",
      id:"cmoicrewcvnew92290923923",
    food:[

    {
      item:"Cheese Burger",
      id:"2ewjsdxme2dcxk23e13erdcqdrvc2qwq03x298292298",

      ingredients:[{
        name:"toasted bun",
        display:true
      },
      {
        name:"ground meat",
        display:true
      },
      {
        name:"cheese",
        display:true
      },
      {
        name:"greens",
        display:false
      },
      {
        name:"side of fries",
        display:true
      },
      {
        name:"side of secret sauce",
        display:true
      }
    ],
      calories:870,
      price:6.50,
      description:"A classic burger with a side of fries"
    }]
},
{
  catagory:"Starters",
    id:"-20239049fj4kd340f134jj--",
  food:[{
    item:"Fries",
    id:"33456789dmxew3ekdc2jmo1cj12oiicm",
    modal:false,
    ingredients:[],
    calories:600,
    price:2.99,
    description:"6 slider burgers with a side of fries"
  },
  {
    item:"buffalo wings",
    id:"2029e0i3290r203",
    modal:true,
    ingredients:[{
      name:"buffalo wings",
      display:false
    },
    {
      name:"side of A01 sauce",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our fresh seasoned buffalo wings"
  },
  {
    item:"Greek Salad",
    id:"aa244340904909412020393939838jgjgjg",
    modal:false,
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"feta",
      display:true
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic greek salad"
  }]
},
{
  catagory:"Pizzas",
  id:"nojdmi0ednemide",
  food:[{
    item:"Classic Cheese",
    id:"19292929229384567438920394857",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    id:"jnnvnvnreivvnvnvnvnrvnvrrvnj22",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"r3j29fj2f92m9mc9m29",
    item:"Chicken Pizza",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid3399339e2882",
  food:[{
    item:"Coca-Cola",
    id:"29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"29ei32908329282100102",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Coca-Cola",
    id:"29ei32908329282100103",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    id:"29ei32908329282103010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Dr Pepper",
    id:"29ei32908329238210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei3290832928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{

  street:"4385 E Indian School Rd",
  city:"Phoenix",
  state:"AZ",
  zip: 85018
},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"32903209024nvtuericvn2ervut4bh93rnv3r895g4n9v3n598gr08d32dj0m0fcn290",
  objectID:"fnc249fc94fhcnvtnuibvhteivnr3uibtruivnritubn49ovnrtbh4999898383298329",
  name:"Remmy's",
  routes:routes,
  logo:"./assets/images/remmy.png",
  background:"./assets/images/remmeybanner.jpg",
  display:"./assets/images/pizza290.jpg",
  type:["all-american"],
  priceAverage:total,
  menu:[{
    catagory:"Burgers",
      id:"cmoicrewcvnew92290923923",
    food:[

    {
      item:"Super Burger",
      id:"2ewjsd30430-4-30xme2dcxk203x298292298",

      ingredients:[{
        name:"sesame bun",
        display:true
      },
      {
        name:"ground meat",
        display:true
      },
      {
        name:"cheese",
        display:true
      },
      {
        name:"onion",
        display:false
      },
      {
        name:"side of fries",
        display:true
      },
      {
        name:"ketchup",
        display:true
      },{
        name:"mustard",
        display:true
      }
    ],
      calories:900,
      price:4.99,
      description:"A classic burger"
    }]
},
{
  catagory:"All American",
    id:"-20239049fjjj--49438939",
  food:[{
    item:"6 burger slider",
    id:"33456789d3232323e23dqdmxewicm",
    ingredients:[{
      name:"toasted bun",
      display:true
    },
    {
      name:"ground beef",
      display:true
    },
    {
      name:"cheese",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"secret sauce",
      display:true
    },
    {
      name:"side of fries",
      display:true
    }
  ],

    calories:500,
    price:2.99,
    description:"6 slider burgers with a side of fries"
  },
  {
    item:"buffalo wings",
    id:"2029e0i32943343430r203",
    ingredients:[{
      name:"buffalo wings",
      display:false
    },
    {
      name:"side of A01 sauce",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Our fresh seasoned buffalo wings"
  },
  {
    item:"Cesar Salad",
    id:"aa2442020393939838jgjgjg",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"feta",
      display:true
    }
  ],

    calories:400,
    price:4.99,
    description:"A classic tossed salad"
  }]
},
{
  catagory:"Dessert",
  id:"nojdmi0ednemide",
  food:[{
    item:"Fudge Sundae",
    id:"19292929229384439ri3409rf34fj34904567438920394857",
    ingredients:[{
      name:"fudge",
      display:true
    },
    {
      name:"vanilla ice cream",
      display:true
    },
    {
      name:"cherry",
      display:true
    }
  ],

    calories:900,
    price:4.99,
    description:"Fantastic fudge sundae"
  },
  {
    item:"Vanilla Ice Cream",
    id:"jnnvn3043vnreivvnvnvnvnrvnvrrvnj22",
    ingredients:[],
    calories:500,
    price:2.99,
    description:"Vanilla Ice Cream"
  },
  {
    item:"Strawberry Ice Cream",
    id:"jnnvn3043vnreivvnv-34034304nvnvnrvnvrrvnj22",
    ingredients:[],
    calories:500,
    price:2.99,
    description:"Strawberry Ice Cream"
  },
  {
    item:"Chocolate Ice Cream",
    id:"jnnvn3043vnreivvnvnvnvnrvnvrrvnj22",
    ingredients:[],
    calories:500,
    price:2.99,
    description:"Chocolate Ice Cream"
  },
]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid339933393403499e2882",
  food:[{
    item:"Coca-Cola",
    id:"29ei32908329282100104398ru3498eu328ru3298fjh",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"29ei3290832431423r2fdc3r9282100102",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Coca-Cola",
    id:"29ei3290832fcfvfdvfvdsveqwrca9282100103",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    id:"29ei32908329282103010cerwvcvfevev",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Dr Pepper",
    id:"29ei329083292382100fh3cn1qhn10",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei329083292823vco1vniev10010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei329083292821nfc3irn2iv0010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{

  street:"4340 E Indian School Rd",
  city:"Phoenix",
  state:"AZ",
  zip: 85018
},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 }]
},
{
  ownerID:"308eu023dfm20dj1mx231343e4ndcocdcndsoicndsocsndocdsnciod123e3e32130",
  objectID:"93292398eui33cnewiovnklaSCMRI3UVNEIAONVRQ39V33343323248u483938r3320492",
  name:"Pizza Town",
  routes:routes,
  logo:"./assets/images/pizzatown.png",
  background:"./assets/images/pizzatownbanner.jpg",
  display:"./assets/images/pizza45.jpg",
  type:["all-american","pizza"],
  priceAverage:total,
  menu:[{
    catagory:"Starters",
      id:"2ncocnewxmom23j3dk093djxcmwqp0",
    food:[
      {
        item:"Golden Fries",
        id:"e2222222cmkemeockmekocmokmcxlwql222mceqn",

        ingredients:[],
        calories:370,
        price:4.95,
        description:"A plate of golden brown fries"
      },
      {
        item:"Buffalo Wings",
        id:"e239439039222222cmkemeockmekocmokmcxlwql222mceqn",

        ingredients:[],
        calories:580,
        price:4.95,
        description:"A plate of fresh buffalo wings"
      },
      {
        item:"Calamari",
        id:"e2222222cmkemeockmekocmokmcxlwq992093e0l222mceqn",

        ingredients:[{
          name:"calamari sauce",
          display:true
        }],
        calories:370,
        price:4.95,
        description:"A plate of calamari"
      }
    ]
},
{
  catagory:"Pizzas",
    id:"-20239049f2e323e212e2ejjj--",
  food:[{
    item:"Margerita Pizza",
    id:"ecmkemeockmekocmokmcxlwql222mceqn",

    ingredients:[{
      name:"tomato",
      display:true
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"cheese",
      display:true
    },
    {
      name:"flour dough",
      display:false
    }
  ],
    calories:870,
    price:7.95,
    description:"A classic pizza with tomato on top"
  },
  {
    item:"Townstyle Pizza",
    id:"334567893940343490409dmxewicm",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"mozzerella",
      display:true
    },
    {
      name:"mushrooms",
      display:true
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"flour dough",
      display:false
    }
  ],

    calories:800,
    price:9.99,
    description:"Our special pizza: we recommend it"
  },
  {
    item:"Chicken Pizza",
    id:"3930409eidsj0ci3cx01qcmeonv4ubgf9743bdq2dj9021cn",
    ingredients:[{
      name:"chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },{
      name:"mozzerella",
      display:true
    },{
      name:"tomato",
      display:true
    },{
      name:"sourdough bread",
      display:true
    }
  ],

    calories:450,
    price:5.99,
    description:"Chef's special pizza with grilled chicken"
  },
  {
    item:"Veggie Pizza",
    id:"aa2442309340020393939838jgjgjg",
    ingredients:[{
      name:"olives",
      display:true
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"onion",
      display:true
    },
    {
      name:"greens",
      display:true
    },
    {
      name:"mozzerella",
      display:true
    }
  ],

    calories:500,
    price:4.99,
    description:"A classic veggie pizza"
  }]
},
{
  catagory:"Pizzas",
  id:"nojdmi0ednemide33",
  food:[{
    item:"Classic Cheese",
    id:"1929292922938456743338920394857",
    ingredients:[{
      name:"cheese",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    },
    {
      name:"sour dough bread",
      display:false
    }
  ],

    calories:1000,
    price:9.53,
    description:"Original cheese pizzas on sour dough bread"
  },
  {
    item:"Veggie Pizza",
    id:"jnnvnvnreivvnvnv33nvnrvnvrrvnj22",
    ingredients:[{
      name:"olives",
      display:false
    },
    {
      name:"tomato",
      display:true
    },
    {
      name:"bell pepper",
      display:false
    },
    {
      name:"onion",
      display:false
    },
    {
      name:"spinach",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:550,
    price:2.41,
    description:"Veggie pizza on sour dough"
  },
  {
    id:"8323984394839483023902encjo940",
    item:"Chicken Pizza",
    ingredients:[{
      name:"grilled chicken",
      display:false
    },
    {
      name:"tomato sauce",
      display:true
    }
  ],
    calories:900,
    price:4.50,
    description:"Grilled chicken on top of a cheese pizza"
  }]
},
{
  catagory:"Drinks",
  id:"nojdmi0ednemid333399339e2882",
  food:[{
    item:"Coca-Cola",
    id:"39ei3290832d2d2d33333928210010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Orange Fanta",
    id:"eecn222ief",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Coca-Cola",
    id:"29ei32908329239043i309e82100103",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Diet Coca-Cola",
    id:"29ei329083292302232121282103010",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Dr Pepper",
    id:"29ei329083129238232310013",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Sirra Mist",
    id:"9029ei32908321219238210013",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  {
    item:"Root Beer",
    id:"w29ei32908329dxewdxw228210011",
    ingredients:[],
    modal:false,
    calories:300,
    price:2.99,
    description:""
  },
  ]
}
],

images:["image2p.png","image3p.png","image4p.png"],
address:{
  zip:85014,
  street:"5505 N 7th St",
  city:"Phoenix",
  state:"AZ"

},
 sides:[{
   name:"fries",
   type:null,
   price:2.99
 },
 {
   name:"onion rings",
   type:null,
   price:2.99
 },
 {
   name:"secret sauce",
   type:null,
   price:.4
 },
 {
   name:"bread",
   type:null,
   price:.99
 }
]
}


]

module.exports = FoodTrucks;
