import Image from "next/image";

const InterviewPage = () => {
  // You can later replace these with dynamic props or data from n8n
  const profilePic = "https://example.com/profile.jpg";
  const name = "Jane Doe";
  const bio = "Jane is an expert in ecosystem restoration, community engagement, and biodiversity.";
  const interviewVideo = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // replace with your interview link

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl w-full text-center">
        {/* Profile Picture */}
        <Image
          src={profilePic}
          alt={name}
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6"
        />

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Magic <span className="text-[#F1ab1c]">{name}</span>
        </h1>

        {/* Bio */}
        <p className="text-lg text-gray-700 mb-6">{bio}</p>

        {/* Interview Video */}
        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
            src={interviewVideo}
            title="Interview Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;
