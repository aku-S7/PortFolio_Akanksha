function Achievements() {
    const achievements = [
      {
        title: "SQL Certificate",
        description:
          "Earned Google Cloud Certification, validating expertise in cloud technologies and infrastructure.",
        image: "certificate.jpg",
      },
      {
        title: "Full-Stack Developer Internship",
        description:
          "Completed an internship, gaining hands-on experience in full-stack web development.",
        image: "internship.jpg",
      },
      {
        title: "React.js Developer Certificate",
        description:
          "Certified in React.js, demonstrating proficiency in building dynamic and scalable web applications.",
        image: "react-cert.jpg",
      },
    ];
  
    return (
      <section id="achievements" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
         
          <h2 className="relative text-3xl font-bold text-center mb-12 font-[cursive] group w-[20%] ml-auto mr-auto">
            Achievements
            <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[rgba(125,113,94,1)] transform scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </h2>
  

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="relative bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 group"
              >
                <h3 className="font-bold text-xl mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
  
                {/* Certificate Image (Appears on Hover) */}
                <div className="relative inline-block">
                  <span className="text-blue-600 cursor-pointer">View Certificate</span>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Achievements;
  