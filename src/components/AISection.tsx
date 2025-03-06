
import { Button } from "@/components/ui/button";

const AISection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative order-2 lg:order-1 animate-slide-in-left">
            <div className="relative w-full aspect-video max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-purple-100 to-white rounded-3xl blur-3xl opacity-70"></div>
              <div className="relative glass-card p-8 rounded-3xl">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-white/50 shadow-md">
                  <h4 className="text-lg font-semibold mb-2">AI Writing Assistant</h4>
                  <p className="text-gray-600 mb-4">
                    Let me draft a response to this meeting request for you...
                  </p>
                  <div className="bg-lime-100 p-4 rounded-lg border border-lime-200">
                    <p className="text-gray-800 font-medium">
                      "Thanks for the invitation! I can make it to the meeting at 3pm. I've added it to my calendar and look forward to discussing the project updates."
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button className="bg-lime-500 hover:bg-lime-600 flex-1">Use This Response</Button>
                  <Button variant="outline" className="flex-1">Edit Response</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6 order-1 lg:order-2 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-purple-500">Zest</span> writes the boring stuff,
              <br />
              <span className="text-lime-600">you don't</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-lg">
              Our AI understands your writing style and handles routine emails automatically. Just review, adjust if needed, and send - all in seconds.
            </p>
            <ul className="space-y-4">
              {[
                "Smart email replies that sound like you",
                "Automatic meeting scheduling and calendar integration",
                "Quick follow-up reminders with smart templates",
                "Writing tone adjustment for different recipients"
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-lime-500 text-xl mt-0.5">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
