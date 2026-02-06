"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { whatsapp } from "@/lib/data/contact";

export default function WhatsAppButton() {
  const [footerVisible, setFooterVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const body = document.body;
    const observer = new MutationObserver(() => {
      setMenuOpen(body.style.overflow === "hidden");
    });
    observer.observe(body, { attributes: true, attributeFilter: ["style"] });
    return () => observer.disconnect();
  }, []);

  const hidden = footerVisible || menuOpen;
  const href = `https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(whatsapp.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 lg:right-16 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-lime-500/70 shadow-lg hover:bg-lime-500/90 transition-all duration-300 ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      aria-label="Contactar por WhatsApp"
    >
      <Icon icon="mdi:whatsapp" className="text-3xl text-white" />
    </a>
  );
}
