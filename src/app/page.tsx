import { Rocket, Apple, Lightbulb, DollarSign, GraduationCap, Handshake, Clock, ChevronDown, Sun } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#DE601D] to-[#F48165] min-h-screen flex flex-col justify-center items-center text-white px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight ">
              From ABC to PhD — Learn smart, earn simple.
            </h1>
            <div className="space-y-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              <p>
                Reliable promotions for brands. Meaningful partnerships for
                influencers.
              </p>
              <p>
                Whether you&apos;re growing a business or building a personal brand —
                our platform brings you together.
              </p>
            </div>
          </div>

        <button
          className=" bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
        >
          <div className="flex items-center ">
  <Rocket className="w-5 h-5 mr-2 " />
          Launching soon — Stay tuned!
          </div>
        
        </button>
        </div>

        <div className="absolute bottom-8 flex flex-col items-center text-white/80">
          <ChevronDown className="w-6 h-6 animate-bounce" />
          <p className="text-sm mt-2">Scroll to learn more</p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-16"
            style={{ color: "#5A827E" }}
          >
            The Challenge We&apos;re Solving
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white border-l-4 border-l-orange-500 shadow-lg rounded-lg p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Apple className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-semibold text-orange-500">For Students</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Struggling to find affordable, reliable tuition? Students across India lack access to personal,
                cost-effective guidance that fits their unique learning needs.
              </p>
            </div>

            <div className="bg-white border-l-4 border-l-orange-500 shadow-lg rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <Lightbulb className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-semibold text-orange-500">For Potential Tutors</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Love teaching but don't know where to start earning? Countless teens, homemakers, and college students
                have the skills but no platform to teach and earn flexibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">Our Solution</h2>

          <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">Graspal bridges both worlds.</p>

          <div className="space-y-6 text-lg text-gray-600 max-w-3xl mx-auto">
            <p>
              We connect learners from LKG to college with verified, friendly tutors — including smart college students,
              talented teens, and educated homemakers.
            </p>
            <p>
              Whether you&apos;re a brand looking for real results or an influencer
              ready to grow, we make it easy to discover, collaborate, and
              succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#DE601D] to-[#F48165]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">Why Choose Graspal?</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-5xl gap-6">
            <div className=" bg-white/20 border border-orange-300/30 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-3">Affordable Tuition</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Quality education tailored to your budget and learning needs
              </p>
            </div>

            <div className="bg-white/20 border border-orange-300/30 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-purple-300" />
              <h3 className="text-xl font-semibold mb-3">Learn in Your Language</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Personalized learning experience in your preferred language
              </p>
            </div>

            <div className="bg-white/20 border border-orange-300/30 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
              <Handshake className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-3">Community Tutors</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Trusted tutors from your own community who understand your culture
              </p>
            </div>

            <div className="bg-white/20 border border-orange-300/30 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
              <Clock className="w-12 h-12 mx-auto mb-4 text-pink-300" />
              <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Teach and earn on your own schedule, anytime, anywhere
              </p>
            </div>
          </div>

          {/* One Platform Feature */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="bg-white/20 border border-orange-300/30 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
              <Sun className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-3">One Platform</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Endless learning opportunities all in one convenient place
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 md:py-24 bg-slate-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Rocket className="w-8 h-8 text-pink-400" />
            <h2 className="text-3xl md:text-5xl font-bold text-white">Coming Soon!</h2>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We&apos;re building something powerful for creators and brands. Get ready
            for a smarter, smoother way to collaborate and grow!
          </p>
        </div>
      </section>
    </div>
  )
}
