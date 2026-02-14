"use client";

import { useEffect, useRef } from "react";

/**
 * Mapplic map embed. Mapplic renders inside a Shadow DOM, so all CSS
 * overrides must be injected into the shadowRoot, not document.head.
 */

const OVERRIDE_CSS = `
  /* === Z-INDEX FIX: Keep map below navbar === */
  /* Only constrain the host element; let internal z-indexes work */
  :host {
    z-index: auto !important;
  }

  /* Sidebar: compact fit */
  .mapplic-sidebar {
    z-index: 1 !important;
    position: absolute !important;
    height: auto !important;
    max-height: 100% !important;
    bottom: auto !important;
    width: auto !important;
    min-width: 200px;
    max-width: 260px;
  }

  /* === SIDEBAR TOGGLE BUTTON === */

  /* Mobile/tablet (< 1024px): hide sidebar and toggle button */
  @media (max-width: 1023px) {
    .mapplic-sidebar {
      display: none !important;
    }
    .mapplic-controls .mapplic-sidebar-close {
      pointer-events: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
    }
  }

  /* Desktop (1024px+): ensure button is visible and clickable */
  @media (min-width: 1024px) {
    .mapplic-controls .mapplic-sidebar-close {
      pointer-events: all !important;
      opacity: 1 !important;
      visibility: visible !important;
      z-index: 110 !important;
    }
  }

  /* Sidebar background */
  .mapplic-sidebar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  /* Search bar styling */
  .mapplic-search-bar {
    padding: 16px 12px;
    background: transparent;
  }

  .mapplic-search {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(30, 59, 50, 0.12);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: all 0.25s ease;
  }

  .mapplic-search:hover {
    border-color: rgba(30, 59, 50, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .mapplic-search > input {
    color: #1e3b32;
    font-weight: 500;
  }

  .mapplic-search > input::placeholder {
    color: rgba(30, 59, 50, 0.4);
  }

  .mapplic-search > input:focus {
    outline: 2px solid #1e3b32;
    outline-offset: -2px;
  }

  /* Directory items - cleaner design */
  .mapplic-dir {
    padding: 0 12px;
    margin: 8px 0;
  }

  .mapplic-dir-item {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 10px 12px;
    margin-bottom: 4px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .mapplic-dir-item:hover {
    background: rgba(30, 59, 50, 0.06);
    border-color: rgba(30, 59, 50, 0.12);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transform: translateX(2px);
  }

  .mapplic-dir-item.mapplic-active {
    background: rgba(30, 59, 50, 0.1);
    border-color: #1e3b32;
    box-shadow: 0 4px 12px rgba(30, 59, 50, 0.12);
  }

  .mapplic-dir-item h4 {
    color: #1e3b32;
    font-weight: 600;
    font-size: 14px;
  }

  .mapplic-dir-item h5 {
    color: rgba(30, 59, 50, 0.6);
    font-size: 12px;
  }

  /* Toggle button - no custom styling, use Mapplic defaults */

  /* Group titles */
  .mapplic-dir-group-title {
    background: rgba(30, 59, 50, 0.04);
    color: #1e3b32;
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 8px 12px;
    border-radius: 8px;
    margin-bottom: 8px;
  }

  /* Scrollbar styling for sidebar */
  .mapplic-dir::-webkit-scrollbar {
    width: 6px;
  }

  .mapplic-dir::-webkit-scrollbar-track {
    background: rgba(30, 59, 50, 0.04);
    border-radius: 3px;
  }

  .mapplic-dir::-webkit-scrollbar-thumb {
    background: rgba(30, 59, 50, 0.2);
    border-radius: 3px;
    transition: background 0.2s;
  }

  .mapplic-dir::-webkit-scrollbar-thumb:hover {
    background: rgba(30, 59, 50, 0.35);
  }

  /* Thumbnail improvements */
  .mapplic-thumbnail {
    border-radius: 8px;
    background: rgba(30, 59, 50, 0.06);
    transition: all 0.2s ease;
  }

  .mapplic-dir-item:hover .mapplic-thumbnail {
    background: rgba(30, 59, 50, 0.12);
    transform: scale(1.05);
  }

  /* Filters styling */
  .mapplic-search-filter.opened {
    background: rgba(255, 255, 255, 0.98);
    border-color: rgba(30, 59, 50, 0.1);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  /* Portrait mode adjustments */
  .mapplic-element.mapplic-portrait .mapplic-sidebar {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);
    border-top: 1px solid rgba(30, 59, 50, 0.08);
    border-right: none;
  }
`;

export default function MapplicMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;
    initialized.current = true;

    const alreadyLoaded = document.querySelector('script[src*="mapplic.js"]');

    const mount = () => {
      if (
        containerRef.current &&
        !containerRef.current.querySelector("mapplic-map")
      ) {
        const map = document.createElement("mapplic-map");
        map.setAttribute("id", "mapa-lotes");
        map.setAttribute(
          "data-json",
          "/mapplic/standalone-hb-cr/data-hb-cr.json",
        );
        map.setAttribute("data-path", "/mapplic/standalone-hb-cr/");
        map.style.display = "block";
        map.style.width = "100%";
        containerRef.current.appendChild(map);

        // Inject overrides into Shadow DOM once it's ready
        const injectStyles = () => {
          const shadow = map.shadowRoot;
          if (!shadow) return false;
          if (shadow.querySelector("#mapplic-overrides")) return true;

          const style = document.createElement("style");
          style.id = "mapplic-overrides";
          style.textContent = OVERRIDE_CSS;
          shadow.appendChild(style);
          return true;
        };

        const observer = new MutationObserver(() => {
          injectStyles();
        });
        observer.observe(map, { childList: true, subtree: true });

        // Also observe shadowRoot once available
        const waitForShadow = setInterval(() => {
          if (map.shadowRoot) {
            clearInterval(waitForShadow);
            injectStyles();
            observer.observe(map.shadowRoot, {
              childList: true,
              subtree: true,
            });
          }
        }, 50);

        setTimeout(() => {
          clearInterval(waitForShadow);
          injectStyles();
          window.dispatchEvent(new Event("resize"));
          observer.disconnect();
        }, 1000);
      }
    };

    if (alreadyLoaded) {
      mount();
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/mapplic/standalone-hb-cr/mapplic.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.type = "module";
    script.src = "/mapplic/standalone-hb-cr/mapplic.js";
    script.onload = () => setTimeout(mount, 50);
    document.head.appendChild(script);
  }, []);

  return (
    <section className="w-full py-8 md:py-12">
      <div
        ref={containerRef}
        className="relative w-full bg-white rounded-xl overflow-hidden"
        style={{ zIndex: 1, maxHeight: "130vh" }}
      />
    </section>
  );
}
