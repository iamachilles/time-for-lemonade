
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Search, ArrowLeft, ArrowRight, Star, Trash, Mail, AlertCircle, FileText, Users } from "lucide-react";

// Feature callout component
const FeatureCallout = ({ 
  title, 
  description,
  position,
  color = "bg-purple-600",
  textColor = "text-white"
}: { 
  title: string; 
  description: string;
  position: string;
  color?: string;
  textColor?: string;
}) => {
  return (
    <div className={`absolute ${position} max-w-[200px] z-30 shadow-lg rounded-lg p-4 ${color} ${textColor}`}>
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
  isUnread = false,
  labelColor = "bg-gray-200"
}: { 
  sender: string;
  subject: string;
  time: string;
  label?: string;
  isUnread?: boolean;
  labelColor?: string;
}) => {
  return (
    <div className={`flex items-center py-3 px-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 ${isUnread ? 'font-medium' : ''}`}>
      <div className="flex-shrink-0 w-6 mr-3 text-gray-400">
        <Mail size={16} />
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex items-center mb-1">
          <span className="font-medium text-sm truncate">{sender}</span>
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

// Email detail component for the mockup
const EmailDetail = () => {
  return (
    <div className="bg-white rounded-r-lg h-full">
      <div className="border-b border-gray-200 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Exports Maquette SD</h2>
          <div className="flex space-x-2 text-gray-500">
            <ArrowLeft size={18} className="cursor-pointer" />
            <ArrowRight size={18} className="cursor-pointer" />
            <Star size={18} className="cursor-pointer" />
            <Trash size={18} className="cursor-pointer" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">
            C
          </div>
          <div className="flex-grow">
            <div className="flex items-center text-sm">
              <span className="font-medium">Clio Gavagni</span>
              <span className="mx-1">•</span>
              <span className="text-gray-500">cliogavagni@gmail.com</span>
            </div>
            <div className="text-xs text-gray-500">
              to Erwan BOUVET, Léna Nicolai • Escalenta
            </div>
          </div>
          <div className="text-xs text-gray-500">Mar 4, 2023, 4:11 PM</div>
        </div>
      </div>
      
      <div className="p-6 text-sm">
        <p className="mb-4">Hello Erwan,</p>
        <p className="mb-4">Voici mes exports pour la maquette.</p>
        <p className="mb-4 text-blue-500 underline">https://escalenta.fromsmash.com/zff_LrDaW-ct</p>
        <p className="mb-4">Je te les ai numérotés pour que tu puisses les empiler dans le bon ordre.</p>
        <p className="mb-4">Dis-moi si tout est pour toi.</p>
        <p className="mb-4">À bientôt,</p>
        <p>Clio</p>
      </div>
      
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="flex space-x-2">
          <Button className="bg-blue-600 text-white text-xs flex items-center gap-1 py-1 h-auto">
            <Mail size={14} /> 
            Reply
          </Button>
          <Button variant="outline" className="text-xs flex items-center gap-1 py-1 h-auto">
            More actions
          </Button>
        </div>
      </div>
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
        
        {/* Feature callouts */}
        <FeatureCallout 
          title="AI powered labels" 
          description="to instinctively sort your mails and files"
          position="top-[20%] left-0 -translate-x-1/2 lg:translate-x-0"
          color="bg-purple-600"
        />
        
        <FeatureCallout 
          title="Built in drive" 
          description="for your attachments - no more back and forth!"
          position="top-[35%] left-0 -translate-x-1/2 lg:translate-x-0"
          color="bg-purple-200/80"
          textColor="text-purple-900"
        />
        
        <FeatureCallout 
          title="Simplified unsubscribe" 
          description="to spam"
          position="bottom-[30%] left-0 -translate-x-1/2 lg:translate-x-0"
          color="bg-purple-600"
        />
        
        <FeatureCallout 
          title="Use your own email adress" 
          description="or create your Zest email"
          position="top-[20%] right-0 translate-x-1/2 lg:translate-x-0"
          color="bg-purple-200/80"
          textColor="text-purple-900"
        />
        
        <FeatureCallout 
          title="Instinctive shortcuts" 
          description="to navigate, answer, sort, send in no time"
          position="top-[45%] right-0 translate-x-1/2 lg:translate-x-0"
          color="bg-purple-600"
        />
        
        <FeatureCallout 
          title="AI agent" 
          description="to write, answer, correct with the touch of a key"
          position="bottom-[35%] right-0 translate-x-1/2 lg:translate-x-0"
          color="bg-purple-200/80"
          textColor="text-purple-900"
        />
        
        <FeatureCallout 
          title="File preview, summary and edit" 
          description="directly in your mail"
          position="bottom-[15%] right-0 translate-x-1/2 lg:translate-x-0"
          color="bg-purple-200/80"
          textColor="text-purple-900"
        />
        
        {/* Email interface mockup */}
        <div className="relative max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-gray-200 bg-white">
          {/* Top navigation */}
          <div className="bg-white border-b border-gray-200 flex items-center justify-between p-2 px-4">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-500 rounded-md flex items-center justify-center text-white mr-2">
                Z
              </div>
              <div className="relative mx-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                  <Search size={16} />
                </div>
                <input 
                  type="text" 
                  className="py-1.5 px-4 pl-10 text-sm border border-gray-200 rounded-md w-72 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Search in inbox"
                />
              </div>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <span className="font-medium text-blue-500">All (19)</span>
              <span>Personal (6)</span>
              <span>Newsletters</span>
              <span>Security</span>
              <span>Meetings (2)</span>
              <span>Invoices</span>
              <span>Outreach</span>
              <span>Appels d'offre</span>
              <span>Saint-Denis (2)</span>
            </div>
          </div>
          
          <div className="flex h-[450px]">
            {/* Left sidebar with emails list */}
            <div className="w-2/5 border-r border-gray-200 overflow-y-auto bg-gray-50">
              <EmailRow 
                sender="Clio Gavagni" 
                subject="Exports for maquette shared." 
                time="4:11 PM"
                label="Personal"
                isUnread={true}
              />
              
              <EmailRow 
                sender="dvaenv@dvaenv.com" 
                subject="Inquiry about 3D database for Frēks." 
                time="2:36 PM" 
                label="Personal"
              />
              
              <EmailRow 
                sender="Stéphane Levy" 
                subject="Comprend le travail de Céleste." 
                time="2:20 PM" 
                label="Personal"
              />
              
              <EmailRow 
                sender="Smash" 
                subject="Fichier envoyé via Smash." 
                time="12:15 PM" 
                label="Newsletters"
                labelColor="bg-blue-100"
              />
              
              <EmailRow 
                sender="Stéphane Levy" 
                subject="# Propose une vidéoconférence pour le film." 
                time="11:30 AM" 
                label="Développement"
                labelColor="bg-green-100"
              />
              
              <EmailRow 
                sender="dvaenv@dvaenv.com" 
                subject="Confirmation de réception du dossier." 
                time="10:30 AM" 
                label="Personal"
              />
              
              <EmailRow 
                sender="Schafer Julie" 
                subject="Clic retaillé, touch désactivé." 
                time="10:04 AM" 
                label="Saint-Denis"
                labelColor="bg-orange-100"
              />
              
              <EmailRow 
                sender="Ponctuation Monumentale" 
                subject="Léna received documents, will review soon." 
                time="10:00 AM" 
                label="Appels d'offre"
                labelColor="bg-teal-100"
              />
              
              <EmailRow 
                sender="Schafer Julie" 
                subject="# Fiche remplie envoyée à Léna." 
                time="9:56 AM" 
                label="Saint-Denis"
                labelColor="bg-orange-100"
              />
              
              <EmailRow 
                sender="Mélanie Gerin" 
                subject="Disponible mardi pour discuter ensemble." 
                time="8:37 AM" 
                label="Personal"
              />
              
              <EmailRow 
                sender="Smash" 
                subject="Fichier envoyé via Smash." 
                time="Mar 1" 
                label="Newsletters"
                labelColor="bg-blue-100"
              />
            </div>
            
            {/* Right panel with email details */}
            <div className="w-3/5">
              <EmailDetail />
            </div>
          </div>
          
          {/* Bottom pagination */}
          <div className="border-t border-gray-200 p-2 text-xs flex justify-between items-center bg-gray-50">
            <div className="text-gray-500">0 - 25 of 386</div>
            <div className="flex items-center space-x-1 text-gray-500">
              <button className="p-1 hover:bg-gray-200 rounded"><ArrowLeft size={16} /></button>
              <button className="p-1 hover:bg-gray-200 rounded"><ArrowRight size={16} /></button>
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
