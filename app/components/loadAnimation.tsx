"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimText from "./animText";

export default function LoadAnimation() {
  return (
    <div className="flex flex-col px-8 py-9">
      <div className="flex flex-row space-x-2.5">
        <Image
          src="/images/cube-loop.gif"
          alt="Loading Animation"
          width={128}
          height={128}
        />
        <div className="flex flex-row items-center space-x-2.5">
          <p className="text-8xl font-IBM3270">DOS</p>
          <p className="text-3xl font-IBM3270">v.20240414</p>
        </div>
      </div>
      <motion.span className="text-2xl font-IBM3270">
        <AnimText delay={1} />
      </motion.span>
    </div>
  );
};