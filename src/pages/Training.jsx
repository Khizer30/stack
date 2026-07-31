import { motion } from "framer-motion";
import VertexLandingPage from "../../training/src/TrainingsAndWorkshops";

const Training = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
      <VertexLandingPage />
    </motion.div>
  );
};

export default Training;
