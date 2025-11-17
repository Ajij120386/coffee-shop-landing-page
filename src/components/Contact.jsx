const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <p className="text-slate-600 dark:text-slate-300 mb-4">
        Visit us at our cozy café — we’re excited to serve you!
      </p>

      <div className="mb-6 text-lg space-y-1">
        <p>📍 GEC Circle, Chittagong, Bangladesh</p>
        <p>🕒 Mon–Sun: 9:00 AM – 10:00 PM</p>
      </div>

      <div className="w-full h-64 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 shadow">
        <iframe
          title="map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=91.8190%2C22.3580%2C91.8305%2C22.3665&layer=mapnik&marker=22.3622%2C91.8248"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
