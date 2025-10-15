import 'materialize-css';
import './Chatbot.css';
import React, { useState } from 'react'
import { useChatBot } from '../contexts/chatbotContext'
import { containsHTML, Message as formattedMesage } from '../utils/extractHtml'
function Chatbot() {
  const [form, setForm] = useState({ userInput: '' })
  const [isChatBotOpen, setChatBotOpen] = useState(false)
  const [main_messages, setMainMessages] = useState<{ sender: string, text: string }[]>([])

  const { fetchMessage } = useChatBot();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.userInput.trim()) return

    // Add user message to state
    setMainMessages(prev => [...prev, { sender: 'You', text: form.userInput }])

    // Fetch response from backend
    const reply = await fetchMessage(form.userInput);
    
    // Add assistant reply to state
    setMainMessages(prev => [...prev, { sender: 'Assistant', text: reply?.data.message || "" }])

    // Clear input
    setForm({ userInput: '' })
  }


  const toggleBot = () => {
    setChatBotOpen((prev) => !prev);
  };


  return (
    
    <div className='chatbot'>
    <div className={`bot-form scale-transition ${isChatBotOpen ? '' : 'scale-out'}`}>

    
    {/* Header */}
    <h4 className="bot-header">Property Assistant</h4>
    
    {/* Scrollable messages */}
    <div className="messageLog">
      {main_messages.map((msg, index) => (
        <div key={index} className={msg.sender === 'You' ? 'user-message' : 'ai-message'}>
          <h6>{msg.sender}</h6>
          <p>{containsHTML(msg.text) ? formattedMesage(msg.text) : msg.text}</p>
        </div>
      ))}
    </div>

    {/* Input form at bottom */}
    <form className="bot-form-input" onSubmit={handleSubmit}>
      <input
        type="text"
        name="userInput"
        value={form.userInput}
        onChange={handleChange}
        placeholder="What can I help you with?"
      />
    </form>
</div>

   
    <div className='bot-btn'>
        <span  onClick={toggleBot} className='btn-floating pulse teal'>
          <i className='material-icons'>{isChatBotOpen ? 'expand_more' :'chat'}</i>
        </span>
    </div>
        
    </div>
  )
}

export default Chatbot
