import {
  Rocket,
  Handshake,
  ChevronDown,
  User,
  Briefcase,
  ShieldCheck,
  Search,
  BarChart2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-white px-4 relative"
        style={{
          background: "linear-gradient(to bottom right, #5A827E, #5A827ECC)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight ">
              The Easiest Way for Brands and Influencers to Partner, Promote,
              and Grow
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

          <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105">
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
            <div
              className="bg-white border-l-4 shadow-lg rounded-lg p-8"
              style={{ borderColor: "#5A827E" }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Briefcase className="w-6 h-6" style={{ color: "#5A827E" }} />
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "#5A827E" }}
                >
                  For Brands & Agencies
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Tired of wasting time and budget on influencer campaigns that
                don’t deliver? Discover, connect, and track trusted
                influencers—all in one seamless platform.
              </p>
            </div>

            <div
              className="bg-white border-l-4 shadow-lg rounded-lg p-8"
              style={{ borderColor: "#5A827E" }}
            >
              <div className="flex items-center gap-3 mb-4 justify-center">
                <User className="w-6 h-6" style={{ color: "#5A827E" }} />
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "#5A827E" }}
                >
                  For Influencers
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Struggling to land reliable brand deals? Get discovered by top
                brands, manage partnerships easily, and get paid on time—without
                the back-and-forth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
            Our Solution
          </h2>

          <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">
            Built for brands and influencers—together.
          </p>

          <div className="space-y-6 text-lg text-gray-600 max-w-3xl mx-auto">
            <p>
              We simplify influencer marketing by connecting brands with trusted
              creators through a fast, transparent, and all-in-one platform.
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
      <section
        className="py-16 md:py-24"
        style={{
          background: "linear-gradient(to bottom right, #5A827E, #5A827ECC)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
            Why Choose Us?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-5xl gap-6 mx-auto">
            <div
              className="bg-white/20 border backdrop-blur-sm rounded-2xl p-6 text-center text-white"
              style={{ borderColor: "#5A827E80" }}
            >
              <Search
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "#A0C7C1" }}
              />
              <h3 className="text-xl font-semibold mb-3">Faster Discovery</h3>
              <p className="text-[#B4D1CC] text-sm leading-relaxed">
                Brands find the right influencers in minutes. Influencers get
                discovered without the chase.
              </p>
            </div>

            <div
              className="bg-white/20 border backdrop-blur-sm rounded-2xl p-6 text-center text-white"
              style={{ borderColor: "#5A827E80" }}
            >
              <ShieldCheck
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "#7CA69D" }}
              />
              <h3 className="text-xl font-semibold mb-3">Verified & Trusted</h3>
              <p className="text-[#B4D1CC] text-sm leading-relaxed">
                Brands work only with real, vetted influencers. Influencers
                boost trust with verified profiles.
              </p>
            </div>

            <div
              className="bg-white/20 border backdrop-blur-sm rounded-2xl p-6 text-center text-white"
              style={{ borderColor: "#5A827E80" }}
            >
              <Handshake
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "#A0C7C1" }}
              />
              <h3 className="text-xl font-semibold mb-3">
                Seamless Collaboration
              </h3>
              <p className="text-[#B4D1CC] text-sm leading-relaxed">
                Brands manage deals, payments, and timelines in one place.
                Influencers skip the messy DMs and get clarity.
              </p>
            </div>

            <div
              className="bg-white/20 border backdrop-blur-sm rounded-2xl p-6 text-center text-white"
              style={{ borderColor: "#5A827E80" }}
            >
              <BarChart2
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "#85B2AB" }}
              />
              <h3 className="text-xl font-semibold mb-3">
                Performance That Pays
              </h3>
              <p className="text-[#B4D1CC] text-sm leading-relaxed">
                Brands track ROI with real-time data. Influencers get insights
                to improve and earn more.
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
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Coming Soon!
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We&apos;re building something powerful for creators and brands. Get ready
            for a smarter, smoother way to collaborate and grow!
          </p>
        </div>
      </section>
    </div>
  );
}
