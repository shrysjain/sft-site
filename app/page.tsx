import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { JoinTeamForm } from "../components/JoinTeamForm";
import Image from "next/image";

export default function Home() {
  const teamMembers = [
    {
      name: "Shaurya Bisht",
      role: "Chief Executive Officer",
      image: "/placeholder.webp",
    },
    {
      name: "Shreyas Jain",
      role: "Chief Technology Officer",
      image: "/placeholder.webp",
    },
    {
      name: "Victor Cao",
      role: "Chief Financial Officer",
      image: "/placeholder.webp",
    },
    {
      name: "Nathan Liang",
      role: "Chief Information Officer",
      image: "/placeholder.webp",
    },
    {
      name: "Anika Dureja",
      role: "Chief Marketing Officer",
      image: "/placeholder.webp",
    },
    {
      name: "Emily Qiu",
      role: "Chief Operating Officer",
      image: "/placeholder.webp",
    },
    {
      name: "Aashika Pesaladinne",
      role: "Chief Development Officer",
      image: "/placeholder.webp",
    },
    {
      name: "Isaac Leetyn",
      role: "Head of Problem Solving",
      image: "/placeholder.webp",
    },
    { name: "Ryan Guo", role: "Treasurer", image: "/placeholder.webp" },
    {
      name: "Sarah Park",
      role: "Head of Community Outreach",
      image: "/placeholder.webp"
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-75"></div>
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-16 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        </div>
        <Navbar />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[70vh] py-20">
          <div className="text-left">
            <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Solve for Tomorrow
            </h1>
            <p className="mt-3 max-w-md text-base text-gray-100 sm:text-lg md:mt-4 md:text-xl md:max-w-2xl">
              Innovating solutions for a brighter future
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#mission"
                  className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-3 md:text-lg md:px-8"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-20 fill-current text-[#FAFAFA]"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section id="mission" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-500 text-center max-w-3xl mx-auto">
            We&apos;re mobilizing the brilliance of young minds to drive the
            future of AI innovation while advancing math education. By
            transforming student problem-solving into high-value datasets for
            leading companies in the tech industry, we generate funding to
            empower underserved communities, foster talent, and redefine what it
            means to learn and lead in a data-driven world.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="space-y-4">
                  <Image
                    className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                  />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      <h3 className="text-black">{member.name}</h3>
                      <p className="text-blue-600">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section id="join" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Join Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-500 text-center max-w-3xl mx-auto mb-4">
            Passionate about solving challenges and contributing to Solve for
            Tomorrow? We&apos;re always looking for talented individuals to join
            our team. Send us your application, and let&apos;s create a better
            future together.
          </p>
          <h6 className="text-center mb-8 text-gray-400">
            Expect to hear back via email in 3-5 business days.
          </h6>
          <JoinTeamForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
