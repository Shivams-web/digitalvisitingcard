import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  UserPlus, 
  Share2, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube, 
  Send,
  Globe,
  FileText,
  CreditCard,
  Fingerprint,
  Home,
  ShieldCheck,
  Plane,
  Zap,
  Printer,
  Layers,
  Linkedin,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

// --- Constants & Data ---

const BUSINESS_DATA = {
  name: "SHIVAM CYBER CAFE",
  subtitle: "Digital Services & Online Solutions",
  tagline: "Trusted Digital Service Center",
  about: "Shivam Cyber Cafe provides trusted digital and online services with fast support and professional customer experience. We are dedicated to making government and private digital services accessible to everyone efficiently.",
  contact: {
    phone: "+91 8874272650",
    email: "shivamcybercafeofficial@gmail.com",
    address: "Dohani Chauraha, Deoria, Uttar Pradesh",
    whatsapp: "918874272650",
    maps: "https://maps.app.goo.gl/mwMMFVDjsbXhoyay7"
  }
};

const LOGO_URL = "https://storage.googleapis.com/test-media-humanloop/input_image_9479366a_04c5_4a6c_9949_e998708fa8cd.png";

const SOCIAL_LINKS = [
  { icon: MessageSquare, label: "WhatsApp", color: "#25D366", url: `https://wa.me/${BUSINESS_DATA.contact.whatsapp}` },
  { icon: Instagram, label: "Instagram", color: "#E4405F", url: "https://instagram.com/shivamcybercafe_" },
  { icon: Linkedin, label: "LinkedIn", color: "#0A66C2", url: "https://www.linkedin.com/in/shivam-vishwakarma-23b254358" },
  { icon: Send, label: "Telegram", color: "#0088cc", url: "https://t.me/shivamcybercafeofficial" },
  { icon: Facebook, label: "Facebook", color: "#1877F2", url: "#" },
  { icon: Youtube, label: "YouTube", color: "#FF0000", url: "#" },
  { icon: Globe, label: "Website", color: "#4B5563", url: "#" }
];

const SERVICES = [
  { icon: FileText, title: "Online Form Filling", desc: "Expert assistance in filling all types of government & job forms." },
  { icon: CreditCard, title: "PAN Card Services", desc: "New PAN applications, corrections, and reprint services." },
  { icon: Fingerprint, title: "Aadhaar Services", desc: "Aadhaar download, PVC card orders, and status updates." },
  { icon: Home, title: "Khatauni Services", desc: "Land record verification and document printing services." },
  { icon: ShieldCheck, title: "Insurance Services", desc: "Vehicle, health, and life insurance renewal & new policy." },
  { icon: Plane, title: "Passport Services", desc: "New passport application and appointment scheduling." },
  { icon: Zap, title: "Recharge & Bill Payment", desc: "All telecom recharges and utility bill payments made easy." },
  { icon: Printer, title: "Printing & Photocopy", desc: "High-quality color/B&W printing and document copying." },
  { icon: Layers, title: "Lamination", desc: "ID card and document lamination for long-term protection." },
  { icon: Globe, title: "Govt. Online Services", desc: "Access all Digital India services under one roof." }
];

// --- Components ---

const BackgroundParticles = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 300 + 100,
          height: Math.random() * 300 + 100,
          background: i % 2 === 0 ? 'rgba(30, 58, 138, 0.05)' : 'rgba(251, 191, 36, 0.05)',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

interface ActionButtonProps {
  icon: any;
  label: string;
  onClick: () => void;
  colorClass?: string;
  iconColor?: string;
  key?: any;
}

const ActionButton = ({ icon: Icon, label, onClick, colorClass = "premium-gradient text-white", iconColor = "text-inherit" }: ActionButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-3 rounded-2xl ${colorClass} shadow-lg transition-all duration-300 group`}
  >
    <div className={`mb-1 group-hover:scale-110 transition-transform ${iconColor}`}>
      <Icon size={20} />
    </div>
    <span className="text-[10px] font-semibold uppercase tracking-wider">{label}</span>
  </motion.button>
);

interface ServiceCardProps {
  icon: any;
  title: string;
  desc: string;
  key?: any;
}

const ServiceCard = ({ icon: Icon, title, desc }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    className="group p-5 rounded-3xl glass transition-all duration-300 hover:border-brand-gold/30 flex flex-col items-center text-center"
  >
    <div className="w-14 h-14 rounded-2xl premium-gradient flex items-center justify-center mb-4 group-hover:gold-gradient transition-all duration-500 shadow-md">
      <Icon size={28} className="text-white group-hover:text-brand-dark transition-colors" />
    </div>
    <h3 className="font-display font-bold text-brand-dark mb-2 text-lg">{title}</h3>
    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
  </motion.div>
);

export default function App() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: BUSINESS_DATA.name,
          text: BUSINESS_DATA.tagline,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert("Sharing not supported in this browser. Link copied to clipboard!");
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${BUSINESS_DATA.name}
TEL;TYPE=CELL:${BUSINESS_DATA.contact.phone}
EMAIL:${BUSINESS_DATA.contact.email}
ADR;TYPE=WORK:;;${BUSINESS_DATA.contact.address}
URL:https://shivamcyber.example.com
END:VCARD`;
    
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'ShivamCyberCafe.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen relative pb-10">
      <BackgroundParticles />

      {/* Main Container */}
      <main className="max-w-md mx-auto px-4 pt-12 space-y-10">
        
        {/* Header Section */}
        <section className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-block relative"
          >
            <div className="w-28 h-28 rounded-full premium-gradient p-1 shadow-[0_0_20px_rgba(30,58,138,0.3)] animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img 
                  src={LOGO_URL} 
                  alt="Shivam Cyber Cafe Logo" 
                  className="w-full h-full object-cover scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-display font-extrabold text-2xl tracking-tighter text-brand-dark mt-4">
              {BUSINESS_DATA.name}
            </h1>
            <p className="text-brand-blue font-medium text-xs tracking-[0.2em] uppercase mt-1">
              {BUSINESS_DATA.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-brand-blue/10 text-[10px] font-bold text-slate-600"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            {BUSINESS_DATA.tagline}
          </motion.div>
        </section>

        {/* Quick Action Buttons */}
        <section className="grid grid-cols-3 gap-3">
          <ActionButton 
            icon={Phone} 
            label="Call" 
            onClick={() => window.open(`tel:${BUSINESS_DATA.contact.phone}`)} 
          />
          <ActionButton 
            icon={MessageSquare} 
            label="WhatsApp" 
            onClick={() => window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}`)}
          />
          <ActionButton 
            icon={Mail} 
            label="Email" 
            onClick={() => window.open(`mailto:${BUSINESS_DATA.contact.email}`)}
          />
          <ActionButton 
            icon={UserPlus} 
            label="Save" 
            onClick={handleSaveContact}
          />
          <ActionButton 
            icon={Share2} 
            label="Share" 
            onClick={handleShare}
          />
          <ActionButton 
            icon={MapPin} 
            label="Navigate" 
            onClick={() => window.open(BUSINESS_DATA.contact.maps)}
          />
        </section>

        {/* Social Media Section */}
        <section className="glass rounded-3xl p-6 text-center space-y-4">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Stay Connected</h2>
          <div className="flex justify-between items-center px-2">
            {SOCIAL_LINKS.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 transition-colors group relative"
              >
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity blur-sm"
                  style={{ backgroundColor: link.color }}
                />
                <link.icon size={22} style={{ color: link.color }} />
              </motion.a>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="relative group">
          <div className="absolute -inset-1 gold-gradient opacity-20 blur-lg group-hover:opacity-30 transition-opacity rounded-3xl" />
          <div className="relative glass rounded-3xl p-8 border-brand-gold/10">
            <h2 className="font-display font-bold text-xl text-brand-dark mb-4 border-l-4 border-brand-gold pl-4">
              About Us
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed italic">
              "{BUSINESS_DATA.about}"
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-display font-bold text-2xl text-brand-dark">Our Services</h2>
            <div className="h-1 w-20 gold-gradient mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((service, i) => (
              <ServiceCard key={i} icon={service.icon} title={service.title} desc={service.desc} />
            ))}
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="space-y-4">
           <div className="glass-dark rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 gold-gradient opacity-10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:opacity-20 transition-opacity" />
              
              <h2 className="font-display font-bold text-2xl mb-8 flex items-center gap-3">
                <span className="w-1 h-8 gold-gradient rounded-full" />
                Contact Details
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Phone Number</p>
                    <p className="text-lg font-medium">{BUSINESS_DATA.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Email Address</p>
                    <p className="text-lg font-medium break-all">{BUSINESS_DATA.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Location</p>
                    <p className="text-sm leading-relaxed text-white/90">{BUSINESS_DATA.contact.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-4 rounded-2xl gold-gradient text-brand-dark font-bold text-sm shadow-[0_10px_20px_-10px_rgba(251,191,36,0.5)] flex items-center justify-center gap-2"
                  onClick={() => window.open(BUSINESS_DATA.contact.maps)}
                >
                  <MapPin size={16} />
                  Google Maps
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-4 rounded-2xl bg-white/10 text-white font-bold text-sm border border-white/10 flex items-center justify-center gap-2"
                  onClick={() => window.open(`https://wa.me/${BUSINESS_DATA.contact.whatsapp}`)}
                >
                  <MessageSquare size={16} />
                  Direct Chat
                </motion.button>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 space-y-4">
          <div className="w-full h-px gold-gradient opacity-20" />
          <div className="flex items-center justify-center gap-2">
             <div className="h-1 w-1 rounded-full bg-brand-gold" />
             <div className="h-[2px] w-12 gold-gradient rounded-full animate-pulse" />
             <div className="h-1 w-1 rounded-full bg-brand-gold" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
             © 2026 {BUSINESS_DATA.name}
          </p>
          <div className="space-y-1">
            <p className="text-xs text-slate-500">Designed for Shivam Cyber Cafe</p>
            <p className="text-[9px] text-brand-blue/40 font-mono tracking-tighter">PREMIUM DIGITAL IDENTITY</p>
          </div>
        </footer>

      </main>

      {/* Floating Call Button for mobile */}
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="fixed bottom-6 right-6 z-50 sm:hidden"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open(`tel:${BUSINESS_DATA.contact.phone}`)}
          className="w-16 h-16 rounded-full premium-gradient shadow-2xl flex items-center justify-center text-white border-2 border-brand-gold"
        >
          <Phone />
          <div className="absolute inset-0 rounded-full border-4 border-brand-gold animate-ping opacity-20" />
        </motion.button>
      </motion.div>
    </div>
  );
}
