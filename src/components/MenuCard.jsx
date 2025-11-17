import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";
import { Heart } from "lucide-react";

const MenuCard = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const isFav = favorites.includes(item.id);

  return (
    <div className="p-4 border rounded-xl shadow-sm bg-white dark:bg-slate-800">
      {/* Product Image */}
      <img
        src={item.img}
        alt={item.name}
        className="rounded-lg mb-3 h-40 w-full object-cover"
      />

      {/* Title + Price */}
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-amber-600 font-medium mb-3">{item.price}</p>

      {/* Favorite Button */}
      <button
        onClick={() => dispatch(toggleFavorite(item.id))}
        className="p-2 rounded-full border hover:bg-amber-100 dark:hover:bg-slate-700 transition"
      >
        {isFav ? (
          <Heart className="w-5 h-5 fill-amber-500 stroke-amber-700" />
        ) : (
          <Heart className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default MenuCard;
