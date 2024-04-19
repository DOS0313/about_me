import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export interface IAnimTextProps {
  delay: number;
}

export default function AnimText({ delay }: IAnimTextProps) {
  const [done, setDone] = useState(false);
  const baseText = `
DOS(C) 2024 Made by DO_S

D-Board B480-R BIOS Revision 0313
CPU: AMD Ryzen 5 3600 6-Core Processor
 Speed: 3600MHz

Total Memory: 32768MB (DDR4-2133)

USB Devices total: 0 Drive, 1 Keyboards, 1 Mouse, 0 Hubs

Detected ATA/ATAPI Devices...
SATA6G_1: Samsung SSD 970 SCSI Disk Device
SATA6G_2: ST2000DM008-2U81 SCSI Disk Device



Please enter setup to recover BIOS setting.
When RAID configuration was built. ensure to set SATA Configuration to RAID mode.
Press F1 to Run SETUP
`;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      duration: 3,
      delay: delay,
    });

    controls.then(() => setDone(true));

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <span style={{ whiteSpace: 'pre-wrap' }}>
      <motion.span>{displayText}</motion.span>
      {done && (
        <>
          <br /> <br />
        </>
      )}
    </span>
  );
}
