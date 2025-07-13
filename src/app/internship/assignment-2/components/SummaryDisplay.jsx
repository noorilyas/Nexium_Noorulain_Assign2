
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function SummaryDisplay({ english, urdu }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <Card className="bg-white border border-zinc-300 shadow-sm">
        <CardHeader className="border-b">
          <CardTitle className="text-zinc-800 text-lg font-semibold">
            English Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-600 leading-relaxed">{english}</p>
        </CardContent>
      </Card>

      <Card className="bg-white border border-zinc-300 shadow-sm">
        <CardHeader className="border-b">
          <CardTitle className="text-zinc-800 text-lg font-semibold">
            Urdu Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-600 leading-relaxed urdu-font">{urdu}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
