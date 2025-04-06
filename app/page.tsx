import { Play, Dumbbell, HeartPulse, Calendar, Award } from "lucide-react";
import HeroModel from './components/HeroModel'

export default function Home() {
  const featuredExercises = [
    {
      name: "Full Body Burn",
      category: "HIIT",
      duration: "20 min",
      difficulty: "Intermediate",
      image: "/images/workouts/full-body.jpg"
    },
    {
      name: "Yoga Flow",
      category: "Flexibility",
      duration: "30 min",
      difficulty: "Beginner",
      image: "/images/workouts/yoga.jpg"
    },
    {
      name: "Strength Training",
      category: "Weights",
      duration: "45 min",
      difficulty: "Advanced",
      image: "/images/workouts/strength.jpg"
    }
  ];

  const stats = [
    { value: "50+", label: "Exercises" },
    { value: "10+", label: "Workout Plans" },
    { value: "100%", label: "Free" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Hero Section with 3D Model */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Body <span className="text-blue-600">For Free</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Experience interactive 3D exercise guides with professional motion-capture technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 hover:border-blue-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-all">
                <Play size={18} />
                See Demo
              </button>
            </div>
          </div>        
          <HeroModel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-3 divide-x divide-gray-200 text-center py-6">
            {stats.map((stat, index) => (
              <div key={index} className="px-4">
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Our App</h2>
          <p className="text-gray-600 text-lg">
            Everything you need to reach your fitness goals, completely free.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Dumbbell className="w-8 h-8 text-blue-600" />,
              title: "3D Exercise Guides",
              description: "Interactive models with professional animations"
            },
            {
              icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
              title: "Video Guidance",
              description: "Professional exercise demonstrations"
            },
            {
              icon: <Calendar className="w-8 h-8 text-blue-600" />,
              title: "Progress Tracking",
              description: "Monitor your improvements over time"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workouts Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Featured Workouts</h2>
              <p className="text-gray-600">Start with these popular routines</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              View All →
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredExercises.map((workout, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs rounded-full mb-1">
                      {workout.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg">{workout.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>{workout.duration}</span>
                    <span className="capitalize">{workout.difficulty}</span>
                  </div>
                  <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Start Workout
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-12 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Fitness?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who are achieving their fitness goals with our free app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all shadow-lg">
              Sign Up Now
            </button>
            <button className="bg-transparent border border-white hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}