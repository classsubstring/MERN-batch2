import React from "react";
import {
  Brain,
  LineChart,
  Award,
  Users,
  Zap,
  BookOpen,
  BarChart3,
  Globe,
  Sparkles,
  Monitor,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Brain className="w-10 h-10 text-indigo-500" />,
      title: "AI-Powered Quiz Generation",
      desc: "Automatically generated quizzes tailored to your knowledge level.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-green-500" />,
      title: "Adaptive Learning Paths",
      desc: "Personalized study plans that adapt as you progress.",
    },
    {
      icon: <LineChart className="w-10 h-10 text-yellow-500" />,
      title: "Instant Feedback & Insights",
      desc: "Detailed analytics with strengths and weaknesses.",
    },
    {
      icon: <Award className="w-10 h-10 text-pink-500" />,
      title: "Gamified Learning",
      desc: "Earn points, badges, and compete on leaderboards.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-purple-500" />,
      title: "Topic Recommendations",
      desc: "AI suggests topics based on your performance.",
    },
    {
      icon: <Zap className="w-10 h-10 text-red-500" />,
      title: "Custom Quiz Builder",
      desc: "Create and share your own quizzes easily.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Community & Collaboration",
      desc: "Challenge friends and learn together.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-indigo-400" />,
      title: "Progress Tracking Dashboard",
      desc: "Track your scores, streaks, and growth visually.",
    },
    {
      icon: <Globe className="w-10 h-10 text-teal-500" />,
      title: "AI-Powered Explanations",
      desc: "Smart explanations to help you understand better.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-orange-500" />,
      title: "Multi-Device Support",
      desc: "Learn anywhere on desktop, tablet, or mobile.",
    },
  ];
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          SmartQuiz AI offers a variety of features to make your learning
          journey engaging, personalized, and effective.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
