function getBotResponse(userInput) {
  const input = userInput.toLowerCase();

  if (input.includes("who are you") || input.includes("about")) {
    return "I am an Associate Consultant specializing in Oracle Fusion HCM with a strong interest in AI and Agentic systems.";
  }

  if (input.includes("skills")) {
    return "My core skills include Oracle Fusion HCM, Fast Formulas, and AI tooling & Agentic AI systems.";
  }

  if (input.includes("ai")) {
    return "I actively use AI for learning, building websites, creating AI agents, and generating images for social media.";
  }

  if (input.includes("achievement") || input.includes("problem")) {
    return "I solved a client problem by configuring a time-based absence rule using Fast Formulas that was previously considered not possible.";
  }

  if (input.includes("goal") || input.includes("future")) {
    return "My goal is to build a flexible career, help people using technology, and eventually build a company generating ₹90 crore annually.";
  }

  return "I can answer questions about my skills, experience, AI work, achievements, or career goals.";
}
