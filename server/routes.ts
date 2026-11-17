import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/appointments", async (req, res) => {
    try {
      const validationResult = insertAppointmentSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          details: validationError.message 
        });
      }

      const appointment = await storage.createAppointment(validationResult.data);
      
      console.log(`New appointment created for ${appointment.name} on ${appointment.date} at ${appointment.time}`);
      
      return res.status(201).json({ 
        success: true, 
        appointment: {
          id: appointment.id,
          name: appointment.name,
          date: appointment.date,
          time: appointment.time,
          treatment: appointment.treatment,
        }
      });
    } catch (error) {
      console.error("Error creating appointment:", error);
      return res.status(500).json({ 
        error: "Failed to create appointment" 
      });
    }
  });

  app.get("/api/appointments", async (_req, res) => {
    try {
      const appointments = await storage.getAllAppointments();
      return res.json({ appointments });
    } catch (error) {
      console.error("Error fetching appointments:", error);
      return res.status(500).json({ 
        error: "Failed to fetch appointments" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
