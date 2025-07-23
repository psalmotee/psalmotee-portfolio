import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_u2xiyzc",
        "template_83zyizp",
        formData,
        "_ws1WNCgc08bRg5vC" // Found in EmailJS Account → Integration → Public Key
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "samsonmoradeyo@gmail.com",
      href: "mailto:samsonmoradeyo@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+2349023148485",
      href: "tel:+2349023148485",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nigeria",
      // href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-franklin mb-4">
            Contact
          </h2>
          <p className="text-xl text-gray-400 font-inter">Drop me a message</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 justify-center items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-franklin text-white">
                Get in touch
              </h3>
              <p className="text-gray-300 leading-relaxed font-inter">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about web development. Feel free
                to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-neutral/50 hover:bg-neutral/70 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-inter">
                      {item.label}
                    </p>
                    <p className="text-white font-inter">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-neutral/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle
                    size={64}
                    className="text-green-400 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-primary mt-4 px-6 py-2 rounded-full"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-gray-300 font-inter">
                          Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input input-bordered w-full bg-base-100/50 text-white placeholder-gray-400 border-gray-600 focus:border-primary ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <span className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-gray-300 font-inter">
                          Email
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input input-bordered w-full bg-base-100/50 text-white placeholder-gray-400 border-gray-600 focus:border-primary ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-300 font-inter">
                        Subject
                      </span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`input input-bordered w-full bg-base-100/50 text-white placeholder-gray-400 border-gray-600 focus:border-primary ${
                        errors.subject ? "border-red-500" : ""
                      }`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-300 font-inter">
                        Message
                      </span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`textarea textarea-bordered w-full bg-base-100/50 text-white placeholder-gray-400 border-gray-600 focus:border-primary resize-none ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                    {errors.message && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary text-white py-3 rounded-full font-inter hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="loading loading-infinity loading-md"></span>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
