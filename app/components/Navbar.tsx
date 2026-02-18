export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-lg">
          Ganesha Cendekia
        </div>

        <div className="flex gap-6 items-center">
          <a href="#program" className="text-sm text-gray-600">Program</a>
          <a href="#tutor" className="text-sm text-gray-600">Tutor</a>
          <a
            href="https://wa.me/6281221595529"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
