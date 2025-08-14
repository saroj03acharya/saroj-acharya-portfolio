// contact.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Invalid email format";
    if (!formData.contact.trim()) return "Contact number is required";
    if (!/^[0-9+\-\s()]+$/.test(formData.contact)) return "Invalid contact number";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const submitContact = async (data: typeof formData) => {
    // Google Apps Script web app URL
    const url = "https://script.google.com/macros/s/AKfycbw9ihTgXmUISUylRlEaWvur41V4ETrVi346In5u2dBVQNaot6z5frA_S6C_wZIoeLzr/exec";

    // Add timestamp or any additional fields you want
    const payload = { ...data, timestamp: new Date().toISOString() };

    // Use a "simple" request (text/plain) to avoid CORS preflight in the browser.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    let parsed: any = null;
    try {
      parsed = JSON.parse(text);
    } catch (err) {
      parsed = { raw: text };
    }

    if (!res.ok) {
      return Promise.reject(parsed);
    }

    return parsed;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast({
        title: "Validation Error",
        description: error,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus("sending"); // <-- show "Hold — Your message is sending"

    try {
      const result = await submitContact(formData);

      // Show success in UI
      setStatus("success"); // <-- show "Your message was sent successfully"
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", contact: "", message: "" });
      console.log("submit result:", result);

      // Auto-clear success status after 4 seconds
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: any) {
      console.error("submit error:", err);
      setStatus("error");
      const serverMsg =
        (err && err.message) ||
        (err && err.status) ||
        (err && err.raw) ||
        "Failed to send message. Please try again.";

      toast({
        title: "Error",
        description: String(serverMsg),
        variant: "destructive",
      });

      // Auto-clear error after 6 seconds
      setTimeout(() => setStatus("idle"), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact</h2>

      {/* Status banner */}
      <div className="max-w-2xl mx-auto mb-4">
        {status === "sending" && (
          <div className="p-3 rounded-md bg-yellow-50 border border-yellow-200 text-yellow-800 text-center">
            Hold — Your message is sending
          </div>
        )}
        {status === "success" && (
          <div className="p-3 rounded-md bg-green-50 border border-green-200 text-green-800 text-center">
            Your message was sent successfully
          </div>
        )}
        {status === "error" && (
          <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-800 text-center">
            Something went wrong while sending your message
          </div>
        )}
      </div>

      <Card className="max-w-2xl mx-auto shadow-card card-gradient">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">Contact Number *</Label>
              <Input
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="+977 98XXXXXXXX"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hello..."
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
