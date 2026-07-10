import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '5518981268295';
const easeOut = [0.22, 1, 0.36, 1] as const;

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const buildWhatsAppUrl = () => {
    const text = [
      'Olá! Vim pelo site da The Politti\'s 😊',
      '',
      `Nome: ${name}`,
      email ? `E-mail: ${email}` : null,
      phone ? `Telefone: ${phone}` : null,
      '',
      `Mensagem: ${message}`,
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setStatus('sending');

    try {
      if (formspreeId) {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            message: message.trim(),
            _subject: `Contato pelo site — ${name.trim()}`,
          }),
        });

        if (!response.ok) throw new Error('Falha no envio');
        setStatus('success');
        resetForm();
        return;
      }

      window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
      setStatus('success');
      resetForm();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <h2 className="text-4xl font-serif text-slate-800 mb-4">Fale conosco</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Encomendas, orçamentos ou dúvidas — envie sua mensagem e retornamos o mais rápido possível.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-rose-100 p-6 md:p-10 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.08, ease: easeOut }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-sm font-medium text-slate-700 mb-1.5 block">Nome *</span>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition"
                placeholder="Seu nome"
                autoComplete="name"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700 mb-1.5 block">Telefone</span>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition"
                placeholder="(18) 99999-9999"
                autoComplete="tel"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-medium text-slate-700 mb-1.5 block">E-mail</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition"
              placeholder="seu@email.com"
              autoComplete="email"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700 mb-1.5 block">Mensagem *</span>
            <textarea
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition resize-y min-h-[120px]"
              placeholder="Conte o que você precisa: tipo de doce, data, quantidade..."
            />
          </label>

          {status === 'success' && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
              {formspreeId
                ? 'Mensagem enviada com sucesso! Em breve entraremos em contato.'
                : 'Abrimos o WhatsApp com sua mensagem. É só enviar!'}
            </p>
          )}

          {status === 'error' && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
            <p className="text-xs text-slate-500">
              {formspreeId
                ? 'Seus dados serão enviados com segurança.'
                : 'Ao enviar, abrimos o WhatsApp com sua mensagem pronta.'}
            </p>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-pink-500 hover:bg-pink-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-full shadow-md transition-colors duration-200"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
