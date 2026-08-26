import { Layout } from "@/components/Layout";
import { Mail, Phone, Camera } from "lucide-react";
import aibakImage from "@/assets/aibak.jpeg";

const Contact = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24 min-h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-12">
            <div>
              <h1 className="text-display mb-6 animate-fade-in-up">
                Let's work<br />together.
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Interested in collaborating? Let's talk about your next project.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <a
                href="mailto:aibakshahzad@gmail.com"
                className="flex items-center gap-4 text-lg hover-highlight group"
              >
                <Mail size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span>aibakshahzad@gmail.com</span>
              </a>

              <a
                href="https://instagram.com/aibakshahzad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover-highlight group"
              >
                <Camera size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span>@aibakshahzad</span>
              </a>

              <div className="flex items-center gap-4 text-lg text-muted-foreground">
                <Phone size={20} />
                <span>+92 305 48716104</span>
              </div>
            </div>

            {/* Location */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-label mb-2">Based in</p>
                <p className="text-lg">Lahore, Pakistan</p>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <div className="relative w-full max-w-md aspect-[4/5]">
              <svg className="absolute w-0 h-0" aria-hidden="true">
                <defs>
                  <clipPath id="contact-splash-clip" clipPathUnits="objectBoundingBox">
                    <path d="M0.5 0.03 C0.62 0 0.78 0.06 0.84 0.2 C0.88 0.32 0.97 0.38 0.95 0.52 C0.93 0.66 0.99 0.78 0.88 0.86 C0.78 0.94 0.64 0.99 0.5 0.97 C0.36 0.95 0.22 0.9 0.14 0.78 C0.06 0.66 0.02 0.5 0.08 0.36 C0.14 0.22 0.28 0.1 0.42 0.06 C0.46 0.04 0.48 0.03 0.5 0.03 Z" />
                    <ellipse cx="0.11" cy="0.2" rx="0.08" ry="0.055" />
                    <ellipse cx="0.91" cy="0.14" rx="0.065" ry="0.045" />
                    <ellipse cx="0.06" cy="0.55" rx="0.045" ry="0.065" />
                    <ellipse cx="0.94" cy="0.72" rx="0.07" ry="0.05" />
                    <ellipse cx="0.18" cy="0.88" rx="0.05" ry="0.04" />
                    <ellipse cx="0.78" cy="0.92" rx="0.055" ry="0.038" />
                  </clipPath>
                </defs>
              </svg>

              {/* Soft blurred splash glow */}
              <div
                className="absolute inset-0 scale-110 blur-2xl opacity-80"
                style={{ clipPath: "url(#contact-splash-clip)" }}
              >
                <img
                  src={aibakImage}
                  alt=""
                  aria-hidden
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main splash image */}
              <div
                className="relative z-10 w-full h-full"
                style={{ clipPath: "url(#contact-splash-clip)" }}
              >
                <img
                  src={aibakImage}
                  alt="Aibak Shahzad"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;