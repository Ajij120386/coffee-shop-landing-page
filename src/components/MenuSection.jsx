import MenuCard from "./MenuCard";

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    price: "$3.50",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "$4.50",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Latte",
    price: "$4.75",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Iced Coffee",
    price: "$3.75",
    img: "https://plus.unsplash.com/premium_photo-1690212143534-aff93264082b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SWNlZCUyMENvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 5,
    name: "Mocha",
    price: "$4.25",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Americano",
    price: "$3.25",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QW1lcmljYW5vfGVufDB8fDB8fHww"
  },
  {
    id: 7,
    name: "Cold Brew",
    price: "$4.00",
    img: "https://images.unsplash.com/photo-1549652127-2e5e59e86a7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29sZCUyMEJyZXd8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 8,
    name: "Frappuccino",
    price: "$5.00",
    img: "https://plus.unsplash.com/premium_photo-1663853490794-abce4ea7e3db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnJhcHB1Y2Npbm98ZW58MHx8MHx8fDA%3D"
  }
];

const MenuSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-10">Our Menu</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

// 🚨 THIS IS THE LINE THAT FIXES YOUR ERROR
export default MenuSection;
