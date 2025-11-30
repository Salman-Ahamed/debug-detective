import ChatInterface from "@/components/chat-interface";

const DetectivePage = () => {
  return (
    <main className="fixed inset-0 w-full bg-background pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary rounded-full opacity-10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-500 rounded-full opacity-10 blur-[130px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none" />

      {/* Chat Interface */}
      <div className="relative z-10 h-full pb-4 pt-4">
        <ChatInterface />
      </div>
    </main>
  );
};

export default DetectivePage;
