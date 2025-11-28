import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// Note: In a production environment, API calls should be proxied through a backend 
// to keep the API KEY secure. For this demo, we use the env variable directly.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Eres "OsteoBot", el asistente virtual de la consulta de "Osteopatía Eduardo Callejo".
Tu objetivo es ayudar a los pacientes a resolver dudas básicas y animarles a contactar por WhatsApp o teléfono.

Información Clave de la Clínica:
- Nombre: Osteopatía Eduardo Callejo.
- Especialista: Eduardo Callejo.
- Ubicación: Plaza Santa Cristina 4, 28011 Madrid (Zona Puerta del Ángel).
- Teléfono/WhatsApp: 676 435 634.
- Email: eduardocvk@gmail.com.
- Horario: Lunes a Viernes de 16:00 a 21:00.
- Servicios: Osteopatía Estructural (espalda, cuello), Visceral (digestivo), Craneal (estrés, mandíbula/bruxismo), y Deportiva.

Reglas de Comportamiento:
1. Sé muy amable, profesional y cercano.
2. Si el usuario menciona dolor agudo, recomiéndale pedir cita para valoración.
3. SIEMPRE prioriza el contacto por WhatsApp: "Puedes escribirnos directamente al WhatsApp 676 435 634 para una respuesta rápida".
4. Habla siempre en Español.
5. Respuestas cortas (máximo 3 frases).
`;

let chatSession: Chat | null = null;

export const getChatResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "El sistema de chat está en mantenimiento. Por favor, escríbenos al WhatsApp 676 435 634.";
  }

  try {
    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
    }

    const response: GenerateContentResponse = await chatSession.sendMessage({ 
      message: userMessage 
    });
    
    return response.text || "Disculpa, no te he entendido. ¿Puedes contactarnos por WhatsApp?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Estoy teniendo problemas de conexión. Por favor, llama o escribe al 676 435 634.";
  }
};