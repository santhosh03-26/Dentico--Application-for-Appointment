import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import appointmentImg from "@assets/generated_images/Dentist_patient_consultation_scene_3048d9f5.png";

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    treatment: "",
    message: "",
  });
  const { toast } = useToast();

  const createAppointmentMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/appointments", data);
      return await response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Appointment Requested!",
        description: `We'll contact you shortly to confirm your appointment for ${data.appointment.date} at ${data.appointment.time}.`,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        treatment: "",
        message: "",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to book appointment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createAppointmentMutation.mutate(formData);
  };

  return (
    <section className="py-16 md:py-24 bg-background" id="appointment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={appointmentImg}
                alt="Dentist consulting with patient"
                className="w-full h-auto object-cover"
                data-testid="img-appointment"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Changing the way you visit the Dentist
                </h3>
                <p className="text-sm text-muted-foreground">
                  Book your appointment today and experience modern dental care
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                data-testid="text-appointment-heading"
              >
                Book an Appointment
              </h2>
              <p className="text-lg text-muted-foreground">
                Schedule your visit and take the first step towards a healthier smile
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    data-testid="input-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="treatment">Treatment Type *</Label>
                  <Select value={formData.treatment} onValueChange={(value) => setFormData({ ...formData, treatment: value })}>
                    <SelectTrigger id="treatment" data-testid="select-treatment">
                      <SelectValue placeholder="Select treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="invisalign">Invisalign</SelectItem>
                      <SelectItem value="space-maintainers">Space Maintainers</SelectItem>
                      <SelectItem value="lingual-braces">Lingual Braces</SelectItem>
                      <SelectItem value="ceramic-braces">Ceramic Braces</SelectItem>
                      <SelectItem value="general-checkup">General Checkup</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date *</Label>
                  <div className="relative">
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      data-testid="input-date"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time *</Label>
                  <div className="relative">
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                      data-testid="input-time"
                    />
                    <Clock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Any special requests or concerns..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl"
                data-testid="button-submit-appointment"
                disabled={createAppointmentMutation.isPending}
              >
                {createAppointmentMutation.isPending ? (
                  <>Processing...</>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Request Appointment
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We'll contact you within 24 hours to confirm your appointment
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
