import { motion, AnimatePresence, MotionConfig } from "framer-motion";

export default function Comp() {
  return (
    <>
      <motion.div
        draggable
        className="w-[150px] h-[150px] bg-black"
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "70deg" }}
        exit={{ rotate: "0deg" }}
        variants={{
          changeColor: { background: "red" },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        whileTap="changeColor"
      ></motion.div>
    </>
  );
}
