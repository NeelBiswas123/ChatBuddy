# ChatBuddy - A Public Group Chat Platform  

Welcome to **ChatBuddy**—a lightweight, real-time group chat app that lets users discuss various topics instantly and effortlessly. Whether it's **General, Sports, or Tech**, this platform enables seamless conversations without requiring account creation. Just **enter a name, join the chat, and start engaging!** 🚀  

## ✨ Features  
- **Instant Chat** - No sign-ups, no hassle! Just enter a name and start talking.  
- **Fast & Lightweight** - Powered by **Socket.io**, ensuring smooth real-time interactions.  
- **Topic-Based Discussion** - Join conversations across multiple themes.  
- **No Data Retention** - No servers, meaning no logs, keeping things fresh and transient.  

## 🔧 Prerequisites  
Before you get started, ensure you have the following installed on your directory:  
```bash
npm init
npm install socket.io
node / nodemon
```
Additionally, if you're using **VS Code**, installing the **Live Server** extension will enhance your experience.

## 🚀 How to Set Up and Run  
1. **Clone or Fork** the repository.  
2. Navigate to the project directory in the terminal and **install dependencies**: just by in bash paste
   ```bash
   npm install
   ```
3. Move to the **Server** folder using:  
   ```bash
   cd ./Server
   ```
4. Start the server with:  
   ```bash
   nodemon index.js  # Or simply node index.js
   ```
5. Open **index.html** (preferably with Live Server) from the base directory.  
6. Ensure that `index.js` is running, as **index.html alone cannot activate chat functionalities**.  

## ❗ Known Issue  
Currently, **ChatBuddy** does not use a deployment server. As a result, once you exit the chat, your messages will not be retained. Future updates might include **persistent chats** and additional features!  

## 🤝 Contribute  
Feel free to modify, enhance, or add features—your contributions are always welcome! If you improve something, let me know. **I’d love to see what you create!**  

Happy chatting! 🚀💬  
