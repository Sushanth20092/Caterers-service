"use client"

import { useState } from "react"

interface MenuCategory {
  name: string
  emoji: string
  items: string[]
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState("veg-starters")

  const menuCategories: Record<string, MenuCategory> = {
    "veg-starters": {
      name: "Veg Starters",
      emoji: "🥦",
      items: [
        "French Fries",
        "Gobi Manchurian",
        "Gobi Chilly",
        "Gobi 65",
        "Baby Corn Manchurian",
        "Baby Corn Chilly",
        "Baby Corn 65",
        "Baby Corn Pepper Dry",
        "Mushroom Manchurian",
        "Mushroom Chilly",
        "Mushroom 65",
        "Mushroom Pepper Dry",
        "Paneer Manchurian",
        "Paneer Chilly",
      ],
    },
    "non-veg-starters": {
      name: "Non-Veg Starters",
      emoji: "🍗",
      items: [
        "Grilled Chicken",
        "Chicken Kabab",
        "Hariyali Chicken Kabab",
        "Broasted Chicken",
        "Tandoori Chicken Tikka",
        "Dragon Chicken",
        "Chicken Lollipop",
        "Egg Fry",
        "Egg Chilly",
        "Chicken Manchurian",
        "Chicken 65",
        "Chicken Chilly",
        "Pepper Chicken",
        "Burnt Chicken Garlic",
        "Chicken Ginger",
        "Pepper Jeera Chicken",
        "Mutton Pepper Dry",
        "Mutton Pepper Fry",
        "Prawns Pepper Fry",
        "Prawns Masala",
      ],
    },
    rolls: {
      name: "Rolls",
      emoji: "🌯",
      items: ["Veg Roll", "Mushroom Roll", "Paneer Roll", "Egg Roll", "Chicken Roll"],
    },
    "south-indian": {
      name: "South Indian",
      emoji: "🌶️",
      items: [
        "Chicken Sukka",
        "Chicken Pulimunchi",
        "Kundapura Chicken",
        "Chicken Ghee Roast",
        "Chicken Green Masala",
        "Chettinad Chicken",
        "Korri Gasi",
        "Nati Kori Sukka",
        "Nati Kori Kadai",
        "Dried Fish Chutney",
        "Balyar Sukka",
      ],
    },
    "north-indian": {
      name: "North Indian",
      emoji: "🍲",
      items: [
        "Chicken Masala",
        "Kadai Chicken",
        "Chicken Handi",
        "Butter Chicken",
        "Chicken Hyderabadi",
        "Chicken Tikka Masala",
        "Chicken Mughlai",
        "Chicken Kolapuri",
        "Chicken Kali Mirchi",
      ],
    },
    biryani: {
      name: "Biryani",
      emoji: "🍚",
      items: [
        "Vegetable Biryani",
        "Paneer Biryani",
        "Egg Biryani",
        "Chicken Biryani",
        "Hyderabadi Chicken Biryani",
        "Chicken Tikka Biryani",
        "Mutton Biryani",
        "Dham Biryani",
        "Prawns Biryani",
        "Fish Biryani",
      ],
    },
    rice: {
      name: "Rice",
      emoji: "🍛",
      items: [
        "Plain Rice",
        "Ganji",
        "Paneer Pulao",
        "Steamed Basmati Rice",
        "Ghee Rice",
        "Vegetable Pulao",
        "Curd Rice",
        "Egg Pulao/Rice",
        "Keema Pulao",
      ],
    },
    mutton: {
      name: "Mutton",
      emoji: "🍖",
      items: ["Mutton Sukka", "Mutton Masala", "Mutton Ghee Roast", "Mutton Green Masala", "Mutton Chilly"],
    },
    seafood: {
      name: "Sea Food",
      emoji: "🦐",
      items: [
        "Fish Tawa Fry",
        "Fish Rava Fry",
        "Fish Pulimunchi",
        "Fish Masala",
        "Fish Gasi",
        "Fish Masala Fry",
        "Fish Curry",
        "Prawns Curry",
        "Prawns Pepper Dry/Fry",
        "Prawns 65",
        "Prawns Butter Garlic",
        "Prawns Manchurian Dry",
        "Chilly Squid",
        "Manchurian Squid",
        "Pepper Squid Dry/Fry",
        "Squid Butter Garlic",
      ],
    },
    breakfast: {
      name: "Classic Indian Breakfast",
      emoji: "🥐",
      items: [
        "Apam",
        "Idli",
        "Neer Dosa",
        "Idiyappam (Rice Shevige)",
        "Chapathi",
        "Poori",
        "Parotta",
        "Ceylon Parotta",
        "Naan",
        "Rumali Roti",
      ],
    },
    beverages: {
      name: "Beverages",
      emoji: "🥤",
      items: [
        "Fresh Lime Water",
        "Butter Milk",
        "Badam",
        "Fresh Fruit Juice",
        "Milk Shake",
        "Soft Drinks (Coke, Sprite, Orange, Jeera)",
      ],
    },
    desserts: {
      name: "Desserts",
      emoji: "🍰",
      items: [
        "Single Scoop Ice-Cream",
        "Fruits Salad",
        "Fruits Salad with Ice-Cream",
        "Dry Fruit Salad",
        "Shevige Payasam",
        "Rice Kheer",
        "Rava Payasam",
        "Channa Dal Payasam",
        "Moong Dal Payasam",
        "Corn Payasam",
        "Chiroti Payasam",
        "Pineapple Kheer",
        "Chikoo Kheer",
        "Dates Kheer",
        "Carrot Halwa",
        "Kushmanda Halwa",
        "Pineapple Rava Kesari",
        "Kayi Holige",
        "Obbattu Holige",
        "Rava Holige",
      ],
    },
  }

  const tabs = Object.keys(menuCategories)

  return (
    <section id="menu" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance text-foreground">
            Full Menu Options
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our extensive collection of authentic and delicious dishes
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 whitespace-nowrap ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {menuCategories[tab].emoji} {menuCategories[tab].name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuCategories[activeTab].items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                <span className="text-primary text-lg flex-shrink-0">•</span>
                <span className="text-foreground text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
