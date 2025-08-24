import React, { useState } from "react";

const Overview = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText =
    "I'm Saroj Acharya, a Computer Engineer at the Government of Bagamati Province, focused on improving IT systems, solving real-world problems, and driving practical changes in governance through technology, innovation, and effective decision-making. Hailing from Kawasoti, Nawalparasi (East), Gandaki Province. I bring both local insight and technical expertise to my role in public service. With a Bachelor's degree in Computer Engineering, I am deeply involved in improving, managing, and modernizing various government systems. My work focuses on building efficient, reliable, and future-proof digital infrastructures that enhance governance, transparency, and citizen services. I believe in driving meaningful change within the public sector through problem-solving, decision-making, and innovative thinking. I strive to bridge the gap between government operations and modern technology. Beyond work, I enjoy engaging in sports like cricket, football, and others which reflect my belief in collaboration and strategy — both on the field and in the workplace.";

  const previewText = fullText.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <section className="animate-slide-up px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        OverView
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Text Column */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Who Am I?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            {isExpanded ? fullText : previewText}
          </p>
          <button
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
        </div>

        {/* Image Column */}
        <div className="flex justify-center items-start">
          <img
            src="/PPSIZE.jpg"
            alt="Overview"
            className="rounded-lg pointer-events-none select-none"
            style={{ width: "2in", height: "2.4in", objectFit: "cover" }}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
