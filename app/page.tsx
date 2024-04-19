import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col px-8 py-9">
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
      <pre className="text-2xl font-IBM3270">
{`
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
`}
      </pre>
    </main>
  );
}
