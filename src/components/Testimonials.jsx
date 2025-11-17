const Testimonials = () => {
  const testimonials = [
    {
      name: "Rima Akter",
      text: "Best coffee in Chittagong! The atmosphere at Coffee Ghor is so cozy and welcoming.",
    },
    {
      name: "Sajid Rahman",
      text: "Great service and amazing flavors. This place has become my daily stop!",
    },
    {
      name: "Nusrat Jahan",
      text: "Perfect place to relax, study, or hang out with friends. Highly recommended!",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto text-center" id="testimonials">
      <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="p-5 border rounded-xl shadow-sm bg-white dark:bg-slate-800"
          >
            <p className="italic text-slate-600 dark:text-slate-300 mb-3">
              "{t.text}"
            </p>
            <h4 className="font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
