const mongoose = require("mongoose");

let foodDataSchema = new mongoose.Schema({
  Category: {
    type: "String",
  },
  Description: {
    type: "String",
  },
  Data: {
    Carbohydrate: {
      type: "String",
    },
    Fiber: {
      type: "String",
    },
    Kilocalories: {
      type: "String",
    },
    Protein: {
      type: "String",
    },
    "Sugar Total": {
      type: "String",
    },
    Fat: {
      "Monosaturated Fat": {
        type: "String",
      },
      "Polysaturated Fat": {
        type: "String",
      },
      "Saturated Fat": {
        type: "String",
      },
      "Total Lipid": {
        type: "String",
      },
    },
    "Household Weights": {
      "1st Household Weight": {
        type: "String",
      },
      "1st Household Weight Description": {
        type: "String",
      },
      "2nd Household Weight": {
        type: "String",
      },
      "2nd Household Weight Description": {
        type: "String",
      },
    },
  },
});

let userSchema = mongoose.Schema({
  UserID: {
    type: String,
    unique: true,
    dropDups: true,
  },
  Password: {
    type: String,
  },
  Name: {
    type: String,
  },
  Age: {
    type: Number,
  },
  Sex: {
    type: String,
  },
  Location: {
    type: String,
  },
  Height: {
    type: mongoose.Schema.Types.Decimal128,
  },
  Weight: {
    type: mongoose.Schema.Types.Decimal128,
  },
  GoalWeight: {
    type: mongoose.Schema.Types.Decimal128,
  },
  DailyCalorieGoal: {
    type: Number,
  },
});

let userFoodLogSchema = mongoose.Schema({
  Data: {
    UserID: {
      type: String,
    },
    FoodData: [
      {
        Date: {
          type: String,
        },
        TotalCalories: {
          type: Number,
        },
        TotalCarbs: {
          type: Number,
        },
        TotalFats: {
          type: Number,
        },
        TotalProtein: {
          type: Number,
        },
        WaterConsumption: {
          type: Number,
        },
        Food: {
          Breakfast: {
            CalorieSum: {
              type: Number,
            },
            CarbSum: {
              type: Number,
            },
            FatSum: {
              type: Number,
            },
            ProteinSum: {
              type: Number,
            },
            Details: [
              {
                FoodItem: {
                  type: String,
                },
                Calories: {
                  type: Number,
                },
                Carbs: {
                  type: Number,
                },
                Fats: {
                  type: Number,
                },
                Protein: {
                  type: Number,
                },
              },
            ],
          },
          Lunch: {
            CalorieSum: {
              type: Number,
            },
            CarbSum: {
              type: Number,
            },
            FatSum: {
              type: Number,
            },
            ProteinSum: {
              type: Number,
            },
            Details: [
              {
                FoodItem: {
                  type: String,
                },
                Calories: {
                  type: Number,
                },
                Carbs: {
                  type: Number,
                },
                Fats: {
                  type: Number,
                },
                Protein: {
                  type: Number,
                },
              },
            ],
          },
          Dinner: {
            CalorieSum: {
              type: Number,
            },
            CarbSum: {
              type: Number,
            },
            FatSum: {
              type: Number,
            },
            ProteinSum: {
              type: Number,
            },
            Details: [
              {
                FoodItem: {
                  type: String,
                },
                Calories: {
                  type: Number,
                },
                Carbs: {
                  type: Number,
                },
                Fats: {
                  type: Number,
                },
                Protein: {
                  type: Number,
                },
              },
            ],
          },
          Snacks: {
            CalorieSum: {
              type: Number,
            },
            CarbSum: {
              type: Number,
            },
            FatSum: {
              type: Number,
            },
            ProteinSum: {
              type: Number,
            },
            Details: [
              {
                FoodItem: {
                  type: String,
                },
                Calories: {
                  type: Number,
                },
                Carbs: {
                  type: Number,
                },
                Fats: {
                  type: Number,
                },
                Protein: {
                  type: Number,
                },
              },
            ],
          },
        },
      },
    ],
  },
});

let userWeightLog = mongoose.Schema({
  userID: {
    type: String,
  },
  WeightLog: [
    {
      Date: {
        type: String,
      },
      weight: {
        type: mongoose.Schema.Types.Decimal128,
      },
    },
  ],
});

let userRecipes = mongoose.Schema({
  userID: {
    type: String,
  },
  recipeList: [
    {
      recipeName: {
        type: String,
      },
      Calories: {
        type: Number,
      },
      ServingSize: {
        type: Number,
      },
      Carbs: {
        type: Number,
      },
      Fats: {
        type: Number,
      },
      Protein: {
        type: Number,
      },
      Ingredients: [
        {
          FoodItem: {
            type: String,
          },
          IndividualCalories: {
            type: Number,
          },
          Weight: {
            type: mongoose.Schema.Types.Decimal128,
          },
        },
      ],
    },
  ],
});

module.exports = {
  foodDataSchema,
  userSchema,
  userFoodLogSchema,
  userWeightLog,
  userRecipes,
};
