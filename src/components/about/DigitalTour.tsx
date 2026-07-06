"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Info, MapPin } from "lucide-react";

type Room = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const rooms: Room[] = [
  {
    id: "entrance",
    title: "Reception & Entrance",
    description: "The grand entrance to the D-Arc Experience Centre, featuring premium Italian marble and bespoke lighting design.",
    image: "/assets/projects/modern-residential-architects-kannur.jpeg",
  },
  {
    id: "living-room",
    title: "Luxury Living Room Setup",
    description: "A fully realized living space demonstrating our expertise in custom furniture, ambient lighting, and acoustics.",
    image: "/assets/projects/interior-designers-kannur-home.webp",
  },
  {
    id: "modular-kitchen",
    title: "Premium Modular Kitchen",
    description: "State-of-the-art modular kitchen displays featuring Hettich hardware, quartz countertops, and smart storage.",
    image: "/assets/projects/interior-designers-kannur-office.jpeg",
  },
  {
    id: "material-library",
    title: "Material & Finish Library",
    description: "Explore hundreds of premium laminates, veneers, fabrics, and tiles to perfectly customize your project.",
    image: "/assets/projects/commercial-architects-kannur.jpeg",
  },
];

export function DigitalTour() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedRoom) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedRoom]);

  return (
    <div className="w-full relative py-12">
      {/* 3D Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[1000px]">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, rotateY: 20, z: -100 }}
            whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotateY: -5, z: 20 }}
            onClick={() => setSelectedRoom(room)}
            className="group relative h-80 rounded-sm overflow-hidden cursor-pointer shadow-2xl border border-white/10"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={room.image}
              alt={room.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 p-6 transform translate-z-10">
              <div className="flex items-center text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">
                <MapPin className="w-3 h-3 mr-1" /> View Room
              </div>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-brand-gold transition-colors">
                {room.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded 3D View Overlay */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black/95 backdrop-blur-md p-4 md:p-8"
          >
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-brand-gold transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              layoutId={`room-${selectedRoom.id}`}
              initial={{ scale: 0.9, y: 20, rotateX: 10 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.9, y: 20, rotateX: -10 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl h-[70vh] md:h-[85vh] rounded-sm overflow-hidden shadow-2xl ring-1 ring-white/20"
            >
              <Image
                src={selectedRoom.image}
                alt={selectedRoom.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-3xl"
              >
                <div className="flex items-center text-brand-gold mb-4">
                  <Info className="w-5 h-5 mr-2" />
                  <span className="font-bold uppercase tracking-widest text-sm">Experience Centre Tour</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                  {selectedRoom.title}
                </h2>
                <p className="text-brand-grey text-lg md:text-xl leading-relaxed">
                  {selectedRoom.description}
                </p>
                
                <div className="mt-8 flex gap-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = rooms.findIndex(r => r.id === selectedRoom.id);
                      const prevRoom = rooms[(currentIndex - 1 + rooms.length) % rooms.length];
                      setSelectedRoom(prevRoom);
                    }}
                    className="px-6 py-2 border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold transition-colors text-sm uppercase tracking-widest"
                  >
                    Previous Room
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = rooms.findIndex(r => r.id === selectedRoom.id);
                      const nextRoom = rooms[(currentIndex + 1) % rooms.length];
                      setSelectedRoom(nextRoom);
                    }}
                    className="px-6 py-2 bg-brand-gold text-brand-black font-bold hover:bg-white transition-colors text-sm uppercase tracking-widest"
                  >
                    Next Room
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
