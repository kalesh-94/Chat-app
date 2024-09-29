import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Phone, Users, UserCircle2, PlusCircle, Smile, Paperclip, Mic, Send } from "lucide-react"

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-800">
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold">Chats</h1>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          {/* Chat list items */}
          {['Kalesh here', 'Uber Cars', 'Safiya Fareena', 'Robert Allen', 'Epic Game', 'Scott Franklin', 'Muhammed', 'Innovative Online Shopping', 'Micheal Scott'].map((name, index) => (
            <div key={index} className="flex items-center p-4 hover:bg-gray-800">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={name} />
                <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="font-medium">{name}</p>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet...</p>
              </div>
            </div>
          ))}
        </ScrollArea>
        {/* Bottom navigation */}
        <div className="flex justify-around p-4 border-t border-gray-800">
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Phone className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <UserCircle2 className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Users className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Kalesh here" />
              <AvatarFallback>GA</AvatarFallback>
            </Avatar>
            <h2 className="ml-4 text-lg font-semibold">Kalesh here</h2>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <PlusCircle className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                <p>Hi, is the watch still up for sale?</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                <p>Yes, it's available.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                <p>Awesome! Can I see a couple of pictures?</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                <p>Sending them over now.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                <p>Thanks! Looks good.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                <p>I'll take it. Can you ship it?</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                <p>Absolutely. Just send your address, and I'll ship it out.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                <p>Great, I'll send it now. Thanks!</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                <p>Thank you!</p>
              </div>
            </div>
          </div>
        </ScrollArea>
        
        {/* Message input */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center bg-gray-800 rounded-lg">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <PlusCircle className="h-6 w-6" />
            </Button>
            <Input 
              className="flex-1 bg-transparent border-none focus:ring-0" 
              placeholder="Type your message..." 
            />
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Smile className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Paperclip className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Mic className="h-6 w-6" />
            </Button>
            <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
              <Send className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}