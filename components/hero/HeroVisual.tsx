"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface HeroVisualProps {
  mousePosition: { x: number; y: number };
}

const techOrbit = [
  { label: "Kotlin", color: "#7F52FF", x: "-12%", y: "8%" },
  { label: "Compose", color: "#4285F4", x: "88%", y: "12%" },
  { label: "Firebase", color: "#FFCA28", x: "92%", y: "58%" },
  { label: "Hilt", color: "#FBBC04", x: "4%", y: "72%" },
  { label: "Room", color: "#EA4335", x: "78%", y: "82%" },
  { label: "Retrofit", color: "#00BCD4", x: "-6%", y: "42%" },
];

export default function HeroVisual({ mousePosition }: HeroVisualProps) {
  const mx = useMotionValue(mousePosition.x);
  const my = useMotionValue(mousePosition.y);
  const springX = useSpring(mx, { stiffness: 80, damping: 20 });
  const springY = useSpring(my, { stiffness: 80, damping: 20 });

  mx.set(mousePosition.x);
  my.set(mousePosition.y);

  const layer1X = useTransform(springX, (v) => v * 0.4);
  const layer1Y = useTransform(springY, (v) => v * 0.4);
  const layer2X = useTransform(springX, (v) => v * -0.25);
  const layer2Y = useTransform(springY, (v) => v * -0.25);
  const phoneX = useTransform(springX, (v) => v * 0.15);
  const phoneY = useTransform(springY, (v) => v * 0.15);

  return (
    <div className="relative w-full max-w-[480px] mx-auto h-[min(500px,68vh)] select-none">
      {/* Orbit ring */}
      <div className="absolute inset-8 rounded-full border border-white/[0.04] pointer-events-none" />
      <div className="absolute inset-16 rounded-full border border-dashed border-white/[0.03] pointer-events-none" />

      {/* Tech badges */}
      {techOrbit.map((tech, i) => (
        <motion.div
          key={tech.label}
          className="absolute z-20"
          style={{ left: tech.x, top: tech.y, x: layer2X, y: layer2Y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + i * 0.08 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            className="px-2.5 py-1 rounded-lg text-[10px] font-medium border backdrop-blur-sm"
            style={{
              color: tech.color,
              borderColor: `${tech.color}30`,
              background: "rgba(15, 15, 30, 0.6)",
            }}
          >
            {tech.label}
          </motion.div>
        </motion.div>
      ))}

      {/* Code panel — left */}
      <motion.div
        className="absolute left-0 top-[18%] z-30 w-[148px]"
        style={{ x: layer1X, y: layer1Y }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-xl border border-white/[0.08] bg-[#0a0a14]/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40"
        >
          <div className="flex items-center gap-1 px-2.5 py-1.5 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="w-2 h-2 rounded-full bg-red-500/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <div className="w-2 h-2 rounded-full bg-green-500/60" />
            <span className="text-[9px] text-white/30 ml-1 font-mono">ViewModel.kt</span>
          </div>
          <div className="p-2.5 font-mono text-[9px] leading-relaxed">
            <div className="text-[#C792EA]">@HiltViewModel</div>
            <div className="text-[#82AAFF]">class JobVM</div>
            <div className="text-[#89DDFF]">  @Inject constructor(</div>
            <div className="text-[#C3E88D]">    repo: JobRepo</div>
            <div className="text-[#89DDFF]">  ) : ViewModel()</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Architecture card — right */}
      <motion.div
        className="absolute right-0 top-[8%] z-30 w-[130px]"
        style={{ x: layer2X, y: layer2Y }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.65, duration: 0.7 }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-xl border border-white/[0.08] bg-[#0a0a14]/80 backdrop-blur-xl p-3 shadow-2xl shadow-black/40"
        >
          <div className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Architecture</div>
          {["UI", "ViewModel", "Repository", "Data"].map((layer, i) => (
            <div
              key={layer}
              className="text-[10px] py-1 px-2 rounded-md mb-1 border border-white/[0.05]"
              style={{
                background: `rgba(99, 102, 241, ${0.05 + i * 0.03})`,
                color: "rgba(255,255,255,0.65)",
              }}
            >
              {layer}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Center phone */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        style={{ x: phoneX, y: phoneY }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Device glow */}
          <div className="absolute -inset-6 bg-[#3DDC84]/[0.06] rounded-[3rem] blur-2xl" />

          {/* Phone frame */}
          <div className="relative w-[200px] md:w-[220px] rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#1a1a22] to-[#0d0d12] p-2 shadow-2xl shadow-black/60">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-[5px] rounded-full bg-black/60" />

            {/* Screen */}
            <div className="rounded-[1.4rem] overflow-hidden bg-[#06060c] border border-white/[0.04]">
              {/* Status bar */}
              <div className="flex justify-between items-center px-4 py-2 text-[9px] text-white/40">
                <span>9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="w-3 h-1.5 border border-white/30 rounded-sm" />
                </div>
              </div>

              {/* App UI */}
              <div className="px-3 pb-4 relative">
                <div className="mb-3">
                  <div className="text-[11px] font-semibold text-white/90">Hustle-Hub</div>
                  <div className="text-[9px] text-white/35">Production · MVVM</div>
                </div>

                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#3DDC84]/15 flex items-center justify-center text-xs">💼</div>
                      <div>
                        <div className="text-[10px] font-medium text-white/80">Live Jobs</div>
                        <div className="text-[8px] text-white/35">5 countries active</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04]"
                  >
                    <div className="h-1.5 rounded-full bg-white/10 w-full mb-1.5" />
                    <div className="h-1.5 rounded-full bg-white/5 w-2/3" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04]"
                  >
                    <div className="h-1.5 rounded-full bg-white/10 w-full mb-1.5" />
                    <div className="h-1.5 rounded-full bg-white/5 w-3/4" />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, type: "spring" }}
                  className="absolute bottom-6 right-5 w-9 h-9 rounded-full bg-[#3DDC84] flex items-center justify-center shadow-lg shadow-[#3DDC84]/25"
                >
                  <span className="text-slate-900 font-bold text-sm">+</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom stats card */}
      <motion.div
        className="absolute bottom-[6%] left-1/2 -translate-x-1/2 z-30"
        style={{ x: layer1X }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex gap-3 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-[#0a0a14]/75 backdrop-blur-xl">
          {[
            { val: "2+", label: "Years" },
            { val: "MVVM", label: "Pattern" },
            { val: "Compose", label: "UI" },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-2">
              <div className="text-sm font-semibold text-white/85">{stat.val}</div>
              <div className="text-[9px] text-white/35">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
