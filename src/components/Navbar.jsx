/* Add these styles to your CSS file */
.neo-glass {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.neo-button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.neo-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 15s ease infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.glow-red {
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
}

.hover\:shadow-glow:hover {
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
}

.text-shadow-glow {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

.drop-shadow-2xl {
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
}
