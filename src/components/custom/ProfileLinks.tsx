"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import gfg from "@/assets/gfg.png";
import github from "@/assets/github.png";
import hashnode from "@/assets/hashnode.png";
import lc from "@/assets/lc.png";
import x from "@/assets/x.jpg";
import cf from "@/assets/cf.svg";
import linkedin from "@/assets/linkedin.png";

// Profile data array in the specified order
const profiles = [
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/devreddy/",
    icon: gfg,
    alt: "GFG",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/DevReddy/",
    icon: lc,
    alt: "Leetcode",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/devreddy07",
    icon: linkedin,
    alt: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/Dev-Reddy",
    icon: github,
    alt: "github",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/cuatrocommas",
    icon: x,
    alt: "X",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/devreddy4444",
    icon: cf,
    alt: "codeforces",
  },
  {
    name: "Hashnode Blog",
    url: "https://decoding-ai-and-llm-jargons.hashnode.dev/",
    icon: hashnode,
    alt: "hashnode",
  },
];

export type profileLinkProps = {
  profile: {
    name: string;
    url: string;
    icon: string;
    alt: string;
  };
};

// Component to render individual profile link
const ProfileLink = ({ profile }: profileLinkProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <div className="hover:scale-110 p-2 hover:bg-white/60 rounded-full hover:shadow-sm cursor-pointer transition-all">
        <Link href={profile.url}>
          <Image src={profile.icon} height={40} width={40} alt={profile.alt} />
        </Link>
      </div>
    </TooltipTrigger>
    <TooltipContent className="mb-1">
      <p>{profile.name}</p>
    </TooltipContent>
  </Tooltip>
);

export function ProfileLinks() {
  return (
    <div className="flex flex-col items-center gap-7">
      {/* Large screens: All in one row */}
      <div className="hidden md:flex gap-4">
        {profiles.map((profile, index) => (
          <ProfileLink key={index} profile={profile} />
        ))}
      </div>

      {/* Mobile: Two rows layout */}
      <div className="md:hidden flex flex-col items-center gap-4">
        {/* Top row - First 4 links */}
        <div className="flex gap-2">
          {profiles.slice(0, 4).map((profile, index) => (
            <ProfileLink key={index} profile={profile} />
          ))}
        </div>

        {/* Bottom row - Last 3 links */}
        <div className="flex gap-2">
          {profiles.slice(4, 7).map((profile, index) => (
            <ProfileLink key={index + 4} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
}
