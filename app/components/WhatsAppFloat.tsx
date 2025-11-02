export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5571986482241?text=Preciso%20de%20um%20advogado%20agora"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 rounded-full shadow-2xl flex items-center gap-2 transition-all transform hover:scale-110"
      >
        <span>📱</span>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
