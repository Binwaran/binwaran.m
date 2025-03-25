import { Linkedin, Facebook, Twitter } from "lucide-react";
import React from "react";

function Contact() {
    return (
      <section className="bg-stone-100 text-stone-700 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-stone-200 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-stone-600 drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)] mb-8">CONTACT</h2>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full px-4 py-2 drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)] bg-transparent border border-stone-600 rounded-md text-stone-700 placeholder-stone-600"
                />
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full px-4 py-2 drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)] bg-transparent border border-stone-600 rounded-md text-stone-700 placeholder-stone-600"
                />
              </div>
              <input
                type="text"
                placeholder="SUBJECT"
                className="w-full px-4 py-2 drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)] bg-transparent border border-stone-600 rounded-md text-stone-700 placeholder-stone-600"
              />
              <textarea
                placeholder="MESSAGE"
                rows="5"
                className="w-full px-4 py-2 drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)] bg-transparent border border-stone-600 rounded-md text-stone-700 placeholder-stone-600"
              ></textarea>
              <button
                type="submit"
                className="bg-stone-300 drop-shadow-[0_5px_10px_rgba(0,0,0,0.2)] text-stone-600 px-6 py-2 rounded hover:bg-stone-900 hover:text-stone-100 font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
  
          {/* Map and Info */}
          <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8128040742545!2d103.82457327680322!3d1.286366561772802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da197ec9909f87%3A0x3c33d48dab504e8!2sTiong%20Bahru%20MRT%20Station%20(EW17)!5e0!3m2!1sen!2ssg!4v1742897819815!5m2!1sen!2ssg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
            <div className="absolute bottom-6 left-6 bg-stone-200 text-stone-600 p-6 rounded-md shadow-md max-w-xs">
              <div className="flex gap-4 mb-4 text-stone-600">
                <a href="https://www.facebook.com/binwaran" className="hover:text-stone-400">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://x.com/Nofffie_m" className="hover:text-stone-400">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/binwaran" className="hover:text-stone-400">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-left">
                <strong>ADDRESS:</strong> Tiong bahru, Singapore.<br />
                <strong>PHONE:</strong> +65-9641-4591<br />
                <strong>EMAIL:</strong> binwaran.m@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  
  export default Contact;