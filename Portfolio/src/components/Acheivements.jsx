//  import sqlCertificate from "../assets/sql-beginner-to-advanced-for-data-professionals.png";
import back from "../assets/back.jpg";

function Achievements() {

  const achievements = [
    {
      title: "SQL Certificate",
      description:
        "Completed a professional certification in SQL, gaining a solid understanding of database design, data manipulation, and querying techniques. Learned to apply joins, subqueries, and aggregate functions for effective outcome.",
    },
    {
      title: "NPTEL : The JOy of using Python",
      description:
        "Completed NPTEL certification on Python conducted by IIT under SWAYAM. It included fundamentals of Python programming and a pen-and-paper proctored exam.",
    },
    {
      title: "Data Analytics Certificate",
      description:
        "Completed Google’s Data Analytics certification, covering the fundamentals of data cleaning, analysis, and visualization using tools like SQL, Excel, and Power BI, with a focus on solving real-world business problems.",
    },
  ];


  return (
    <section id="achievements" className="py-20 bg-[rgba(243,238,234,1)]" style={{ backgroundImage: `url(${back})` }} >
      <div className="max-w-4xl mx-auto px-4 items-center ">
        <h2 className="relative text-3xl font-bold text-center mb-12 font-[cursive] group w-[25%] ml-auto mr-auto">
          Achievements
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[rgba(125,113,94,1)] transform scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="relative bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 group"
            >
              <h3 className="font-bold text-xl mb-2 bg-white ">
                {achievement.title}
              </h3>
              <p className="text-gray-600 mb-4 bg-white ">
                {achievement.description}
              </p>

              {/* Certificate Image (Appears on Hover) */}
              <div className="relative inline-block">
                <span className="text-blue-600 cursor-pointer bg-white ">
                  View Certificate
                </span>
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[200px] h-[100px] rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
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
