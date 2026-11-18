import React from "react";
import Image from "next/image";
import { IconFeather } from "@tabler/icons-react";

interface ArticleAuthorProps {
  name: string;
  role?: string;
  bio?: string;
  image?: string;
}

export function ArticleAuthor({
  name,
  role = "Editorial Contributor",
  bio = "The Language Landscapes Editorial Team brings together linguists, educators, and language enthusiasts dedicated to exploring the nuances of human expression.",
  image,
}: ArticleAuthorProps) {
  return (
    <div className="my-12 rounded-sm border border-[#292624]/10 bg-[#FFFFFF] p-7 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
        {/* Avatar */}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#292624]/10 bg-[#EFE9DF]">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="64px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#B32526]/10 text-[#B32526]">
              <IconFeather size={26} stroke={1.6} />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <h4 className="font-serif text-xl font-normal text-[#292624]">
              {name}
            </h4>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#81766C]">
              · {role}
            </span>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-[#514A45]">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
}
