"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { rulesConfig } from "@/config/site";

export default function RulesAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const { rules } = rulesConfig;

  return (
    <div className="space-y-3">
      {rules.map((rule, i) => {
        const Icon = rule.icon;
        const isOpen = open === i;
        return (
          <div
            key={rule.title}
            className={`glass rounded-2xl transition-colors ${
              isOpen ? "border-red-600/40" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`rule-panel-${i}`}
              className="flex w-full items-center gap-4 p-5 text-left"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600/10 text-red-500 ring-1 ring-red-600/30">
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex-1 font-semibold text-white">
                {rule.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-red-500" : ""
                }`}
              />
            </button>
            <div
              id={`rule-panel-${i}`}
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pl-[76px] leading-relaxed text-neutral-400">
                  {rule.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
