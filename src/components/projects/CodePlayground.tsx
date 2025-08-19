import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, RotateCcw } from "lucide-react";

const CodePlayground = () => {
  const [htmlCode, setHtmlCode] = useState(`<div class="container">
  <h1>Hello World!</h1>
  <p>Welcome to the code playground</p>
  <button onclick="changeColor()">Click me!</button>
</div>`);

  const [cssCode, setCssCode] = useState(`.container {
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #3b82f6;
  margin-bottom: 10px;
}

button {
  background: #3b82f6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background: #2563eb;
}`);

  const [jsCode, setJsCode] = useState(`function changeColor() {
  const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  const h1 = document.querySelector('h1');
  h1.style.color = randomColor;
  
  const button = document.querySelector('button');
  button.style.background = randomColor;
}`);

  const [output, setOutput] = useState("");

  const runCode = () => {
    const completeCode = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
    setOutput(completeCode);
  };

  const resetCode = () => {
    setHtmlCode(`<div class="container">
  <h1>Hello World!</h1>
  <p>Welcome to the code playground</p>
  <button onclick="changeColor()">Click me!</button>
</div>`);
    setCssCode(`.container {
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #3b82f6;
  margin-bottom: 10px;
}

button {
  background: #3b82f6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background: #2563eb;
}`);
    setJsCode(`function changeColor() {
  const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  const h1 = document.querySelector('h1');
  h1.style.color = randomColor;
  
  const button = document.querySelector('button');
  button.style.background = randomColor;
}`);
    setOutput("");
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4">
        <Button onClick={runCode} className="flex items-center gap-2">
          <Play className="h-4 w-4" />
          Run Code
        </Button>
        <Button onClick={resetCode} variant="outline" className="flex items-center gap-2">
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Code Editor */}
        <div className="space-y-4">
          <Tabs defaultValue="html" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
              <TabsTrigger value="js">JavaScript</TabsTrigger>
            </TabsList>
            
            <TabsContent value="html">
              <Textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                className="min-h-[200px] font-mono text-sm"
                placeholder="Enter HTML code here..."
              />
            </TabsContent>
            
            <TabsContent value="css">
              <Textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                className="min-h-[200px] font-mono text-sm"
                placeholder="Enter CSS code here..."
              />
            </TabsContent>
            
            <TabsContent value="js">
              <Textarea
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                className="min-h-[200px] font-mono text-sm"
                placeholder="Enter JavaScript code here..."
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Output */}
        <div className="space-y-2">
          <h4 className="font-semibold">Preview</h4>
          <div className="border border-border rounded-lg bg-background">
            {output ? (
              <iframe
                srcDoc={output}
                className="w-full h-[250px] rounded-lg"
                title="Code Output"
                sandbox="allow-scripts"
              />
            ) : (
              <div className="w-full h-[250px] flex items-center justify-center text-muted-foreground bg-muted/30 rounded-lg">
                Click "Run Code" to see the preview
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;