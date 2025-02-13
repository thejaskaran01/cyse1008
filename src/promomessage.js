import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function PromoMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          background: "linear-gradient(135deg, #2196F3, #21CBF3)",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "18px",
          fontWeight: "bold",
          boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
          mt: 2,
        }}
      >
        🚀 Special Offer: Get 20% Off Today!
      </Box>
    </motion.div>
  );
}
