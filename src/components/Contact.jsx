import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowRight, Loader2, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  // Telegram Bot Configuration
  const TELEGRAM_BOT_TOKEN = '8306819779:AAHi4LbRyVsJeplzW1DN4EimCDLxEAzA2ww';
  const TELEGRAM_CHAT_ID = '7671368706'; // TO'G'RI CHAT ID KIRITING!

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToTelegram = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Iltimos, barcha maydonlarni to\'ldiring!' });
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Iltimos, to\'g\'ri email manzil kiriting!' });
      setLoading(false);
      return;
    }

    // Telegram message format
    const telegramMessage = `
🆕 Yangi Portfolio Xabari!

👤 Ism: ${formData.name}
📧 Email: ${formData.email}
📝 Mavzu: ${formData.subject}

💬 Xabar:
${formData.message}

⏰ Vaqt: ${new Date().toLocaleString('uz-UZ')}
    `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
          }),
        }
      );

      const data = await response.json();

      if (data.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beraman.' 
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        // Xatolik haqida batafsil ma'lumot
        console.error('Telegram API Error:', data);
        
        if (data.description && data.description.includes('chat not found')) {
          setStatus({ 
            type: 'error', 
            message: 'Chat ID noto\'g\'ri! Iltimos, to\'g\'ri Chat ID kiriting. Quyida ko\'rsatma bor.' 
          });
        } else {
          throw new Error(data.description || 'Xatolik yuz berdi');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Xabar yuborishda xatolik yuz berdi. Iltimos, Chat ID ni tekshiring yoki qaytadan urinib ko\'ring.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 xl:px-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 rounded-full mb-4">
            <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Get In Touch</span>
          </div>
          <h2 className="font-bold text-4xl xl:text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Have a project in mind? Let's create something amazing together
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          {status.message && (
            <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
              status.type === 'success' 
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            }`}>
              {status.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              )}
              <p className={`text-sm font-medium ${
                status.type === 'success' 
                  ? 'text-green-800 dark:text-green-300' 
                  : 'text-red-800 dark:text-red-300'
              }`}>
                {status.message}
              </p>
            </div>
          )}

          <form onSubmit={sendToTelegram} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Ismingiz <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Hojiakbar Sobirov"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email manzilingiz <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hojiakbar@example.com"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Mavzu <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Loyiha haqida so'rov"
                required
                disabled={loading}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Xabaringiz <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Loyihangiz haqida bizga ayting..."
                required
                disabled={loading}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Yuborilmoqda...
                </>
              ) : (
                <>
                  Xabar Yuborish
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:hojiakbarsobirov30@gmail.com"
            className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 group"
          >
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="font-semibold text-gray-900 dark:text-white text-sm">hojiakbarsobirov@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/hojiakbarsobirov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 group"
          >
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
              <p className="font-semibold text-gray-900 dark:text-white">@hojiakbarsobirov</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 group"
          >
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
              <p className="font-semibold text-gray-900 dark:text-white">Connect with me</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;