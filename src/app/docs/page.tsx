const DocsPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0a0a14] via-[#0f0520] to-[#050a14] text-slate-100 pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-6">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f3ff] to-[#bc13fe]">
            Documentation
          </span>
        </h1>
        <p className="text-xl text-slate-400 mb-12">
          Learn how Debug Detective works and how to get the most out of it.
        </p>

        <div className="space-y-12">
          {/* How it Works */}
          <section className="p-8 rounded-2xl bg-[#1a1b26]/90 border border-[#00f3ff]/20 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">🔍</span>
              How It Works
            </h2>
            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  Step 1: Parse Error
                </h3>
                <p>
                  Paste your error message and code snippet. Our AI
                  automatically extracts the error message, code context, stack
                  trace, and identifies the programming language.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  Step 2: Analyze Root Cause
                </h3>
                <p>
                  The AI analyzes the error to determine the technical root
                  cause and formulates hypotheses about what went wrong.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  Step 3-4: Research Solutions
                </h3>
                <p>
                  Searches StackOverflow, GitHub, and official documentation to
                  find similar errors and proven solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  Step 5: Synthesize Solution
                </h3>
                <p>
                  Combines root cause analysis and research findings to create a
                  comprehensive solution with fixed code and explanations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  Step 6: Prevention Tips
                </h3>
                <p>
                  Provides mentoring advice on how to prevent similar issues in
                  the future.
                </p>
              </div>
            </div>
          </section>

          {/* Usage Examples */}
          <section className="p-8 rounded-2xl bg-[#1a1b26]/90 border border-[#00f3ff]/20 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">💡</span>
              Usage Examples
            </h2>
            <div className="space-y-8">
              {/* Basic Example */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <h3 className="text-xl font-bold text-green-400">
                    Basic Example
                  </h3>
                </div>
                <div className="bg-black/50 p-4 rounded-lg font-mono text-sm border border-green-500/20">
                  <div className="text-slate-300">
                    {`const numbers = [1, 2, 3];
console.log(numbers[5].toString());`}
                  </div>
                  <div className="text-red-400 mt-3 pt-3 border-t border-slate-700">
                    {`// Error:
// TypeError: Cannot read properties of undefined (reading 'toString')`}
                  </div>
                </div>
              </div>

              {/* Medium Example */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <h3 className="text-xl font-bold text-yellow-400">
                    Medium Example
                  </h3>
                </div>
                <div className="bg-black/50 p-4 rounded-lg font-mono text-sm border border-yellow-500/20">
                  <div className="text-slate-300">
                    {`// api.js
async function fetchUserData(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);
  const data = await response.json();
  return data;
}

// App.jsx
useEffect(() => {
  const user = fetchUserData(123);
  console.log(user.name);
}, []);`}
                  </div>
                  <div className="text-red-400 mt-3 pt-3 border-t border-slate-700">
                    {`// Error:
// TypeError: Cannot read properties of undefined (reading 'name')
// Promise { <pending> }`}
                  </div>
                </div>
              </div>

              {/* Advanced Example */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <h3 className="text-xl font-bold text-red-400">
                    Advanced Example
                  </h3>
                </div>
                <div className="bg-black/50 p-4 rounded-lg font-mono text-sm border border-red-500/20">
                  <div className="text-slate-300">
                    {`// useAuth.ts
interface User { id: string; role: 'admin' | 'user'; }

const AuthContext = createContext<User | null>(null);

// ProtectedRoute.tsx
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useContext(AuthContext);
  
  if (user.role !== 'admin') {  // Line 12
    return <Navigate to="/unauthorized" />;
  }
  return <>{children}</>;
};`}
                  </div>
                  <div className="text-red-400 mt-3 pt-3 border-t border-slate-700">
                    {`// Error:
// TypeError: Cannot read properties of null (reading 'role')
//   at ProtectedRoute (ProtectedRoute.tsx:12:11)
//   at renderWithHooks (react-dom.development.js:14985)
//   at mountIndeterminateComponent (react-dom.development.js:17811)`}
                  </div>
                </div>
              </div>

              {/* CORS Error */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  <h3 className="text-xl font-bold text-orange-400">
                    🌐 CORS Error
                  </h3>
                </div>
                <div className="bg-black/50 p-4 rounded-lg font-mono text-sm border border-orange-500/20">
                  <div className="text-slate-300">
                    {`// Frontend - React App
const fetchData = async () => {
  const response = await fetch('https://api.example.com/users');
  const data = await response.json();
  return data;
};

// Calling from http://localhost:3000`}
                  </div>
                  <div className="text-red-400 mt-3 pt-3 border-t border-slate-700">
                    {`// Error:
// Access to fetch at 'https://api.example.com/users' from origin 
// 'http://localhost:3000' has been blocked by CORS policy: 
// No 'Access-Control-Allow-Origin' header is present on the 
// requested resource.`}
                  </div>
                </div>
              </div>

              {/* Infinite Loop */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                  <h3 className="text-xl font-bold text-purple-400">
                    🔄 React Infinite Loop
                  </h3>
                </div>
                <div className="bg-black/50 p-4 rounded-lg font-mono text-sm border border-purple-500/20">
                  <div className="text-slate-300">
                    {`// ProductList.jsx
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const filtered = products.filter(p => p.category === filter);
    setProducts(filtered);  // This triggers re-render!
  }, [products, filter]);   // products in dependency causes loop

  return <div>{products.map(p => <Product key={p.id} {...p} />)}</div>;
};`}
                  </div>
                  <div className="text-red-400 mt-3 pt-3 border-t border-slate-700">
                    {`// Error:
// Warning: Maximum update depth exceeded. This can happen when a 
// component calls setState inside useEffect, but useEffect either 
// doesn't have a dependency array, or one of the dependencies 
// changes on every render.`}
                  </div>
                </div>
              </div>

              {/* Memory Leak */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                  <h3 className="text-xl font-bold text-pink-400">
                    💾 Memory Leak
                  </h3>
                </div>
                <div className="bg-black/50 p-4 rounded-lg font-mono text-sm border border-pink-500/20">
                  <div className="text-slate-300">
                    {`// Dashboard.jsx
const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await fetchDashboardStats();
      setStats(data);
    }, 5000);
    
    // Missing cleanup! Should return () => clearInterval(interval);
  }, []);

  return <div>{stats?.totalUsers} users online</div>;
};`}
                  </div>
                  <div className="text-red-400 mt-3 pt-3 border-t border-slate-700">
                    {`// Error:
// Warning: Can't perform a React state update on an unmounted 
// component. This is a no-op, but it indicates a memory leak in 
// your application. To fix, cancel all subscriptions and 
// asynchronous tasks in a useEffect cleanup function.`}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="p-8 rounded-2xl bg-[#1a1b26]/90 border border-[#00f3ff]/20 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">🎯</span>
              Best Practices
            </h2>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <div>
                  <strong>Include the full error message:</strong> Don&apos;t
                  truncate error messages. The more context, the better.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <div>
                  <strong>Add relevant code:</strong> Include the code where the
                  error occurs, not just the stack trace.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <div>
                  <strong>Provide context:</strong> Mention what you were trying
                  to do when the error occurred.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <div>
                  <strong>Be specific:</strong> Include version numbers of
                  libraries and frameworks when relevant.
                </div>
              </li>
            </ul>
          </section>

          {/* Supported Languages */}
          <section className="p-8 rounded-2xl bg-[#1a1b26]/90 border border-[#00f3ff]/20 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">🌐</span>
              Supported Languages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "JavaScript",
                "TypeScript",
                "Python",
                "Java",
                "C#",
                "Go",
                "Rust",
                "PHP",
                "Ruby",
                "Swift",
                "Kotlin",
                "C++",
              ].map((lang) => (
                <div
                  key={lang}
                  className="p-3 rounded-lg bg-[#00f3ff]/10 border border-[#00f3ff]/30 text-center"
                >
                  {lang}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
