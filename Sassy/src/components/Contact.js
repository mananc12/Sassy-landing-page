import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container bg-blue-500 mx-auto text-center pt-10">
        <h2 className="text-5xl text-white font-bold mb-10">Contact Us</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-white text-lg font-semibold mb-2" htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" className="w-full border p-2 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-white text-lg font-semibold mb-2" htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" className="w-full border p-2 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-white text-lg font-semibold mb-2" htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border p-2 rounded-md"></textarea>
          </div>
          <button type="submit" className="bg-white mb-10 text-blue-500 hover:text-white hover:border-solid hover:border-2 hover:border-white font-bold hover:bg-blue-500 py-2 px-4 rounded-md">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact