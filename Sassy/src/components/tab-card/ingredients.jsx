export const allIngredientsList1 = [
  {
    icon: "🛖",
    label: "Basic Plan",
    image: <img className="w-60 h-56 " src="/basic.png" />,
    desc: (
      <div className="p-4 text-xl bg-white shadow-md">
        <h3 className="font-bold mb-2">Basic Plan</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="mt-4 text-blue-500 font-bold">$19.99/month</p>
      </div>
    ),
  },
  {
    icon: "🏠",
    label: "Standard Plan",
    image: <img className="w-60 h-56 " src="/standard.png" />,
    desc: (
      <div className="p-4 text-xl bg-white shadow-md">
        <h3 className="font-bold mb-2">Standard Plan</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="mt-4 text-blue-500 font-bold">$39.99/month</p>
      </div>
    ),
  },
  {
    icon: "🏨",
    label: "Premium Plan",
    image: <img className="w-60 h-56 " src="/premium.png" />,
    desc: (
      <div className="p-4 text-xl bg-white shadow-md">
        <h3 className=" font-bold mb-2">Premium Plan</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="mt-4 text-blue-500 font-bold">$59.99/month</p>
      </div>
    ),
  },
];

const [sugar, cold_drink, arhar] = allIngredientsList1;
export const initialTabs1 = [sugar, cold_drink, arhar];

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredientsList1.find((ingredient) => !existing.has(ingredient));
}
