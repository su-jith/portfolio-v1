import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { cn } from '../lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data. Later you can use EmailJS or a backend.
    console.log("Form Submitted:", formData);
    alert("Message sent! (Mock)");
  };

  return (
    <section id="contact" className="py-24 bg-main-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        

        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl font-bold text-main-text mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-main-text transition-colors duration-300">
              Have a project in mind or just want to say hi? Feel free to reach out
              through any of the platforms below.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              {/* Contact Cards */}
              <ContactMethod
                icon={<Mail className="text-blue-500" />}
                title="Email"
                value="sujiths.bca2020@gmail.com"
                href="mailto:sujiths.bca2020@gmail.com"
              />
              <ContactMethod
                icon={<Phone className="text-green-600" />}
                title="Phone"
                value="+91 7907233457"
                href="tel:+91 7907233457"
              />
              <ContactMethod
                icon={<Github className="text-slate-900 dark:text-white hover:text-black dark:hover:text-white" />}
                title="GitHub"
                value="https://github.com/su-jith"
                href="https://github.com/su-jith"
              />
              <ContactMethod
                icon={<Linkedin className="text-blue-500" />}
                title="LinkedIn"
                value="linkedin.com/in/yournamehttps://www.linkedin.com/in/connect-sujith-s/"
                href="https://www.linkedin.com/in/connect-sujith-s/"
              />
            </div>
          </div>

          <div className="relative group">
            {/* Background Glow - made subtle */}
            <div className="absolute inset-0 -z-10 bg-blue-600/5 blur-3xl rounded-3xl group-hover:bg-blue-600/10 transition-colors" />

            <form onSubmit={handleSubmit} className="bg-main-bg p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    {/* Name Input */}
    <div className="space-y-2">
      <label className="text-sm font-medium text-main-text opacity-80">Name</label>
      <input
        type="text"
        required
        className="w-full p-3 rounded-xl bg-main-bg border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-main-text"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
    </div>

    {/* Email Input */}
    <div className="space-y-2">
      <label className="text-sm font-medium text-main-text opacity-80">Email</label>
      <input
        type="email"
        required
        className="w-full p-3 rounded-xl bg-main-bg border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-main-text"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </div>
  </div>

  {/* Subject Input */}
  <div className="space-y-2">
    <label className="text-sm font-medium text-main-text opacity-80">Subject</label>
    <input
      type="text"
      required
      className="w-full p-3 rounded-xl bg-main-bg border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-main-text"
      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
    />
  </div>

  {/* Message TextArea */}
  <div className="space-y-2">
    <label className="text-sm font-medium text-main-text opacity-80">Message</label>
    <textarea
      rows="4"
      required
      className="w-full p-3 rounded-xl bg-main-bg border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-main-text"
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/20"
  >
    Send Message <Send size={18} />
  </button>
</form>
          </div>

        </div>
      </div>
    </section>
  );
};

// Small helper component for contact links
const ContactMethod = ({ icon, title, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    // REMOVED dark:bg-slate-900 to let bg-main-bg or your global theme take over
    className="flex flex-col p-4 bg-main-bg rounded-2xl border border-slate-200 dark:border-slate-00 hover:border-blue-500/50 transition-all duration-300 group shadow-sm hover:shadow-md"
  >
    {/* Icon Container - using a transparent background for dark mode to adapt better */}
    <div className="mb-2 p-2 w-fit rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-600/10 transition-colors">
      {icon}
    </div>

    {/* Title: Small and subtle */}
    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
      {title}
    </span>

    {/* Value: The main link text */}
    <span className="text-sm font-medium text-main-text truncate">
      {value}
    </span>
  </a>
);
export default Contact;