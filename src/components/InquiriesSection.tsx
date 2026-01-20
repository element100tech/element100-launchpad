import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const InquiriesSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 1-2 business days.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="inquiries" className="section-padding dot-grid-bg">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-2 mb-4 text-center">Get In Touch</h2>
          <p className="text-body text-center mb-12">
            Interested in partnering with us or learning more about our technology? 
            Fill out the form below and we'll get back to you promptly.
          </p>

          <form onSubmit={handleSubmit} className="card-glass space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-foreground">First Name *</Label>
                <Input 
                  id="firstName" 
                  required 
                  className="bg-white/10 border-white/20 text-foreground placeholder:text-foreground/50 focus:border-white/40"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground">Last Name *</Label>
                <Input 
                  id="lastName" 
                  required 
                  className="bg-white/10 border-white/20 text-foreground placeholder:text-foreground/50 focus:border-white/40"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email Address *</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                className="bg-white/10 border-white/20 text-foreground placeholder:text-foreground/50 focus:border-white/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel" 
                className="bg-white/10 border-white/20 text-foreground placeholder:text-foreground/50 focus:border-white/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-foreground">Company/Organization</Label>
              <Input 
                id="company" 
                className="bg-white/10 border-white/20 text-foreground placeholder:text-foreground/50 focus:border-white/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interest" className="text-foreground">I'm interested in *</Label>
              <Select required>
                <SelectTrigger className="bg-white/10 border-white/20 text-foreground focus:border-white/40">
                  <SelectValue placeholder="Please select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="investment">Investment Opportunities</SelectItem>
                  <SelectItem value="partnership">Strategic Partnership</SelectItem>
                  <SelectItem value="careers">Career Opportunities</SelectItem>
                  <SelectItem value="licensing">Technology Licensing</SelectItem>
                  <SelectItem value="procurement">Procurement/Supply</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">Message *</Label>
              <Textarea 
                id="message" 
                required 
                rows={4}
                className="bg-white/10 border-white/20 text-foreground placeholder:text-foreground/50 focus:border-white/40 resize-none"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-white text-primary-foreground hover:bg-white/90 font-semibold"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <p className="text-small text-center mt-6">
            We typically respond within 1-2 business days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InquiriesSection;
