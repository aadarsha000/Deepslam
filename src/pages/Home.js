import React, { useState, useEffect, useRef } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import FeatureCard from "../components/FeatureCard";
import { Shield } from "lucide-react";
import { FaGamepad, FaLaugh } from "react-icons/fa";
import {
  FaRocket,
  FaLightbulb,
  FaChartLine,
  FaGlobe,
  FaStar,
} from "react-icons/fa";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleToggleContent = () => {
    setShowFullContent((prev) => !prev);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const phases = [
    {
      icon: <FaRocket className="text-yellow-400 w-8 h-8" />,
      title: "Phase 1: AI Awakens",
      date: "Q4 2024",
      items: [
        "Launch DeepSlam Token",
        "Mock Big Tech",
        "Build the DeepSlam Army",
        "Viral Meme Warfare",
        "Mascot & Branding Drop",
      ],
    },
    {
      icon: <FaLightbulb className="text-yellow-400 w-8 h-8" />,
      title: "Phase 2: AI Overlords",
      date: "Q1 2025",
      items: [
        "Website 2.0",
        "CEX Listings",
        "AI-Powered Meme Contests",
        "First Community Governance Vote",
      ],
    },
    {
      icon: <FaChartLine className="text-yellow-400 w-8 h-8" />,
      title: "Phase 3: Full Tech Wreck Mode",
      date: "Q2-Q3 2025",
      items: [
        "DeepSlam AI Bot",
        "DeepSlam Mini-Games",
        "Staking & Rewards",
        "Tech Roast Events",
        "Integrate DeepSeek",
      ],
    },
    {
      icon: <FaGlobe className="text-yellow-400 w-8 h-8" />,
      title: "Phase 4: AI Dominance",
      date: "Q4 2025",
      items: [
        "Launch Our Own AI Project",
        "Big CEX Listings",
        "Meme War Evolution",
        "Major Partnerships",
      ],
    },
    {
      icon: <FaStar className="text-yellow-400 w-8 h-8" />,
      title: "Phase 5: The Future of Memes",
      date: "2026 & Beyond",
      items: [
        "DeepSlam AI Ecosystem",
        "Global Domination",
        "The Meme War Continues",
      ],
    },
  ];

  return (
    <>
      <div className="font-oswald">
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
            scrolled ? "bg-black/80 shadow-md" : "bg-transparent"
          }`}
        >
          <div
            className={`container mx-auto  px-6 md:px-12 flex justify-between items-center text-white`}
          >
            <div className="text-2xl font-semibold">
              <img
                src="/assets/images/logo.png"
                alt="DeepSlam Logo"
                className="h-12 w-auto"
              />
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <ul className="flex space-x-6">
                <li>
                  <a href="#home" className="hover:text-primary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="hover:text-primary">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://x.com/Deepslamai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 min-w-10 min-h-10 rounded-full text-secondary bg-primary border-2 border-primary hover:bg-secondary hover:text-primary flex items-center justify-center"
                >
                  <FaXTwitter />
                </a>
              </li>
              {/* <li>
                <div className="h-10 w-10 min-w-10 min-h-10 rounded-full text-secondary bg-primary border-2 border-primary hover:bg-secondary hover:text-primary flex items-center justify-center cursor-pointer">
                  <BsFillSendFill />
                </div>
              </li> */}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-white">
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            ref={mobileMenuRef}
            className={`md:hidden bg-secondary w-full absolute top-0 left-0 right-0 p-4 transition-transform duration-500 ease-in-out transform ${
              isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            {/* Close button inside mobile menu */}
            <div className="flex justify-end mb-4">
              <button onClick={toggleMobileMenu} className="text-white">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col items-center space-y-6">
              <li>
                <a href="#home" className="text-white hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="text-white hover:text-primary">
                  Products
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-white hover:text-primary">
                  Roadmap
                </a>
              </li>
              <li className="flex space-x-4">
                <a
                  href="https://twitter.com/DeepSlamAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 min-w-10 min-h-10 rounded-full text-secondary bg-primary border-2 border-primary hover:bg-secondary hover:text-primary flex items-center justify-center"
                >
                  <FaXTwitter />
                </a>
                {/* <div className="h-10 w-10 min-w-10 min-h-10 rounded-full text-secondary bg-primary border-2 border-primary hover:bg-secondary hover:text-primary flex items-center justify-center cursor-pointer">
                  <BsFillSendFill />
                </div> */}
              </li>
            </ul>
          </div>
        </nav>
        {/* Hero Section */}
        <section
          id="home"
          className="relative h-screen bg-cover bg-top bg-no-repeat "
          style={{ backgroundImage: "url(/assets/images/hero-section.jpeg)" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-white ">
            <div className="max-w-5xl p-6">
              <h1 className="text-4xl md:text-9xl font-bold leading-tight mb-8 ">
                Buy DeepSlam
              </h1>
              <p className="text-lg md:text-2xl mb-8">
                Welcome to DeepSlam coin
              </p>
              <Link
                to={
                  "https://pump.fun/coin/CKWFtE3R5Ut2Qb1S9wkRspCT3qneBHa3BbGR9FXMpump"
                }
                target="__blank"
                className="bg-primary text-secondary font-medium border-2 border-primary hover:bg-secondary hover:text-primary px-10 py-3 rounded-full"
              >
                $ Buy Now
              </Link>
            </div>
          </div>
        </section>
        <section id="features">
          <div className="py-20 bg-black">
            <div className="container mx-auto px-6 md:px-12">
              <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">
                Our Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <FeatureCard
                  icon={<Shield className="h-12 w-12 text-yellow-400" />}
                  title="DeepSlam AI Bot"
                  description="Our intelligent bot assists with community management and provides automated responses powered by advanced AI."
                />
                <FeatureCard
                  icon={<FaGamepad className="h-12 w-12 text-yellow-400" />}
                  title="DeepSlam Mini-Games"
                  description="Engage with our community through fun, interactive games while earning rewards and tokens."
                />
                <FeatureCard
                  icon={<FaLaugh className="h-12 w-12 text-yellow-400" />}
                  title="AI-Powered Meme Generator"
                  description="Create hilarious and viral memes instantly with our AI-powered meme generation tool."
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-black" id="about">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Right Side (Text Content - Cards) */}
              <div className="w-full">
                {/* Card 1: Introduction */}
                <div className="bg-black border-2 border-gray-600 shadow-lg rounded-lg p-6 mb-6 text-gray-300">
                  <h2 className="text-3xl font-extrabold text-primary mb-4">
                    About DeepSlam
                  </h2>

                  <p className="text-lg text-textPrimary mb-4">
                    Welcome to <strong>DeepSlam</strong>, the meme coin that's
                    redefining the world of tech and AI with humor, chaos, and
                    disruption. At its core, DeepSlam is more than just a
                    cryptocurrency—it's a movement to mock Big Tech, ride the
                    wave of AI innovation, and showcase the power of
                    community-driven projects.
                  </p>

                  <p className="text-lg text-textPrimary mb-6">
                    Born from the idea of challenging the tech giants and
                    celebrating the rise of <em>DeepSeek AI</em>, DeepSlam is
                    here to spark conversations, fuel meme culture, and lead the
                    charge in the AI revolution. Whether it's smashing outdated
                    systems or creating viral moments, DeepSlam combines fun and
                    functionality to deliver an experience like no other.
                  </p>
                </div>

                {/* Card 2: Full Content (hidden initially) */}
                {showFullContent && (
                  <div className="bg-black border border-gray-600 text-gray-300 shadow-lg rounded-lg p-6 mb-6">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Why DeepSlam?
                    </h3>
                    <ul className="list-disc pl-6 text-lg text-textPrimary">
                      <li>
                        <strong>Fueling the AI Revolution:</strong> DeepSlam
                        champions DeepSeek AI, showcasing how artificial
                        intelligence can reshape traditional power structures
                        while unlocking exciting new opportunities for everyone.
                      </li>
                      <li>
                        <strong>Meme Culture with a Purpose:</strong> Memes are
                        more than jokes—they're a universal language. DeepSlam
                        uses memes to unite a global audience, sparking
                        conversations about decentralization, innovation, and
                        the future of technology.
                      </li>
                      <li>
                        <strong>Community-Centric:</strong> DeepSlam is built
                        for the people, by the people. Every holder, creator,
                        and contributor plays a key role in the movement to
                        challenge norms, mock Big Tech, and celebrate
                        creativity.
                      </li>
                      <li>
                        <strong>Fun Meets Functionality:</strong> Who says
                        disruption can't be fun? DeepSlam blends the humor and
                        lightheartedness of meme culture with the transformative
                        power of technology, proving that we can innovate while
                        having a good laugh.
                      </li>
                    </ul>
                    <p className="mt-6 text-lg text-textPrimary">
                      DeepSlam isn't just about cryptocurrency—it's about
                      leading a revolution with wit, innovation, and community.
                      <em>
                        {" "}
                        Join us to mock Big Tech, ride the AI wave, and create a
                        world where humor and technology collide.
                      </em>
                      🚀🔥
                    </p>
                  </div>
                )}

                {/* Button to Toggle Full Content */}
                <div className="text-center">
                  <button
                    onClick={handleToggleContent}
                    className="px-6 py-3 mt-6 text-secondary bg-primary hover:bg-black hover:text-primary border-2 border-primary font-semibold rounded-full transition duration-300"
                  >
                    {showFullContent ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>

              {/* Left Side (Image) */}
              <div className="w-full">
                <div className="bg-secondary shadow-lg rounded-lg overflow-hidden">
                  <img
                    src="/assets/images/hero-section.jpeg" // Ensure this image is in your public/images folder
                    alt="DeepSlam AI"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap">
          <div className="py-20 bg-black">
            <div className="container mx-auto px-6 md:px-12">
              <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">
                DeepSlam Roadmap
              </h2>
              <div className="relative">
                {phases.map((phase, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                  >
                    {index % 2 === 0 ? (
                      <>
                        <div className="relative z-10">
                          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                              {phase.icon}
                              <h3 className="text-xl font-semibold ml-2 text-yellow-400">
                                {phase.title}
                              </h3>
                            </div>
                            <p className="text-yellow-200 mb-2">{phase.date}</p>
                            <ul className="list-disc list-inside text-gray-300">
                              {phase.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          {index < phases.length && (
                            <div className="hidden md:block absolute right-0 top-1/2 w-1/2 h-16 border-b-2 border-gray-600 -mr-4 -z-10"></div>
                          )}
                        </div>
                        <div className="hidden md:block"></div>
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block"></div>
                        <div className="relative z-10">
                          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                              {phase.icon}
                              <h3 className="text-xl font-semibold ml-2 text-yellow-400">
                                {phase.title}
                              </h3>
                            </div>
                            <p className="text-yellow-200 mb-2">{phase.date}</p>
                            <ul className="list-disc list-inside text-gray-300">
                              {phase.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          {index < phases.length - 1 && (
                            <div className="hidden md:block absolute left-0 top-1/2 w-1/2 h-16 border-b-2 border-gray-600 -ml-4 -z-10"></div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-600 transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
