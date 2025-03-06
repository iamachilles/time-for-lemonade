
import { Button } from "@/components/ui/button";
import { Bell, BellOff } from "lucide-react";

const Notification = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white/0 to-purple-50/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto glass-card p-12 rounded-3xl border-2 border-white/70 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6 animate-slide-up">
              <div className="flex items-center gap-3 text-purple-600 mb-2">
                <BellOff size={24} />
                <span className="font-semibold">Notification Control</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Get rid of notifications
                <br />
                <span className="text-purple-500">without effort</span>
              </h2>
              <p className="text-xl text-gray-600">
                Our AI learns which emails are important to you and silences the rest, giving you peace of mind and focused work time.
              </p>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                Take Control of Your Time
              </Button>
            </div>
            
            <div className="lg:w-1/2 animate-slide-in-right">
              <div className="bg-white/90 rounded-xl shadow-lg border border-white/70 overflow-hidden">
                <div className="p-4 bg-purple-500 text-white">
                  <h3 className="font-medium">How notifications work</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-700">Our AI learns which emails matter to you and creates smart notification rules:</p>
                  
                  {[
                    "Important contacts always get through",
                    "Group emails and newsletters are batched",
                    "Promotional emails are silenced",
                    "Custom quiet hours for focused work"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-500 text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;
