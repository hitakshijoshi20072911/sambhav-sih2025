import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Mic } from "lucide-react";

const SymptomChecker = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡੇ ਲੱਛਣਾਂ ਬਾਰੇ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ। ਕੀ ਤਕਲੀਫ਼ ਹੈ?' }
  ]);
  const [input, setInput] = useState('');

  const commonSymptoms = [
    'ਬੁਖਾਰ (Fever)', 'ਖੰਘ (Cough)', 'ਸਿਰ ਦਰਦ (Headache)', 
    'ਪੇਟ ਦਰਦ (Stomach Pain)', 'ਜ਼ੁਕਾਮ (Cold)'
  ];

  const handleSymptomClick = (symptom: string) => {
    setMessages(prev => [...prev, 
      { type: 'user', text: symptom },
      { type: 'bot', text: `${symptom} ਦੇ ਲੱਛਣ ਬਾਰੇ ਹੋਰ ਦੱਸੋ। ਕਿੰਨੇ ਦਿਨਾਂ ਤੋਂ ਇਹ ਸਮੱਸਿਆ ਹੈ?` }
    ]);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, 
        { type: 'user', text: input },
        { type: 'bot', text: 'ਮੈਂ ਸਮਝ ਗਿਆ। ਤੁਹਾਨੂੰ ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ। ਕੀ ਤੁਸੀਂ ਆਨਲਾਈਨ ਸਲਾਹ ਲੈਣਾ ਚਾਹੁੰਦੇ ਹੋ?' }
      ]);
      setInput('');
    }
  };

  return (
    <Card className="h-96 flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-healthcare-primary" />
          AI Symptom Checker
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-2 mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs p-2 rounded-lg text-sm ${
                message.type === 'user' 
                  ? 'bg-healthcare-primary text-white' 
                  : 'bg-muted text-foreground'
              }`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
        
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1">
            {commonSymptoms.map((symptom, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="cursor-pointer hover:bg-healthcare-primary hover:text-white"
                onClick={() => handleSymptomClick(symptom)}
              >
                {symptom}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ਆਪਣੇ ਲੱਛਣ ਦੱਸੋ..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button size="icon" variant="outline">
              <Mic className="w-4 h-4" />
            </Button>
            <Button size="icon" onClick={handleSend}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SymptomChecker;