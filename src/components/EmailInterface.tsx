
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight, Mail, CornerDownLeft, Users, FileText } from "lucide-react";

// Feature card component
const FeatureCard = ({ 
  title, 
  description,
  color = "bg-purple-600",
  position,
  textColor = "text-white"
}: { 
  title: string; 
  description: string;
  color?: string;
  position: string;
  textColor?: string;
}) => {
  return (
    <div className={`absolute ${position} rounded-lg p-4 shadow-lg ${color} ${textColor} z-30 max-w-[220px]`}>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

// Email row component for the mockup
const EmailRow = ({ 
  sender, 
  subject, 
  time, 
  label,
  labelColor = "bg-gray-200",
  hasIcon = false
}: { 
  sender: string;
  subject: string;
  time: string;
  label?: string;
  labelColor?: string;
  hasIcon?: boolean;
}) => {
  return (
    <div className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100">
      {hasIcon && (
        <div className="mr-2 text-gray-400">
          <Mail size={16} />
        </div>
      )}
      <div className="flex-grow min-w-0">
        <div className="flex items-center">
          <span className="font-medium text-sm">{sender}</span>
          <span className="ml-auto text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-700 truncate">{subject}</p>
      </div>
      {label && (
        <div className={`ml-3 px-2 py-1 text-xs rounded-md ${labelColor} text-gray-800`}>
          {label}
        </div>
      )}
    </div>
  );
};

const EmailInterface = () => {
  return (
    <section className="py-16 relative bg-gradient-to-b from-lemon-50 to-yellow-50">
      <div className="container relative max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work on your emails, not in them</h2>
          <p className="text-xl text-gray-600">
            Experience how Zest makes email seamless and enjoyable with powerful AI features
          </p>
        </div>
        
        {/* Feature cards around the email interface */}
        <FeatureCard 
          title="AI powered labels" 
          description="to instinctively sort your mails and files"
          position="top-[20%] left-0 -translate-x-1/2 lg:translate-x-0"
          color="bg-purple-600"
        />
        
        <FeatureCard 
          title="Built in drive" 
          description="for your attachments - no more back and forth!"
          position="top-[40%] left-0 -translate-x-1/2 lg:translate-x-0"
          color="bg-purple-300"
          textColor="text-purple-900"
        />
        
        <FeatureCard 
          title="Simplified unsubscribe" 
          description="to spam"
          position="bottom-[25%] left-0 -translate-x-1/2 lg:translate-x-0"
          color="bg-purple-600"
        />
        
        <FeatureCard 
          title="Instinctive shortcuts" 
          description="to navigate, answer, sort, send in no time"
          position="top-[25%] right-0 translate-x-1/2 lg:translate-x-0"
          color="bg-purple-600"
        />
        
        <FeatureCard 
          title="Use your own email adress" 
          description="or create your Zest email"
          position="top-[45%] right-0 translate-x-1/2 lg:translate-x-0"
          color="bg-purple-300"
          textColor="text-purple-900"
        />
        
        <FeatureCard 
          title="AI agent" 
          description="to write, answer, correct with the touch of a key"
          position="bottom-[40%] right-0 translate-x-1/2 lg:translate-x-0"
          color="bg-purple-300"
          textColor="text-purple-900"
        />
        
        <FeatureCard 
          title="File preview, summary and edit" 
          description="directly in your mail"
          position="bottom-[20%] right-0 translate-x-1/2 lg:translate-x-0"
          color="bg-purple-300"
          textColor="text-purple-900"
        />
        
        {/* Email interface mockup based on the screenshot */}
        <div className="relative max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-gray-200 bg-white">
          {/* Top navigation */}
          <div className="bg-white border-b border-gray-200 flex items-center justify-between p-2 px-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center text-white mr-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.7279 10.172C16.1184 9.7815 16.1184 9.14834 15.7279 8.75781C15.3374 8.36729 14.7042 8.36729 14.3137 8.75781L15.7279 10.172ZM12.8995 11.5862L12.1924 12.2933C12.5829 12.6838 13.2161 12.6838 13.6066 12.2933L12.8995 11.5862ZM14.3137 14.4147C14.7042 14.8052 15.3374 14.8052 15.7279 14.4147C16.1184 14.0241 16.1184 13.391 15.7279 13.0005L14.3137 14.4147ZM10.0711 10.172L10.7782 9.46488C10.3876 9.07436 9.75448 9.07436 9.36396 9.46488L10.0711 10.172ZM7.24264 12.0005L6.53553 12.7076C6.92606 13.0981 7.55922 13.0981 7.94975 12.7076L7.24264 12.0005ZM9.36396 14.5355C9.75448 14.926 10.3876 14.926 10.7782 14.5355C11.1687 14.145 11.1687 13.5118 10.7782 13.1213L9.36396 14.5355ZM14.3137 8.75781L12.1924 10.8791L13.6066 12.2933L15.7279 10.172L14.3137 8.75781ZM13.6066 10.8791L14.3137 11.5862L15.7279 10.172L15.0208 9.46488L13.6066 10.8791ZM15.0208 11.5862L15.7279 12.2933L17.1421 10.8791L16.435 10.172L15.0208 11.5862ZM15.7279 13.0005L13.6066 15.1218L15.0208 16.536L17.1421 14.4147L15.7279 13.0005ZM9.36396 9.46488L7.24264 11.5862L8.65685 13.0005L10.7782 10.8791L9.36396 9.46488ZM7.94975 11.2934L7.24264 10.5862L5.82843 12.0005L6.53553 12.7076L7.94975 11.2934ZM7.24264 12.4147L7.94975 13.1218L9.36396 11.7076L8.65685 11.0005L7.24264 12.4147ZM10.7782 13.1213L8.65685 15.2426L10.0711 16.6568L12.1924 14.5355L10.7782 13.1213Z" fill="white"/>
                </svg>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  className="py-1.5 px-4 pl-8 text-sm border border-gray-200 rounded-md w-56 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Search in inbox"
                />
                <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none text-gray-400">
                  <Search size={16} />
                </div>
              </div>
              <div className="flex ml-2 items-center space-x-2 text-gray-500">
                <button className="p-1 hover:bg-gray-100 rounded">K</button>
                <button className="p-1 hover:bg-gray-100 rounded flex items-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex space-x-4 text-xs overflow-x-auto pb-1 whitespace-nowrap">
              <span className="font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded">All (19)</span>
              <span className="px-2 py-1 hover:bg-gray-100 rounded">Personal (6)</span>
              <span className="px-2 py-1 hover:bg-gray-100 rounded">Newsletters</span>
              <span className="px-2 py-1 hover:bg-gray-100 rounded">Security</span>
              <span className="px-2 py-1 hover:bg-gray-100 rounded">Meetings (2)</span>
              <span className="px-2 py-1 hover:bg-gray-100 rounded">Invoices</span>
              <span className="px-2 py-1 hover:bg-gray-100 rounded">Outreach</span>
              <span className="px-2 py-1 hover:bg-gray-100 rounded">Appels d'offre</span>
              <span className="px-2 py-1 hover:bg-gray-100 rounded">Saint-Denis (2)</span>
            </div>
          </div>
          
          <div className="flex h-[470px]">
            {/* Left sidebar with emails list */}
            <div className="w-2/5 border-r border-gray-200 overflow-y-auto bg-white">
              <EmailRow 
                sender="Clio Gavagni" 
                subject="Exports for maquette shared." 
                time="4:11 PM"
                label="Personal"
                labelColor="bg-purple-100"
              />
              
              <EmailRow 
                sender="dvanw@dvanw.com" 
                subject="Inquiry about 3D database for Frēks." 
                time="3:35 PM" 
                label="Personal"
                labelColor="bg-purple-100"
              />
              
              <EmailRow 
                sender="Stéphane Levy" 
                subject="Comprend le travail de Céleste." 
                time="3:25 PM" 
                label="Personal"
                labelColor="bg-purple-100"
              />
              
              <EmailRow 
                sender="Smash" 
                subject="Fichier envoyé via Smash." 
                time="2:29 PM" 
                label="Newsletters"
                labelColor="bg-blue-100"
              />
              
              <EmailRow 
                sender="Stéphane Levy" 
                subject="# Propose une visioconférence pour le film." 
                time="11:35 AM" 
                label="Développement"
                labelColor="bg-green-100"
              />
              
              <EmailRow 
                sender="dvanw@dvanw.com" 
                subject="Confirmation de réception du dossier." 
                time="10:36 AM" 
                label="Personal"
                labelColor="bg-purple-100"
              />
              
              <EmailRow 
                sender="Schafir Julie" 
                subject="Clic retaillé, touch désactivé." 
                time="10:09 AM" 
                label="Saint-Denis"
                labelColor="bg-orange-100"
              />
              
              <EmailRow 
                sender="Ponctuation Monumentale" 
                subject="Léna received documents, will review soon." 
                time="10:06 AM" 
                label="Appels d'offre"
                labelColor="bg-teal-100"
              />
              
              <EmailRow 
                sender="Schafir Julie" 
                subject="# Fiche remplie envoyée à Léna." 
                time="9:58 AM" 
                label="Saint-Denis"
                labelColor="bg-orange-100"
              />
              
              <EmailRow 
                sender="Mélanie Gerin" 
                subject="Disponible mardi pour discuter ensemble." 
                time="8:07 AM" 
                label="Personal"
                labelColor="bg-purple-100"
              />
              
              <EmailRow 
                sender="Smash" 
                subject="Fichier envoyé via Smash." 
                time="Mar 3" 
                label="Newsletters"
                labelColor="bg-blue-100"
              />
            </div>
            
            {/* Right panel with email details */}
            <div className="w-3/5 bg-white">
              <div className="border-b border-gray-200 p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Exports Maquette SD</h2>
                  <div className="flex space-x-3 text-gray-500">
                    <button className="hover:bg-gray-100 p-1 rounded-full">
                      <ChevronLeft size={18} />
                    </button>
                    <button className="hover:bg-gray-100 p-1 rounded-full">
                      <ChevronRight size={18} />
                    </button>
                    <button className="hover:bg-gray-100 p-1 rounded-full">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.75L5.82802 20.995L7.00702 14.122L2.00702 9.25495L8.90702 8.25495L11.993 2.00195L15.079 8.25495L21.979 9.25495L16.979 14.122L18.158 20.995L12 17.75Z" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <button className="hover:bg-gray-100 p-1 rounded-full">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center mb-2">
                  <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">
                    C
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center text-sm">
                      <span className="font-medium">Clio Gavagni</span>
                      <span className="mx-1 text-gray-500">•</span>
                      <span className="text-gray-500">cliogavagni@gmail.com</span>
                    </div>
                    <div className="text-xs text-gray-500 flex items-center">
                      <span>to: Erwan BOUVET, Léna Nicolaï - Escalenta</span>
                      <button className="ml-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 9L12 16L5 9" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Mar 4, 2023, 4:11 PM</div>
                </div>
              </div>
              
              <div className="p-6 text-sm">
                <p className="mb-4">Hello Erwan,</p>
                <p className="mb-4">Voici mes exports pour la maquette.</p>
                <p className="mb-4 text-blue-500">https://escalenta.fromsmash.com/zff_LrDsjW-ct</p>
                <p className="mb-4">Je te les ai numérotés pour que tu puisses les empiler dans le bon ordre.</p>
                <p className="mb-4">Dis-moi si tout est pour toi.</p>
                <p className="mb-4">À bientôt,</p>
                <p>Clio</p>
              </div>
              
              <div className="border-t border-gray-200 p-3 bg-gray-50 absolute bottom-0 w-3/5">
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <Button className="bg-purple-600 text-white text-xs flex items-center gap-1 py-1 px-3 h-8 rounded-full">
                      <span>AI Reply</span> 
                      <CornerDownLeft size={14} />
                    </Button>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span>L</span>
                      <span>1</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="outline" className="text-xs flex items-center gap-1 py-1 px-3 h-8 rounded-full border-gray-300">
                      <span>Problème avec l'ordre</span>
                      <ChevronLeft size={14} />
                      <span>2</span>
                    </Button>
                    
                    <Button variant="outline" className="text-xs flex items-center gap-1 py-1 px-3 h-8 rounded-full border-gray-300">
                      <span>Transférer à l'équipe</span>
                      <ChevronRight size={14} />
                      <span>3</span>
                    </Button>
                    
                    <Button className="bg-blue-500 text-white text-xs flex items-center gap-1 py-1 px-3 h-8 rounded-full">
                      <FileText size={14} />
                      <span>View exports</span>
                      <span className="bg-white text-blue-500 rounded-full h-5 w-5 flex items-center justify-center">3</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom pagination */}
          <div className="border-t border-gray-200 p-2 text-xs flex justify-between items-center bg-gray-50">
            <div className="text-gray-500">0 - 25 of 386</div>
            <div className="flex items-center space-x-1 text-gray-500">
              <button className="p-1 hover:bg-gray-200 rounded"><ChevronLeft size={16} /></button>
              <button className="p-1 hover:bg-gray-200 rounded"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-1/4 -mb-8">
          <img 
            src="/lovable-uploads/b612ef9b-8745-45de-8507-4d47e5825102.png" 
            alt="Decorative leaf" 
            className="w-32 h-auto opacity-90 transform -rotate-15"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailInterface;
