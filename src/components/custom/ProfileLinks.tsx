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

export function ProfileLinksAlternate() {
  return (
    <div className="flex flex-col items-center gap-7">
      {/* Large screens: All in one row */}
      <div className="hidden md:flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
              <Link href="https://www.linkedin.com/in/devreddy07">
                <Image src={linkedin} height={40} width={40} alt="linkedin" />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>LinkedIn</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
              <Link href="https://github.com/Dev-Reddy">
                <Image src={github} height={40} width={40} alt="github" />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>GitHub</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
              <Link href="https://leetcode.com/u/DevReddy/">
                <Image src={lc} height={40} width={40} alt="Leetcode" />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>LeetCode</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
              <Link href="https://x.com/cuatrocommas">
                <Image src={x} height={40} width={40} alt="X" />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>X (Twitter)</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
              <Link href="https://www.geeksforgeeks.org/user/devreddy/">
                <Image src={gfg} height={40} width={40} alt="GFG" />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>GeeksforGeeks</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
              <Link href="https://decoding-ai-and-llm-jargons.hashnode.dev/">
                <Image src={hashnode} height={40} width={40} alt="hashnode" />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Hashnode Blog</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
              <Link href="https://codeforces.com/profile/devreddy4444">
                <Image src={cf} height={40} width={40} alt="codeforces" />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Codeforces</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Mobile: Two rows layout */}
      <div className="md:hidden flex flex-col items-center gap-7">
        {/* Top row - 4 links */}
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
                <Link href="https://www.linkedin.com/in/devreddy07">
                  <Image src={linkedin} height={40} width={40} alt="linkedin" />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
                <Link href="https://github.com/Dev-Reddy">
                  <Image src={github} height={40} width={40} alt="github" />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
                <Link href="https://leetcode.com/u/DevReddy/">
                  <Image src={lc} height={40} width={40} alt="Leetcode" />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>LeetCode</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
                <Link href="https://x.com/cuatrocommas">
                  <Image src={x} height={40} width={40} alt="X" />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>X (Twitter)</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Bottom row - 3 links */}
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
                <Link href="https://www.geeksforgeeks.org/user/devreddy/">
                  <Image src={gfg} height={40} width={40} alt="GFG" />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>GeeksforGeeks</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
                <Link href="https://decoding-ai-and-llm-jargons.hashnode.dev/">
                  <Image src={hashnode} height={40} width={40} alt="hashnode" />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hashnode Blog</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="hover:scale-110 p-2 rounded-full hover:shadow-sm cursor-pointer transition-all">
                <Link href="https://codeforces.com/profile/devreddy4444">
                  <Image src={cf} height={40} width={40} alt="codeforces" />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Codeforces</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
