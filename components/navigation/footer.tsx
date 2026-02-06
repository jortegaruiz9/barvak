"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, Award } from "lucide-react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import {
  footerNavLinks,
  regulations,
  contactInfo,
  wazeInfo,
  awardsInfo,
  socialLinks,
  footerLogo,
  copyrightText,
} from "@/lib/data/footer";

const LocationIcon = MapPin;
const PhoneIcon = Phone;
const MailIcon = Mail;
const AwardIcon = Award;

export default function Footer() {
  const pathname = usePathname();

  const instagramLink = useMemo(
    () => socialLinks.find((s) => s.label === "Instagram")?.href || "#",
    [],
  );
  const facebookLink = useMemo(
    () => socialLinks.find((s) => s.label === "Facebook")?.href || "#",
    [],
  );

  return (
    <footer className="bg-custom-primary py-12 px-4 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center mb-8 border-b border-white/20 pb-8 lg:border-none lg:pb-0 lg:flex-col">
          <Image
            src={footerLogo.src}
            alt={footerLogo.alt?.trim() ? footerLogo.alt : "Site logo"}
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center mb-12 lg:justify-between">
          <ul className="hidden lg:flex items-center space-x-3">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={instagramLink}
                aria-label="Visit our Instagram page"
              >
                <Icon icon="ion:logo-instagram" className="text-xl" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={facebookLink}
                aria-label="Visit our Facebook page"
              >
                <Icon icon="ion:logo-facebook" className="text-xl" />
              </a>
            </li>
            <li>Follow us</li>
          </ul>
          <nav className="flex flex-col items-center space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0 lg:text-sm">
            {footerNavLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                aria-label={link.label}
                className={cn(
                  "transition-opacity hover:opacity-60",
                  pathname === link.path ? "opacity-60" : "opacity-100",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Main Content Sections */}
        <div className="flex flex-col gap-y-12 mb-12 text-white/60 lg:text-white lg:flex-row-reverse lg:justify-between lg:items-end">
          {/* Our Regulations Section */}
          <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
            <h3 className="text-lg font-medium mb-4">Our Regulations</h3>
            <ul className="flex flex-col items-center lg:items-end space-y-2">
              {regulations.map((regulation) => (
                <li key={regulation.download} className="text-balance">
                  <Link
                    href={regulation.href}
                    download={regulation.download}
                    aria-label={`Download ${regulation.label} PDF`}
                  >
                    {regulation.label} - Download PDF
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
            <Link href="/contact" className="text-lg font-medium mb-4 hover:opacity-60 transition-opacity">Contact Us</Link>
            <ul className="flex flex-col items-center lg:items-end space-y-3">
              <li className="flex items-center space-x-2 text-left">
                <LocationIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>{contactInfo.location.text}</span>
              </li>
              <li className="text-left">
                <a
                  href={contactInfo.phone.href}
                  className="flex items-center space-x-2"
                  aria-label={`Call ${contactInfo.phone.text}`}
                >
                  <PhoneIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{contactInfo.phone.text}</span>
                </a>
              </li>
              <li className="text-left">
                <a
                  href={contactInfo.email.href}
                  className="flex items-center space-x-2"
                  aria-label={`Email ${contactInfo.email.text}`}
                >
                  <MailIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{contactInfo.email.text}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Waze Section */}
          <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
            <h3 className=" text-lg font-medium mb-4">Waze</h3>
            <ul className="flex flex-col items-center lg:items-end space-y-2">
              <li className="text-left">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={wazeInfo.link.href}
                  aria-label={wazeInfo.link.label}
                >
                  {wazeInfo.link.label}
                </a>
              </li>
              <li className="text-left">{wazeInfo.poBox}</li>
            </ul>
          </div>

          {/* Awards Section */}
          <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
            <h3 className=" text-lg font-medium mb-4">Awards</h3>
            <div className="flex items-center space-x-2 text-left">
              <AwardIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>{awardsInfo.text}</span>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-6 mb-8 lg:hidden">
          {socialLinks.map((social) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              key={social.label}
              href={social.href}
              aria-label={`Visit our ${social.label} page`}
            >
              <Icon
                icon={social.icon}
                className="text-2xl"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="text-center text-md font-medium lg:text-end">
          <p className="text-balance">{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
