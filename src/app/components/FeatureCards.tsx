import Image from "next/image";
import Link from "next/link";

export default function FeatureCards() {
  const features = [
    {
      img: "https://yt3.googleusercontent.com/arHIKjc6JTqF_b4QJKPHhQC_Jr8q0XfI7LEpJ0-VuiI0ZRz9xFNz94TWl4CLOcozLx-iAhV_=s900-c-k-c0x00ffffff-no-rj",
      title: "Hitesh Choudhary",
      subtitle: "Tech Educator & Entrepreneur",
      desc: "Passionate about teaching programming with a focus on practical knowledge and real-world applications.",
      skills: ["JavaScript", "Python", "Web Development", "DSA", "AI"],
      link: "/persona/hitesh",
    },
    {
      img: "https://avatars.githubusercontent.com/u/44976328?v=4",
      title: "Piyush Garg",
      subtitle: "Educator & Content Creator",
      desc: "Content creator, educator, and entrepreneur known for his expertise in the tech industry.",
      skills: ["Docker", "React", "Node.js", "Gen AI", "Career Advice"],
      link: "/persona/piyush",
    }
  ];

  return (
    <section className="bg-transparent text-white px-6 py-6">
      <p className="text-2xl font-sans font-extrabold text-center my-10 text-gray-300 mt-5">
        Select who you&apos;d like to chat with today.
      </p>
      <div className="grid gap-8 md:grid-cols-2 items-stretch">
        {features.map((feature, index) => (
          <Link key={index} href={feature.link} className="h-full">
            <div
              className="bg-black/40 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform cursor-pointer border border-gray-700 h-full flex flex-col"
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-orange-400 object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-sm text-orange-400 mb-3">{feature.subtitle}</p>
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                {feature.desc}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {feature.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
