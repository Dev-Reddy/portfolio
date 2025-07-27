// "use client";
// import * as React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Link2, Menu } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// import gfg from "@/assets/gfg.png";
// import github from "@/assets/github.png";
// import hashnode from "@/assets/hashnode.png";
// import lc from "@/assets/lc.png";
// import x from "@/assets/x.jpg";
// import cf from "@/assets/cf.svg";
// import linkedin from "@/assets/linkedin.png";

// const profileLinks = [
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/in/devreddy07",
//     icon: linkedin,
//   },
//   {
//     name: "GitHub",
//     url: "https://github.com/Dev-Reddy",
//     icon: github,
//   },
//   {
//     name: "LeetCode",
//     url: "https://leetcode.com/u/DevReddy/",
//     icon: lc,
//   },
//   {
//     name: "X (Twitter)",
//     url: "https://x.com/cuatrocommas",
//     icon: x,
//   },
//   {
//     name: "GeeksforGeeks",
//     url: "https://www.geeksforgeeks.org/user/devreddy/",
//     icon: gfg,
//   },
//   {
//     name: "Hashnode Blog",
//     url: "https://decoding-ai-and-llm-jargons.hashnode.dev/",
//     icon: hashnode,
//   },
//   {
//     name: "Codeforces",
//     url: "https://codeforces.com/profile/devreddy4444",
//     icon: cf,
//   },
// ];

// export function ProfileLinksMobile() {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="outline" size="icon">
//           <Link2 className="h-4 w-4" />
//         </Button>
//       </SheetTrigger>
//       <SheetContent side="right" className="w-80">
//         <SheetHeader>
//           <SheetTitle>Profile Links</SheetTitle>
//           <SheetDescription>
//             Connect with me on various platforms
//           </SheetDescription>
//         </SheetHeader>
//         <div className="flex flex-col gap-4 mt-6">
//           {profileLinks.map((link, index) => (
//             <SheetClose asChild key={index}>
//               <Link
//                 href={link.url}
//                 className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Image
//                   src={link.icon}
//                   height={32}
//                   width={32}
//                   alt={link.name}
//                   className="rounded"
//                 />
//                 <span className="text-sm font-medium">{link.name}</span>
//               </Link>
//             </SheetClose>
//           ))}
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }
